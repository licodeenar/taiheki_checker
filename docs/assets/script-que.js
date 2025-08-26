const data = {
    '1種（上下:陽）': [
    '首がスッと長い、また太く大柄だ',
    '面長で学者っぽい顔つき、眼鏡が似合う',
    '感情よりも頭で論理的に考えがち',
    '公平さ、ルールを重んじる',
    '本が好き、活字に集中できる',
    'アイデアは浮かぶが、行動に移すのは少ない',
    '物事を俯瞰する視点を持つ',
    '歴史を覚えるのが好き',
    '旅行やイベントは計画することで満足しがち',
    '飲み会などでは終電までに帰る、冒険は控えめ'
    ],
    '2種（上下:陰）': [
    '首が背中からまっすぐで顔だけ前に出ている',
    '常に「正解」を求めがち',
    '理性や公平さ、社会秩序を優先する',
    'マニュアルがあると安心する',
    '前例のないことや冒険はしない',
    '注目されることや人前で褒められるのが苦手',
    '「任せる」「期待している」が負担に感じる',
    '買い物の前に必要なものをメモする',
    '心配性で考えが頭の中でぐるぐる回りやすい',
    'ストレスや心配事があると胃が痛くなりやすい'
    ],
    '3種（左右:陽）': [
    '丸顔・童顔で、実年齢より若く見られる',
    '体に丸みがあり、なで肩で猫背気味になる',
    '喜怒哀楽がはっきりしていて感情的',
    '感情を引きずらずにすぐ切り替えられる',
    '天然だと言われることが多い',
    '「かわいい」「カラフル」なものに惹かれる',
    '食べることが大好き',
    '空腹だと不機嫌になる、食べると元気がでる',
    '人当たりがよく親しみやすいとよく言われる',
    '好き嫌いでものごとを決めてしまう'
    ],
    '4種（左右:陰）': [
    '角ばった体型で、いかり肩になりやすい',
    '穏やかでニコニコして見える',
    '感情をあまり表に出さないが根に持つタイプ',
    '負の感情に影響されやすく、「自分のせい」と考えてしまう',
    'やりたいことより、やりたくないことははっきりしている',
    '人の意見を優先しがち、行き先や注文を決めてもらう',
    '人と会った後に一人反省会をしてしまう',
    '大勢より少人数の集まりを好む',
    'ストレスが食欲が落ちたり胃に現れる',
    'おいしいものを少量じっくり味わうほう'
    ],
    '5種（前後:陽）': [
    '胸板が広く、逆三角形の体型をしている',
    '行動的で持久力もあるほうだ',
    '好きなことに対しては即行動する',
    '合理的にテキパキ仕事をこなすのが得意',
    '執着があまりなく、諦めも早い、せっかち',
    '深く思い悩むより、常に前を向いていたい',
    '休日は予定を入れる、じっとしているのが苦手',
    'コスパや損得には敏感である',
    '身につけるものにこだわりがある',
    'コース料理など時間のかかる食事は苦手'
    ],
    '6種（前後:陰）': [
    '単調な毎日に縛られるのは息苦しい',
    '神秘的な世界や非日常に浸るのが好き',
    '運命やロマンを感じやすい',
    '猫背・巻き肩、内向きの姿勢になりやすい',
    '呼吸器系が弱く疲れやすい',
    '旅行・寄り道・冒険を好む',
    '一人の時間を好む（でも人にかまわれるのも好き）',
    'ハマるとよく食べるが偏食である',
    'イベンドが大好きだが面倒くさがりで自分では動かない',
    '強情でこだわりが強く感情が爆発してしまうことがある'
    ],
    '7種（ねじれ:陽）': [
    '勝負ごとやライバルがいると燃える',
    '勝てない勝負には挑まず、あきらめが早い',
    '将来追い抜くために、努力は怠らない',
    '上半身が厚みがあり、大きな体格である',
    '上下関係には厳しいほうだ',
    '人に注意されると、怒りの感情が強く出る',
    '正義感が強く、面倒見が良いほうだ',
    '周囲を気にせず、大きな声で話すことがある',
    '闘争的で、プライドが高いほうだ',
    '褒めるだけでなく、欠点も指摘すべきだ'
    ],
    '8種（ねじれ:陰）': [
    '顔は四角くエラが張っている',
    '上から目線の相手には反発したくなる',
    '弱者い立場の人を手助け、放っておけない',
    'クラス委員や役職などを任されることが多い',
    '勝負事に敏感（かえって勝負事が嫌い）',
    '表には出さないが、劣等感が強い',
    'あまのじゃくで、つい正反対を言ってしまう',
    '誰かと比べられると気張ってしまう',
    'コツコツ努力を積み重ねるのは苦にならない',
    '男：話を盛りがち、女：議論で声が大きくなりがち'
    ],
    '9種（開閉:陽）': [
    '群れるよりも基本的に我道を行きたい',
    '納得できないと動けない、「なんで？」と問い詰めてしまう',
    '気に入ると同じものばかりを選び続ける',
    '職人気質で、完璧主義なところがある',
    '恨みつらみをずっと引きずってしまう',
    '誤解を避けたいので、説明が長くなりがち',
    'モノトーンを好む、女性は化粧っ気がない',
    '筋肉質で、小柄なほうである',
    '声が小さく、ぼそぼそと喋る',
    '半端が苦手、自分にも他人にも厳しい'
    ],
    '10種（開閉:陰）': [
    '品が良く、人相が良いと言われる',
    '大柄で、お尻が大きい体型をしている',
    '踵をつけてしゃがむのが苦手',
    '人を家でもてなすことが好きだ',
    'こだわりが少なく、たくさんのものを楽しむのが好き',
    '親分肌で、頼られると世話を焼いてしまう',
    '誰にでも優しく平等に接する',
    'ペットや子どもをとてもかわいがる',
    'スキンシップをとると安心できる',
    '人が好きで、自分にも他人にも甘い'
    ]
};

// 集計順序
const RADAR_ORDER = ['1種（上下:陽）','2種（上下:陰）','3種（左右:陽）','4種（左右:陰）',
                    '5種（前後:陽）','6種（前後:陰）','7種（ねじれ:陽）','8種（ねじれ:陰）',
                    '9種（開閉:陽）','10種（開閉:陰）'];

const questionsDiv = document.getElementById('questions');

// チェックボックス生成
for (let type in data) {
    const div = document.createElement('div');
    div.className = 'category';
    const h2 = document.createElement('h2');
    h2.textContent = type;
    div.appendChild(h2);

    data[type].forEach((q, i) => {
    const label = document.createElement('label');
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.dataset.type = type;
    label.appendChild(cb);
    label.appendChild(document.createTextNode(' ' + q));
    div.appendChild(label);
    div.appendChild(document.createElement('br'));
    });

    questionsDiv.appendChild(div);
}

// 送信処理
function submitSurvey() {
    const counts = {};
    for (let type in data) counts[type] = 0;

    document.querySelectorAll('input[type=checkbox]').forEach(cb => {
    if (cb.checked) counts[cb.dataset.type]++;
    });

    const resParam = RADAR_ORDER.map(k => counts[k]).join('-');

    // chart.html に GET でリダイレクト
    window.location.href = `chart.html?res=${resParam}`;
}



//--------------------------------------------------
// ページ読み込み時に状態を復元する
window.addEventListener('load', () => {
    const savedState = JSON.parse(sessionStorage.getItem('surveyCheckboxState'));
    if (savedState) {
        document.querySelectorAll('input[type=checkbox]').forEach(cb => {
            const type = cb.dataset.type;
            const index = Array.from(cb.parentNode.parentNode.querySelectorAll('input[type=checkbox]')).indexOf(cb);
            if (savedState[type] && savedState[type][index] !== undefined) {
                cb.checked = savedState[type][index];
            }
        });
    }
});

// 送信処理（変更なし）
function submitSurvey() {
    // 送信前に状態を保存
    saveCheckboxState();

    const counts = {};
    for (let type in data) counts[type] = 0;

    document.querySelectorAll('input[type=checkbox]').forEach(cb => {
        if (cb.checked) counts[cb.dataset.type]++;
    });

    const resParam = RADAR_ORDER.map(k => counts[k]).join('-');
    window.location.href = `chart.html?res=${resParam}`;
}

// ユーザーがチェックボックスを操作したときに状態を保存する
document.querySelectorAll('input[type=checkbox]').forEach(cb => {
    cb.addEventListener('change', () => {
        saveCheckboxState();
    });
});

function saveCheckboxState() {
    const checkboxState = {};
    for (let type in data) {
        checkboxState[type] = Array.from(document.querySelectorAll(`input[data-type='${type}']`)).map(cb => cb.checked);
    }
    sessionStorage.setItem('surveyCheckboxState', JSON.stringify(checkboxState));
}

function clearSurvey() {
    // すべてのチェックボックスのチェックを外す
    document.querySelectorAll('input[type=checkbox]').forEach(cb => {
        cb.checked = false;
    });

    // sessionStorageからデータを削除する
    sessionStorage.removeItem('surveyCheckboxState');
}