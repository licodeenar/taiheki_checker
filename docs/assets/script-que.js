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
        '飲み会などでは深追いせず、ほどほどで切り上げる'
    ],
    '2種（上下:陰）': [
        '首が背中からまっすぐで、顔だけが前に出た姿勢になりやすい',
        'やせ型で、胃やみぞおちのあたりが弱い',
        '「正しいやり方」「正解」を確かめてから動きたい',
        '理性や社会の秩序を大切にする',
        'マニュアルや手順があると落ち着く',
        '前例のないことには慎重になる',
        '人前で褒められたり注目されるのは得意ではない',
        '「任せる」「期待している」と言われると気が重くなることがある',
        '買い物の前に必要なものをメモすることが多い',
        '考えごとが頭の中でぐるぐると回りやすい'
    ],
    '3種（左右:陽）': [
        '丸顔・童顔で、実年齢より若く見られることがある',
        '体に丸みがあり、なで肩で猫背気味になりやすい',
        '喜怒哀楽がはっきりしていて、表情に出やすい',
        '感情を引きずらず、気持ちの切り替えが早い',
        '「天然」と言われることがある',
        '「かわいい」「カラフル」なものに惹かれる',
        '食べることが好きだ',
        '空腹だと気分に出やすく、食べると元気が戻る',
        '物事を「好き・嫌い」で判断することが多い',
        '初対面でも打ち解けやすいほうだ'
    ],
    '4種（左右:陰）': [
        '角ばった体型で、いかり肩になりやすい',
        '食欲やストレスが胃腸に出やすい',
        '穏やかでニコニコして見られることが多い',
        '感情を表に出さないが、内側に残しやすい',
        'うまくいかないと「自分のせい」と考えがちだ',
        'やりたいことより、やりたくないことのほうがはっきりしている',
        '行き先や注文を相手に決めてもらうほうが楽だ',
        '人と会った後、一人で振り返ることが多い',
        '大勢より少人数の集まりを好む',
        'おいしいものを少量、じっくり味わうほうだ'
    ],
    '5種（前後:陽）': [
        '胸板が広く、逆三角形の体型をしている',
        '動作がきびきびしていて、歩くのが速い',
        '行動的で、持久力もあるほうだ',
        '好きなことには、すぐ動き出す',
        '合理的にテキパキ進めるのが得意だ',
        '物事への執着は薄く、諦めや切り替えも早い',
        'じっとしているより、前に進んでいたい',
        '休日にも予定を入れたくなる',
        'コスパや損得には敏感なほうだ',
        '時間のかかるコース料理より、さっと食べたい'
    ],
    '6種（前後:陰）': [
        '猫背・巻き肩で、内向きの姿勢になりやすい',
        '呼吸器系が弱く、疲れやすいほうだ',
        '決まりきった毎日が続くと、息苦しく感じる',
        '神秘的なものや非日常の世界に惹かれる',
        '運命やロマンを感じやすい',
        '旅行や寄り道、いつもと違う道を好む',
        '一人の時間が好きだ',
        '人に気にかけてもらえると嬉しい',
        'ハマると同じものをよく食べるが、好き嫌いはある',
        'やりたい気持ちはあるが、自分から動き出すのは苦手だ'
    ],
    '7種（ねじれ:陽）': [
        '上半身に厚みがあり、体格がしっかりしている',
        '座ると脚を組む、寝るとき体をねじるなど、体をひねる癖がある',
        'ライバルや勝負ごとがあると力が出る',
        '勝てそうにない勝負には、あまり挑まない',
        '目標のために努力を続けるのは苦にならない',
        '上下関係や筋を通すことを大切にする',
        '注意されると、つい感情が強く出てしまう',
        '困っている人がいると面倒を見たくなる',
        'まわりを気にせず、声が大きくなることがある',
        '負けたくない気持ちが強いほうだ'
    ],
    '8種（ねじれ:陰）': [
        '顔が四角く、エラが張っている／顔に左右差を感じる',
        '片側に重心が乗る、体をねじる姿勢になりやすい',
        '上から押さえつけられると、反発したくなる',
        '立場の弱い人を放っておけない',
        '委員や役職など、まとめ役を任されることが多い',
        '勝ち負けがからむ場面に敏感だ（むしろ避けたくなる）',
        '本心では、人と比べてしまうことがある',
        'つい逆のこと・反対のことを言ってしまう',
        'コツコツ積み重ねるのは得意なほうだ',
        '比べられると、つい張り合ってしまう'
    ],
    '9種（開閉:陽）': [
        '小柄で筋肉質、引き締まった体つきをしている',
        '骨盤や腰まわりがきゅっと締まった印象がある',
        '声が小さめで、ぼそぼそと話すことがある',
        '群れるより、自分のやり方を通したい',
        '納得できないと動けず、「なんで？」と確かめたくなる',
        '気に入ると、同じものを選び続ける',
        '物事をきっちり仕上げたい、完璧主義なところがある',
        '誤解されたくないので、説明が長くなりがちだ',
        'モノトーンやシンプルなものを好む',
        '中途半端が苦手で、基準をはっきりさせたい'
    ],
    '10種（開閉:陰）': [
        '大柄で、お尻まわりがどっしりした体型をしている',
        '踵をつけたまましゃがむのが苦手だ',
        '体つきや雰囲気に余裕・恰幅を感じる',
        '人を家に招いてもてなすのが好きだ',
        'こだわりすぎず、いろいろなものを楽しむ',
        '頼られると、世話を焼きたくなる',
        '相手によって態度を変えず、分け隔てなく接する',
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

    // プログレスバー
    const answered = Object.keys(state.ratings).length;
    const pct = Math.round((answered / total) * 100);
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
    } else {
        // 最後の問のプログレスを更新
        const answered = Object.keys(state.ratings).length;
        const pct = Math.round((answered / allQuestions.length) * 100);
        progressBar.style.width = pct + '%';
        progressPct.textContent = pct + '%';
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
