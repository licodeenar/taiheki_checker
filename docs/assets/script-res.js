document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const res = urlParams.get('res');
    // カンマ区切り（負の値対応）
    const values = res ? res.split(',').map(Number) : [];

    // 表示順の並べ替え（レーダーチャート用）
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

    // 上位3種を特定
    const sortedIndices = [...orderedValues]
        .map((value, index) => ({ value, index }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 3)
        .map(item => item.index);

    // タイトル表示
    const titleEl    = document.getElementById('chart-title');
    const subTitleEl = document.getElementById('chart-title-sub');
    if (titleEl) {
        titleEl.innerHTML = `${customOrderDisp[sortedIndices[0]]}: ${orderedValues[sortedIndices[0]]}点`;
    }
    if (subTitleEl) {
        const others = sortedIndices.slice(1)
            .map(i => `${customOrderDisp[i]}: ${orderedValues[i]}点`);
        subTitleEl.innerHTML = others.join('<br>');
    }

    // レーダーチャート
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
                    pointLabels: {
                        font: { size: 11 },
                        color: '#555'
                    }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });

    // 体癖説明
    const typeDescriptions = {
        '1種（上下:陽）': '<b>特徴：頭脳型</b><br>考えてから行動する。あらゆる状況に考えを巡らせ、妄想や空想が好き。知的好奇心が旺盛だが実行は苦手。計画だけして誰かに実行してもらうのがよい。自分が納得してしまうと暗示にかかりやすい単純なところもある。<br><br>頭で考えること自体が発散になる。',
        '2種（上下:陰）': '<b>特徴：頭脳型</b><br>１種と同様に頭脳派だが、それを外に発散しない。心配性で自分の頭で納得しないと動けない。規則やルールには従順で安心する。言われたことはきちんとやる。秩序や安定を求める。活字や"絶対的権威が書いた書物"に響きやすい。<br><br>心配事は胃に出やすい。',
        '3種（左右:陽）': '<b>特徴：感情型</b><br>感情以外の価値を認めにくいタイプ。損得や利害を説いてもわかりにくい。食欲旺盛でよく食べる。嫌なことがあっても食べると回復する。明るく楽しく、場を和ませる。<br><br>好き嫌いで判断しがちで、聞きかじりをそのまま口にしてしまうことがある。',
        '4種（左右:陰）': '<b>特徴：感情型</b><br>食べるのが好き。少量でも質の良いものを選ぶ傾向。感情の起伏は常にあるが一晩寝れば忘れてしまう。ただ根っこにわだかまりを持ち続ける溜め込みタイプ。穏やかで相手が喜ぶことが好き。<br><br>感情を溜め込むと胃痛や食欲不振になりやすい。',
        '5種（前後:陽）': '<b>特徴：損得勘定型</b><br>行動しないと始まらないタイプ。賑やかな方が頭が回る。ながら作業派。不安も行動で克服しようとする。快活で合理的、メリット・デメリットを重視する。流行に敏感だがセンスの裏には計算がある。<br><br>目的がなくなると不調になる。行動の方向づけをしてあげるのがよい。',
        '6種（前後:陰）': '<b>特徴：損得勘定型</b><br>理想家で熱血漢。ただ計算が元にあるのでエネルギー節約型。普段はのんびり。自然体で偏見なく全てを受け入れる。神秘的なものが好きで理想主義的。思い切った行動を取ることもある。<br><br>好きな人を呼ぶために無意識に病気になったり怪我をしたりの行動を取ることがある。',
        '7種（ねじれ:陽）': '<b>特徴：勝負型</b><br>他者との対決に燃えるタイプ。勝つための努力を惜しまない。攻めには強いが負け戦には脆い。自分より上と認めた人には従い、ライバルがいるとやる気がさらに高まる。<br><br>外圧が鬱積すると衝動的な反発行動に現れやすい。体の不調は泌尿器系に出やすい。',
        '8種（ねじれ:陰）': '<b>特徴：勝負型</b><br>対抗心が強く負けず嫌いだが直接的な勝敗に収まりたがらない。権威に反抗的で弱者・敗者を放っておけない。言われたことと反対の行動をとりがちであまのじゃく。プライドが高い。<br><br>特定の誰かを引き合いに出すと過剰にムキになる。努力の対象を歴史上の人物などに置くのが良い。',
        '9種（開閉:陽）': '<b>特徴：愛憎型</b><br>群れより一人の行動を好む。哲学的な本質を重視し物事を深く考える。強情なこだわりがあり、興味のあることには没頭する完璧主義。直感がよく働く。<br><br>意味がわからなければ動かない。勧誘より資料を渡してひたすら読んでもらう方が有効。',
        '10種（開閉:陰）': '<b>特徴：愛憎型</b><br>庇うもの・世話するものがあると力を発揮する。頼られると世話を焼き、誰にでもおおらかで寛大。博愛主義的な性分。傍に世話をすべき人や動物がいると自分の不調も回復してしまう。<br><br>愛情を傾ける対象があれば食べなくても金がなくても全力を発揮できる。'
    };

    // 上位3種の説明を表示
    const resultDiv  = document.getElementById('result-table');
    const top3Names  = sortedIndices.map(i => customOrderDisp[i]);
    if (top3Names.length > 0 && resultDiv) {
        resultDiv.innerHTML = top3Names.map(name => makeTable(name)).join('');
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
