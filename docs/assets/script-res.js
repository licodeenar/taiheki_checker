// URLパラメータから res を取得
const urlParams = new URLSearchParams(window.location.search);
const res = urlParams.get('res'); 
const values = res ? res.split('-').map(Number) : [];


// 並べ替えたデータを作成
const originalLabels = ["1","2","3","4","5","6","7","8","9","10"]; //resの順番
const customOrder = ["1","2","4","6","8","10","9","7","5","3"];//表示順番
const orderedValues = customOrder.map(label => {
    const idx = originalLabels.indexOf(label);
    return values[idx];
});

// レーダーチャート描画
//チャート表示名
const customOrderDisp = ["1種（上下:陽）","2種（上下:陰）","4種（左右:陰）","6種（前後:陰）","8種（ねじれ:陰）","10種（開閉:陰）",
                          "9種（開閉:陽）","7種（ねじれ:陽）","5種（前後:陽）","3種（左右:陽）"];

// データとラベルを組み合わせてソートし、上位のインデックスを取得
const sortedValues = [...orderedValues]
    .map((value, index) => ({ value, index }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 3)
    .map(item => item.index);
    
// 上位3位の表示名を取得
const top3Names = sortedValues.map(index => customOrderDisp[index]);

// HTMLのh2タグを更新
const titleElement = document.getElementById('chart-title');
if (top3Names.length > 0) {
    titleElement.innerHTML = `得点の高かった体癖:<br> ${top3Names.join('<br>')}`;
} 


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
