//1

var x = 0;
var n = 2; 

/* function factorial(x) {
    if (x==0) {
        return 0;
    } else if (x==1) {
        return 1;
    } else {
        return x * factorial(x-1);
    }
    
}


while (++x <= 100) {
    if (x == 0 || x == 1) {
        continue;
    } else if((factorial(x-1) + 1) % x == 0) {
       console.log(x);
    } else {
        continue;
    }
}
*/
//Самый простой способ, но работает до 19 =(
 


/* while (x <= 100) {
    if(x == 2) {
        console.log(x);
    } else {
        while (n <= Math.ceil(Math.sqrt(x)) ) {
            if ((x % n) == 0) {
                break;
            } else {
                n++;
                if(n > Math.ceil(Math.sqrt(x))) {
                  console.log(x);}
            }               
        }
    }
    
    x++;
    n = 2;
} */

 //Через while, но некрасиво. 

// Вариант через do..while без вложенных проверок.

/* while (x <= 100) {
    if (x == 0 || x == 1) {
        x++;
        continue;
    } else {
        
        do {
            if ((x % n) == 0) {
                break;
            } else {
                n++;
            }  
        } while (n <= Math.ceil(Math.sqrt(x)));
        if (n > Math.ceil(Math.sqrt(x))) {
            console.log(x)
        }
    }

    n = 2;
    x++;
}
 */

//2-3

/* var goods = [
    {
        title: 'Товар 1',
        price: 100,
        count: 5
    },
    {
        title: 'Товар 2',
        price: 200,
        count: 2
    }
];

function countBasketPrice(goods) {
    var s = 0;
    for(var x of goods){
        s += x.price * x.count;
    }
    return s; 
}
console.log(countBasketPrice(goods)); */




//4
/* 
for (var i = 0; i < 10; console.log(i++)) {
    
} */

//5

/* for (var i = 1; i <=20; i++) {
      console.log(Array(i).fill('x').join(' '));
}  */