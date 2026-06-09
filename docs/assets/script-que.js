const data = {
    '1種（上下:陽）': [
        '首がスッと長く、すらりとした体型である',
        '面長で、眼鏡が似合うと言われる',
        '感情よりも頭で論理的に考えることが多い',
        '公平さやルールを重んじる',
        '読書や活字に長く集中できる',
        'アイデアはよく浮かぶが、行動に移すまでには時間がかかる',
        '物事を一歩引いて俯瞰して見るほうだ',
        '歴史や知識を覚えるのが好きだ',
        '旅行やイベントは、計画を立てる段階が楽しい',
        '考えるとき、無意識に上を向く癖がある'
    ],
    '2種（上下:陰）': [
        '首が背中からまっすぐで、顔だけが前に出た姿勢になりやすい',
        'やせ型で、胃やみぞおちのあたりが弱い',
        '口が開きやすく、口呼吸になりやすい',
        '「正しいやり方」「正解」を確かめてから動きたい',
        'マニュアルや手順があると落ち着く',
        '前例のないことには慎重になる',
        '人前で褒められたり注目されるのは得意ではない',
        '「任せる」「期待している」と言われると気が重くなることがある',
        '考えごとが頭の中でぐるぐると回りやすい',
        'うつむき加減になることが多く、下を向く癖がある'
    ],
    '3種（左右:陽）': [
        '体に丸みがあり、なで肩になりやすい',
        '丸顔・童顔で、実年齢より若く見られることがある',
        '無意識に体が右に傾くことがある',
        '喜怒哀楽がはっきりしていて、表情に出やすい',
        '感情を引きずらず、気持ちの切り替えが早い',
        '「かわいい」「カラフル」なものに惹かれる',
        '食べることが好きだ',
        '空腹だと気分に出やすく、食べると元気が戻る',
        '物事を「好き・嫌い」で判断することが多い',
        '初対面でも打ち解けやすいほうだ'
    ],
    '4種（左右:陰）': [
        '角ばった体型で、いかり肩になりやすい',
        '頬骨が張っている',
        '無意識に体が左に傾くことがある',
        '穏やかでニコニコして見られることが多い',
        '感情を表に出さないが、内側に残しやすい',
        'うまくいかないと「自分のせい」と考えがちだ',
        'やりたいことより、やりたくないことのほうがはっきりしている',
        '人と会った後、一人で振り返ることが多い',
        '大勢より少人数の集まりを好む',
        '食欲やストレスが胃腸に出やすい'
    ],
    '5種（前後:陽）': [
        '胸板が広く、逆三角形の体型をしている',
        'エラが張っている、四角い顔つきだ',
        '自然と胸を張った姿勢になる',
        '行動的で、好きなことにはすぐ動き出す',
        '合理的にテキパキ進めるのが得意だ',
        '物事への執着は薄く、諦めや切り替えも早い',
        '休日にも予定を入れたくなる',
        'コスパや損得には敏感なほうだ',
        '靴の裏が偏ってすり減ることが多い',
        '時間のかかることにはイライラしがちだ'
    ],
    '6種（前後:陰）': [
        '猫背・巻き肩で、内向きの姿勢になりやすい',
        '呼吸器系が弱く、疲れやすいほうだ',
        'あごが細く、とがっている',
        '何かに集中すると、自然と背中を丸めてかがみ込む',
        '決まりきった毎日が続くと、息苦しく感じる',
        '神秘的なものや非日常の世界に惹かれる',
        '運命やロマンを感じやすい',
        '旅行や寄り道、いつもと違う道を好む',
        '割に合わないと感じると、すっと気持ちが冷める',
        'やりたい気持ちはあるが、自分から動き出すのは苦手だ'
    ],
    '7種（ねじれ:陽）': [
        '上半身に厚みがあり、体格がしっかりしている',
        '顔に厚みがあり、存在感のある顔つきだ',
        '話すとき、体の上半身をひねる動きが出ることがある',
        'ライバルや勝負ごとがあると力が出る',
        '目標のために努力を続けるのは苦にならない',
        '上下関係や筋を通すことを大切にする',
        '注意されると、つい感情が強く出てしまう',
        '困っている人がいると面倒を見たくなる',
        '負けたくない気持ちが強いほうだ',
        '腰が強く、踏ん張りがきくほうだ'
    ],
    '8種（ねじれ:陰）': [
        '下半身が太りやすく、洋ナシ体型になりやすい',
        '顔が四角く、エラが張っている',
        '下半身で踏んばる、腰を落とした姿勢になりやすい',
        '上から押さえつけられると、反発したくなる',
        '立場の弱い人を放っておけない',
        '委員や役職など、まとめ役を任されることが多い',
        '勝ち負けがからむ場面に敏感だ（むしろ避けたくなる）',
        '本心では、人と比べてしまうことがある',
        'つい逆のこと・反対のことを言ってしまう',
        '比べられると、つい張り合ってしまう'
    ],
    '9種（開閉:陽）': [
        '小柄で筋肉質、引き締まった体つきをしている',
        '顔が小さく、キュッと引き締まった顔つきだ',
        '骨盤を締めるように、内また気味の姿勢になりやすい',
        '群れるより、自分のやり方を通したい',
        '納得できないと動けず、「なんで？」と確かめたくなる',
        '気に入ると、同じものを選び続ける',
        '物事をきっちり仕上げたい、完璧主義なところがある',
        'モノトーンやシンプルなものを好む',
        '心の傷はなかなか消えず、長く引きずることがある',
        '中途半端が苦手で、基準をはっきりさせたい'
    ],
    '10種（開閉:陰）': [
        '大柄で、お尻まわりがどっしりした体型をしている',
        '踵をつけたまましゃがむのが苦手だ',
        '目と目の間が広く、顔のパーツが大きい',
        'どっしりとした重心で、ゆったりした歩き方になりやすい',
        '人を家に招いてもてなすのが好きだ',
        'こだわりすぎず、いろいろなものを楽しむ',
        '頼られると、世話を焼きたくなる',
        'ペットや子どもをかわいがるほうだ',
        'スキンシップがあると安心する',
        '人と関わるのが好きで、おおらかなほうだ'
    ]
};

const RADAR_ORDER = [
    '1種（上下:陽）', '2種（上下:陰）', '3種（左右:陽）', '4種（左右:陰）',
    '5種（前後:陽）', '6種（前後:陰）', '7種（ねじれ:陽）', '8種（ねじれ:陰）',
    '9種（開閉:陽）', '10種（開閉:陰）'
];

// 全質問をフラット化
const allQuestions = [];
for (const type of RADAR_ORDER) {
    for (const text of data[type]) {
        allQuestions.push({ type, text });
    }
}

// --- 状態管理 ---
const SS_KEY = 'taiheki_v2';

function loadState() {
    try {
        const s = sessionStorage.getItem(SS_KEY);
        return s ? JSON.parse(s) : null;
    } catch { return null; }
}

function saveState(state) {
    sessionStorage.setItem(SS_KEY, JSON.stringify(state));
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// 状態の初期化（または復元）
let state = loadState();
if (!state || !state.order || state.order.length !== allQuestions.length) {
    state = {
        order: shuffle(allQuestions.map((_, i) => i)), // シャッフルされたインデックス
        ratings: {},   // { originalIndex: value }
        current: 0     // 現在の表示位置（0〜99）
    };
    saveState(state);
}

// --- DOM 参照 ---
const cardEl      = document.getElementById('question-card');
const numEl       = document.getElementById('question-number');
const textEl      = document.getElementById('question-text');
const progressBar = document.getElementById('progress-bar');
const progressTxt = document.getElementById('progress-text');
const progressPct = document.getElementById('progress-pct');
const submitWrap  = document.getElementById('submit-wrap');
const btnNext     = document.getElementById('btn-next');
const btnPrev     = document.getElementById('btn-prev');
const ratingBtns  = document.querySelectorAll('.rating-btn');

function render() {
    const pos = state.current;
    const origIdx = state.order[pos];
    const q = allQuestions[origIdx];
    const total = allQuestions.length;

    // 質問表示
    numEl.textContent  = `Q${pos + 1}`;
    textEl.textContent = q.text;

    // カードアニメーションリセット
    cardEl.style.animation = 'none';
    cardEl.offsetHeight; // reflow
    cardEl.style.animation = '';

    // 選択状態の復元
    const saved = state.ratings[origIdx];
    ratingBtns.forEach(btn => {
        btn.classList.toggle('selected', Number(btn.dataset.value) === saved);
    });

    // プログレスバー（現在の問番号ベース）
    const pct = Math.round(((pos + 1) / total) * 100);
    progressBar.style.width = pct + '%';
    progressTxt.textContent = `第 ${pos + 1} 問 / ${total} 問`;
    progressPct.textContent = pct + '%';

    // ナビゲーション
    btnPrev.disabled = pos === 0;

    const isLast = pos === total - 1;
    btnNext.style.display  = isLast ? 'none' : '';
    submitWrap.style.display = isLast ? '' : 'none';
}

function selectRating(value) {
    const origIdx = state.order[state.current];
    state.ratings[origIdx] = value;
    saveState(state);

    ratingBtns.forEach(btn => {
        btn.classList.toggle('selected', Number(btn.dataset.value) === value);
    });

    // 最後の問題でなければ自動的に次へ
    if (state.current < allQuestions.length - 1) {
        setTimeout(() => navigate(1), 320);
    }
}

function navigate(dir) {
    const next = state.current + dir;
    if (next < 0 || next >= allQuestions.length) return;
    state.current = next;
    saveState(state);
    render();
}

function submitSurvey() {
    const unanswered = allQuestions.length - Object.keys(state.ratings).length;
    if (unanswered > 0) {
        if (!confirm(`${unanswered}問が未回答です。\nこのまま診断に進みますか？\n（未回答は「どちらでもない」として集計されます）`)) return;
    }

    const scores = {};
    for (const type of RADAR_ORDER) scores[type] = 0;

    for (let origIdx = 0; origIdx < allQuestions.length; origIdx++) {
        const rating = state.ratings[origIdx] ?? 0;
        scores[allQuestions[origIdx].type] += rating;
    }

    const resParam = RADAR_ORDER.map(k => scores[k]).join(',');
    window.location.href = `chart.html?res=${resParam}`;
}

function clearSurvey() {
    sessionStorage.removeItem(SS_KEY);
    location.reload();
}

// 初期描画
render();
