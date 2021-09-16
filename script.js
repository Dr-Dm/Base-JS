/* 
ДЗ 1

var tempC = prompt('Введите температуру в градцсах цельсия');
var tempF = (9 / 5) * tempC + 32;
alert("Темература " + tempC + " градусов по Цельсию равна " + tempF + " градусам по Фаренгейту");



var name = 'Василий';
var admin = name;
alert(admin);

1000 + "108" = 1000108 */



//ДЗ 2


/* var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 (Префиксный инкримент, а увеличивается на 1. a = 2)
d = b++; alert(d);           // 1 (Постфиксный инкримент, сначал вывод, потом прибавление. на вывод = 1, после чего b = 2)
c = (2+ ++a); alert(c);      // 5 (ПреИнк перед а, на начало строки а=2 а в выражении а=3 поулчается 2 + 3 = 5)
d = (2+ b++); alert(d);      // 4 (ПостИнк b пока что 2, d получается 2 + 2 = 4 и b становится = 3)
alert(a);                    // 3 (последнее заначение а = 3)
alert(b);                    // 3 (Аналогично b) */

/* var a = 2;
var x = 1 + (a *= 2);

x = 5. выражение аналогично x = 1 + (a * 2),  при а = 2 */


// 3.
/* var a = parseInt(prompt("Введите любое ( в т.ч. отрицательное) целое число"))
var b = parseInt(prompt("Введите любое ( в т.ч. отрицательное) целое число"))

if (a >= 0 && b >= 0) {
    var c = a - b; 
} else if (a < 0 && b < 0) {
    var c = a * b;
} else {
    var c = a + b;
}

alert(c);
 */

// 4. 
/* var a = parseInt(Math.random() * (15 - 0 + 1) + 0);
switch (a) {
    case 0:
        console.log(a);
        a++;
    case 1:
        console.log(a);
        a++;
    case 2:
        console.log(a);
        a++;
    case 3:
        console.log(a);
        a++;
    case 4:
        console.log(a);
        a++;
    case 5:
        console.log(a);
        a++;
    case 6:
        console.log(a);
        a++;
    case 7:
        console.log(a);
        a++;
    case 8:
        console.log(a);
        a++;
    case 9:
        console.log(a);
        a++;
    case 10:
        console.log(a);
        a++;  
    case 11:
        console.log(a);
        a++; 
    case 12:
        console.log(a);
        a++;
    case 13:
        console.log(a);
        a++;
    case 14:
        console.log(a);
         a++;  
    case 15:
        console.log(a);     
    default:
        break;
}
 */

// 5

function addition(a,b) {
    var s = a + b;
    return s;    
}

function substraction(a,b) {
    var s = a - b;
    return s;  
}

function multiplication(a,b) {
    var s = a * b;
    return s;
}

function division(a,b) {
    var s = a / b;
    return s;
}


// 6

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case addition:
            addition(arg1,arg2);
            break;
        case substraction:
            substraction(arg1,arg2);
            break;
        case  multiplication:
            multiplication(arg1,arg2);
            break;
        case division:
            division(arg1,arg2);
            break;
        default:
            break;
        
    }
}

