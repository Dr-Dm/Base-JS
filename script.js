function chb() {
    var abc = ['', 'A','B','C','D','E','F','G','H',''];
    var num = ['','8','7','6','5','4','3','2','1',''];
    var bf = ['1','&#9820','&#9822','&#9821','&#9819','&#9818','&#9821','&#9822','&#9820','1'];
    var bp = ['2','&#9823','&#9823','&#9823','&#9823','&#9823','&#9823','&#9823','&#9823','2'];
    var wf = ['8','&#9814','&#9816','&#9815','&#9813','&#9812','&#9815','&#9816','&#9814','8'];
    var wp = ['7','&#9817','&#9817','&#9817','&#9817','&#9817','&#9817','&#9817','&#9817','7'];

    var table = document.createElement("table");
    for (var i = 0; i < 10; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 10; j++ ) {
            var td = document.createElement('td');
            if (i ==9 || j == 0) {
                td.innerHTML = num[i] || abc[j];
            }
            else if (i == 0 || j== 9) {
                td.innerHTML = num[i] || abc[j];
                td.style.transform = 'rotate(180deg)';
            }
            else if (i%2 == j%2) {
                td.style.background='whitesmoke';
            } else {
                td.style.background='burlywood';
            }
            if (i == 1) {
                td.innerHTML = bf[j];
            } else if (i == 2) {
                td.innerHTML = bp[j];
            } else if (i == 7) {
                td.innerHTML = wp[j];
            } else if (i == 8) {
                td.innerHTML = wf[j];
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}
chb(); // шел другим путем, но передумал и частично взял идеи из готовых решений, рассмотренных на уроке.