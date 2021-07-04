let result = ""; // 下記の条件の結果をまとめる箱

for(i = 1; i < 101; i++ ) {
    if (i % 2 == 1) {
        // 奇数の場合は表示しない（何もしない）
    } else if( i % 3 == 0 && i % 5 == 0 ) {
        // 3と5の公倍数の時は「アホ」と「犬」を入れて表示させる
        result += '<li class="multi">' + i + '回目のループ...もしかしたらアホの犬...なのかもしれない' + '</li>';
    } else if( i % 3 == 0 ) {
        // 3の倍数の時はアホになる
        result += '<li>' + i + '回目のループだよーん' + '</li>';
    } else if( i % 5 == 0 ) {
        // 5の倍数の時は犬になる
        result += '<li>' + i + '回目のループだワン' + '</li>';
    } else {
        // どの条件にも当てはまらない場合
        result += '<li>' + i + '回目のループ' + '</li>'
    }

    // HTML上で出力する為のエリアのID取得
    let count = document.getElementById('roop-area');
    // 結果をHTMLに出力
    count.innerHTML = '<ul class="result">' + result + '</ul>';
}