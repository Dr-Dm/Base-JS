/* var randNum = prompt('Введите любое число от 0 до 999 включительно');

function numToObj(randNum) {
    var arrNum = randNum.split('');
    while (arrNum.length < 3) {
        arrNum.unshift(0);
    }

    var obj = {};
    
    if (arrNum.length > 3) {
        console.log('Число введено некорректно, повторите ввод');
        return obj;
    }  else {
        obj['единицы'] = +arrNum[2];
        obj['десятки'] = +arrNum[1];
        obj['сотни'] = +arrNum[0];
        return obj;
    }
   
}

console.log(numToObj(randNum));
 */


