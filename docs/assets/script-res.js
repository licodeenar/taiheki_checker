document.addEventListener('DOMContentLoaded', () => {
    // URLパラメータから res を取得
    const urlParams = new URLSearchParams(window.location.search);
    const res = urlParams.get('res'); 
    const values = res ? res.split('-').map(Number) : [];


    // 並べ替えたデータを作成
    const originalLabels = ['1','2','3','4','5','6','7','8','9','10']; //resの順番
    const customOrder = ['1','2','4','6','8','10','9','7','5','3'];//表示順番
    const orderedValues = customOrder.map(label => {
        const idx = originalLabels.indexOf(label);
        return values[idx];
    });

    // レーダーチャート描画
    //チャート表示名
    const customOrderDisp = ['1種（上下:陽）','2種（上下:陰）','4種（左右:陰）','6種（前後:陰）','8種（ねじれ:陰）','10種（開閉:陰）',
                            '9種（開閉:陽）','7種（ねじれ:陽）','5種（前後:陽）','3種（左右:陽）'];

    // データとラベルを組み合わせてソートし、上位のインデックスを取得
    const sortedValues = [...orderedValues]
        .map((value, index) => ({ value, index }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 3)
        .map(item => item.index);
        
    // 上位2位以降の表示名を取得
    const otherNames = sortedValues.slice(1).map(index => `${customOrderDisp[index]}: ${orderedValues[index]}点`);

    // HTMLのh2タグを更新
    const titleElement = document.getElementById('chart-title');
    const subTitleElement = document.getElementById('chart-title-sub');
    //１位
    if(titleElement){
        titleElement.innerHTML = `${customOrderDisp[sortedValues[0]]}: ${orderedValues[sortedValues[0]]}点`;
    }
    //２位以降
    if (subTitleElement) {
        subTitleElement.innerHTML = `${otherNames.join('<br>')}`;
    }

    //レーダーチャート
    const ctx = document.getElementById('myRadarChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: customOrderDisp,
            datasets: [{
                label: '集計結果',
                data: orderedValues,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                pointBackgroundColor: 'rgba(54, 162, 235, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                r: {
                    angleLines: { display: true },
                    suggestedMin: 0,
                    startAngle: -18,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });

    // --- 体癖の説明文マップ ---
    const typeDescriptions = {
        '1種（上下:陽）': '<b>特徴:頭脳型</b><br>考えてから行動する。積極的に「ああしよう」「こうしよう」とあらゆる状況に考えを巡らせる。妄想や空想が好き。知的好奇心が旺盛。ただ、実行は苦手。やきもきせず、計画だけして誰かに実行してもらうのがよい。自分が納得してしまうと歯磨き粉を薬だと思い込んで効いてしまうくらい単純なところもある。<br><br>頭で考えること自体が発散になる。',
        '2種（上下:陰）': '<b>特徴:頭脳型</b><br>１種と同様に頭脳派。ただ、それを外に発散させることがない。心配性で、自分の頭で納得しないと行動できないが、規則やルールには従順で安心する。いわれたことはきちんとやる。秩序や安定を求める。良識的。言葉より更に活字に魅力を感じる。"絶対的権威が書いた書物"などが響く。暗示的にそれで自分が長生きできると思えば、その通りに行動し長生きする。<br><br>心配事などがあると胃にでやすい。',
        '3種（左右:陽）': '<b>特徴:感情型</b><br>感情以外のものの価値を認めないタイプ。損得や利害を説いてもわからない。食欲旺盛。よく食べる。嫌なことがあっても、体調不良でも、食べることで回復してしまう。明るく、楽しい。３種がいると場が和む。<br><br>好き嫌いで判断しがちで、聞きかじったことをそのまま口にしてしまう。',
        '4種（左右:陰）': '<b>特徴:感情型</b><br>食べるのが好き。３種のようにたくさん食べるよりも、こだわりがあり少量でも質の良いものを選ぶ傾向がある。感覚や感性を重視する。感情の起伏が常にあるが、一晩寝れば忘れてしまう。ただ、ずっと根っこにわだかまりを持ち続ける。溜め込むタイプ。感情を溜め込むと、胃が痛くなったり食欲がなくなる。穏やか。相手が喜ぶことが好き。<br><br>４種と良く付き合うには、根っこに溜め込まれた感情の方をひきだしてやることが大切。マゾ気がある。ときには叱ることもよい。',
        '5種（前後:陽）': '<b>特徴:損得勘定型</b><br>行動しないとはじまらないタイプ。賑やかな方が頭が回る。ながら作業派。不安や心配も行動によって克服しようとする。冒険家タイプ。快活で合理的な計算が働く。要領が良く、メリット・デメリットを重視する。流行に敏感なセンスは必ず計算によって裏付けされている。ただ哲学的な内省をするタイプではない。<br><br>行動に移す目的がなくなると不調になる。利害、理想、希望など行動の方向づけをしてあげるのがよい。',
        '6種（前後:陰）': '<b>特徴:損得勘定型</b><br>理想家で熱血漢。ただ計算が元にあるのでエネルギー節約型。普段はのんびりしている。偏食で奔放な所がある。自然体で偏見なく全てを受け入れる。神秘的なものが好き。理想主義的で、時に狂信的になるタイプ。英雄的行動に憧れ、思い切った行動を取る。利害や危険を認めつつも突き進む。<br><br>ヒステリー的な行動を取ることがある。好きな人を呼ぶために病気になったり怪我をしたりの行動を無意識に取ってしまう。６種と良く付き合うには、行動の目的の方をみてあげることが必要。',
        '7種（ねじれ:陽）': '<b>特徴:勝負型</b><br>勝負ごとや他者との対決に燃えるタイプ。闘争的。勝つための努力も惜しまない。攻めには強いが、負け戦に脆いところがある。自分より上と認めた人には従う傾向があり、ライバルがいるとやる気がさらに高まる。<br><br>外圧などが鬱積してくると、衝動的に反発行動として現れる。これを心理的に意思の弱さや、自分の不甲斐なさのせいにしないこと。７種の特徴を知らずに教育や指導しようとすると過剰に非行行動に走ったりしてしまう。<br><br>体の不調は泌尿器系にでやすい。',
        '8種（ねじれ:陰）': '<b>特徴:勝負型</b><br>対抗心が強い。男性は話を大きく盛りがち。負けず嫌いでよく努力するが、直接的な勝敗に収まりたがらない。かえって勝負事が嫌いなひともいる。負けとわかった戦いに粘り強く耐える。権威に反抗的で、弱者や敗者を放っておけない。言われたことと反対の行動をとりがち。あまのじゃく。プライドが高くからかわれるのが嫌。<br><br>特定の誰かを引き合いにだすと過剰にムキになって気張ってしまう。卑怯な手を使ったり、対立構造も生まれやすい。だから努力を向ける対象を歴史上の人物などに置くのが良い。',
        '9種（開閉:陽）': '<b>特徴:愛憎型</b><br>群れるよりも一人での行動を好む。哲学的な本質や理屈を重視して物事を深く考えます。相手に合わせるのが下手。強情なオタク。こだわりが強く、興味のあることには寝る間を惜しむほど没頭する。完璧主義。考えるよりも直感がよく働く。<br><br>意味がわからなければ行動にうつさない。かといって９種を勧誘するには口で説得しても無駄で、資料だけ送ってひたすら読んでもらうほうがよい。',
        '10種（開閉:陰）': '<b>特徴:愛憎型</b><br>庇うもの、世話するものがあると力を発揮する。頼られると世話を焼き、誰にでもおおらかで寛大。ただ大雑把なところがある。博愛主義の手本と言われることもあるが、そういう性分。自分が弱っているときも、傍に世話をすべき人や動物がいると力が湧いてきて、じきに自分も治ってしまう。<br><br>傾ける愛情の対象をえれば、食べなくても金がなくても全力が発揮できる。１０種の人がいたら安心して世話をしてもらうのがよい。それが本人のためにもなる。'
    };

    // --- resulttable に表示 ---
    const resultDiv = document.getElementById('result-table');
    if (top3Names.length > 0) {
        let html = ``;
        top3Names.forEach(name => {
            html += setTable(name);
        });
        resultDiv.innerHTML = html;
    }

    // 全ての体癖を表示する関数
    window.showAllTeiheki = function() {
        const allTeihekiNames = Object.keys(typeDescriptions);
        let allHtml = '';
        allTeihekiNames.forEach(name => {
            allHtml += setTable(name); 
        });
        resultDiv.innerHTML = allHtml; // result-tableの中身を上書き
    };

    //体癖の説明テーブルを生成
    function setTable(name){
        let html = ``;
        html += `<table class="chart_list"><tbody>`;
        html += `<tr><th>${name}</th></tr>`;
        html += `<tr><td>${typeDescriptions[name]}</td></tr>`;
        html += `</tbody></table><br>`;
        return html;
    }
});