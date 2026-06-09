document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const res = urlParams.get('res');
    const values = res ? res.split(',').map(Number) : Array(10).fill(0);

    // --- レーダーチャート用の表示順変換 ---
    const originalLabels  = ['1','2','3','4','5','6','7','8','9','10'];
    const customOrder     = ['1','2','4','6','8','10','9','7','5','3'];
    const customOrderDisp = [
        '1種（上下:陽）', '2種（上下:陰）', '4種（左右:陰）', '6種（前後:陰）',
        '8種（ねじれ:陰）', '10種（開閉:陰）', '9種（開閉:陽）', '7種（ねじれ:陽）',
        '5種（前後:陽）', '3種（左右:陽）'
    ];
    const orderedValues = customOrder.map(label => {
        const idx = originalLabels.indexOf(label);
        return values[idx] ?? 0;
    });

    // --- 型名（RADAR_ORDER 順：idx 0=1種 … 9=10種）---
    const TYPE_NAMES = [
        '1種（上下:陽）', '2種（上下:陰）', '3種（左右:陽）', '4種（左右:陰）',
        '5種（前後:陽）', '6種（前後:陰）', '7種（ねじれ:陽）', '8種（ねじれ:陰）',
        '9種（開閉:陽）', '10種（開閉:陰）'
    ];

    // --- 軸ペア定義（RADAR_ORDER のインデックスで指定）---
    const AXIS_PAIRS = [[0,1],[2,3],[4,5],[6,7],[8,9]];
    const AXIS_NAMES = ['上下','左右','前後','ねじれ','開閉'];

    function getAxisPairIdx(typeIdx) {
        return AXIS_PAIRS.findIndex(p => p.includes(typeIdx));
    }

    // --- 軸制約を適用しながら上位3スロットを選出 ---
    const sortedByScore = values
        .map((score, idx) => ({ score, idx }))
        .sort((a, b) => b.score - a.score);

    const topItems = [];        // 表示する体癖 {score, idx}
    const suppressed = new Set();
    const tiedTypeIndices = new Set();
    const tiedAxisNames = [];
    let slots = 0;

    for (const item of sortedByScore) {
        if (suppressed.has(item.idx)) continue;
        if (slots >= 3) break;

        const axisIdx = getAxisPairIdx(item.idx);
        if (axisIdx >= 0) {
            const partnerIdx = AXIS_PAIRS[axisIdx].find(i => i !== item.idx);
            suppressed.add(partnerIdx);

            if (values[partnerIdx] === item.score) {
                // 同点：両方表示
                tiedTypeIndices.add(item.idx);
                tiedTypeIndices.add(partnerIdx);
                tiedAxisNames.push(AXIS_NAMES[axisIdx]);
                topItems.push(item);
                topItems.push({ score: values[partnerIdx], idx: partnerIdx });
            } else {
                topItems.push(item);
            }
        } else {
            topItems.push(item);
        }
        slots++;
    }

    // --- タイトル表示 ---
    function itemLabel(item) {
        const tied = tiedTypeIndices.has(item.idx);
        return `${TYPE_NAMES[item.idx]}: ${item.score}点${tied ? ' <small>（同点）</small>' : ''}`;
    }

    const titleEl    = document.getElementById('chart-title');
    const subTitleEl = document.getElementById('chart-title-sub');
    if (titleEl && topItems.length > 0) {
        titleEl.innerHTML = itemLabel(topItems[0]);
    }
    if (subTitleEl && topItems.length > 1) {
        subTitleEl.innerHTML = topItems.slice(1).map(itemLabel).join('<br>');
    }

    // --- 同点警告（同点時のみ表示）---
    const tieWarningEl = document.getElementById('tie-warning');
    if (tieWarningEl && tiedAxisNames.length > 0) {
        tieWarningEl.innerHTML =
            `⚠️ ${tiedAxisNames.join('・')}軸のペアが同点です。` +
            `どちらか一方に絞り込むには、体型・姿勢の項目を見直してみてください。`;
        tieWarningEl.style.display = '';
    }

    // --- レーダーチャート ---
    const ctx = document.getElementById('myRadarChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: customOrderDisp,
            datasets: [{
                label: '診断スコア',
                data: orderedValues,
                backgroundColor: 'rgba(108, 99, 255, 0.15)',
                borderColor: 'rgba(108, 99, 255, 0.9)',
                pointBackgroundColor: 'rgba(108, 99, 255, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(108, 99, 255, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                r: {
                    angleLines: { display: true, color: 'rgba(0,0,0,0.08)' },
                    grid: { color: 'rgba(0,0,0,0.06)' },
                    suggestedMin: -20,
                    suggestedMax: 20,
                    startAngle: -18,
                    ticks: {
                        stepSize: 5,
                        color: '#999',
                        backdropColor: 'transparent',
                        font: { size: 10 }
                    },
                    pointLabels: { font: { size: 11 }, color: '#555' }
                }
            },
            plugins: { legend: { display: false } }
        }
    });

    // --- 体癖説明 ---
    const typeDescriptions = {
        '1種（上下:陽）': '<b>特徴：頭脳型</b><br>考えてから行動する。仮説を立てて検証するのが好きで、知的好奇心が旺盛。ただし実行は苦手で、計画だけして誰かに実行してもらうのがよい。自分が納得してしまうと暗示にかかりやすい単純なところもある。<br><br>頭で考えること自体が発散になる。',
        '2種（上下:陰）': '<b>特徴：頭脳型</b><br>１種と同様に頭脳派だが、それを外に発散しない。心配性で自分の頭で納得しないと動けない。マニュアルや前例を重視し、秩序や安定があると安心する。言われたことはきちんとやる。<br><br>心配事は胃に出やすい。',
        '3種（左右:陽）': '<b>特徴：感情型</b><br>感情以外の価値を認めにくいタイプ。損得や利害を説いてもわかりにくい。食欲旺盛でよく食べる。嫌なことがあっても食べると回復する。明るく楽しく、場を和ませる。<br><br>好き嫌いで判断しがちで、聞きかじりをそのまま口にしてしまうことがある。',
        '4種（左右:陰）': '<b>特徴：感情型</b><br>食べるのが好き。少量でも質の良いものを選ぶ傾向。感情の起伏は常にあるが、表面上は穏やかに見える。根っこにわだかまりを持ち続ける溜め込みタイプ。穏やかで相手が喜ぶことが好き。<br><br>感情を溜め込むと胃痛や食欲不振になりやすい。',
        '5種（前後:陽）': '<b>特徴：損得勘定型</b><br>行動しないと始まらないタイプ。賑やかな方が頭が回る。ながら作業派。不安も行動で克服しようとする。快活で合理的、メリット・デメリットを重視する。流行に敏感だがセンスの裏には計算がある。<br><br>目的がなくなると不調になる。行動の方向づけをしてあげるのがよい。',
        '6種（前後:陰）': '<b>特徴：損得勘定型</b><br>夢想家でロマンチスト。ただ計算が元にあるのでエネルギー節約型。自分で動くよりうまく流れに乗ることを好む。神秘的なものや非日常が好きで理想主義的。普段はのんびりしているが、ロマンや理想に火がつくと思い切った行動を取ることもある。<br><br>好きな人を呼ぶために無意識に病気になったり怪我をしたりの行動を取ることがある。',
        '7種（ねじれ:陽）': '<b>特徴：勝負型</b><br>他者との対決に燃えるタイプ。勝つための努力を惜しまない。攻めには強いが負け戦には脆い。自分より上と認めた人には従い、ライバルがいるとやる気がさらに高まる。<br><br>外圧が鬱積すると衝動的な反発行動に現れやすい。体の不調は泌尿器系に出やすい。',
        '8種（ねじれ:陰）': '<b>特徴：勝負型</b><br>対抗心が強く負けず嫌いだが直接的な勝敗に収まりたがらない。権威に反抗的で弱者・敗者を放っておけない。言われたことと反対の行動をとりがちであまのじゃく。プライドが高い。<br><br>特定の誰かを引き合いに出すと過剰にムキになる。努力の対象を歴史上の人物などに置くのが良い。',
        '9種（開閉:陽）': '<b>特徴：愛憎型</b><br>群れより一人の行動を好む。哲学的な本質を重視し物事を深く考える。強情なこだわりがあり、興味のあることには没頭する完璧主義。直感がよく働く。<br><br>意味がわからなければ動かない。勧誘より資料を渡してひたすら読んでもらう方が有効。',
        '10種（開閉:陰）': '<b>特徴：愛憎型</b><br>庇うもの・世話するものがあると力を発揮する。頼られると世話を焼き、おおらかで寛大に見えるが、愛情の優先順位は実はある。傍に世話をすべき人や動物がいると自分の不調も回復してしまう。<br><br>愛情を傾ける対象があれば食べなくても金がなくても全力を発揮できる。'
    };

    // --- 結果テーブル ---
    const resultDiv = document.getElementById('result-table');
    if (resultDiv && topItems.length > 0) {
        resultDiv.innerHTML = topItems.map(item => makeTable(TYPE_NAMES[item.idx])).join('');
    }

    window.showAllTeiheki = function() {
        resultDiv.innerHTML = Object.keys(typeDescriptions).map(name => makeTable(name)).join('');
    };

    function makeTable(name) {
        return `<table class="chart_list"><tbody>
            <tr><th>${name}</th></tr>
            <tr><td>${typeDescriptions[name]}</td></tr>
        </tbody></table>`;
    }
});
