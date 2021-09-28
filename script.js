// var table = document.createElement("table");
// for (let i = 0; i < 10; i++) {
//     var tr = document.createElement("tr");
//     table.append(tr);
//     for (let j = 1; j <= 10; j++) {
//         var td = document.createElement("td");
//         td.innerHTML = "<h2>" + (i * j) + "</h2>";
//         tr.append(td);
//     }
// }
// document.querySelector('div').append(table);

function draw(){
    var table = document.createElement('table');
 //   var flag = true;
    
    var tr = document.createElement('tr');
    var arr = [' ','a','b','c','d','e','f','g','h'];
    

    //генерим ячейки
    for(var i = 0; i < 9; i++){
        var tr = document.createElement('tr'); 

        for(var k = 0; k < 9; k++){
        
            var td = document.createElement('td');
            td.style.width='50px';
            td.style.height='50px';
            td.style.background='white';
            td.innerHTML=arr[k];
            
            tr.appendChild(td);
            
        }
        table.appendChild(tr);

        
        
        //создаем ячейку для цифр
        var tdd = document.createElement('td');
        tdd.style.width='50px';
        tdd.style.height='50px';
        tdd.innerHTML=9-(i+1);
        tr.appendChild(tdd);
        
        for(var j=0; j < 8; j++){
            
            if(j==0)
                flag=!flag;
            
            var td = document.createElement('td');
            
            td.style.width='50px';
            td.style.height='50px';
            if(flag){
                td.style.background='black';    
            }else
                td.style.background='white';    
                
            tr.appendChild(td);
            flag=!flag;
        }
        table.appendChild(tr);
    }
    
    //генерим буквы
    for(var k = 0; k < 9; k++){
        
        var td = document.createElement('td');
        td.style.width='50px';
        td.style.height='50px';
        td.style.background='white';
        td.innerHTML=arr[k];
        
        trr.appendChild(td);
        
    }
    table.appendChild(trr);
    
    document.body.appendChild(table);
}
 
draw();











function draw(){
    var table = document.createElement('table');
    var flag = true;
    
    var trr = document.createElement('tr');
    var arr = [' ','a','b','c','d','e','f','g','h'];
    
  
    //генерим ячейки
    for(var i = 0; i < 8; i++){
        var tr = document.createElement('tr'); 
        
        

        //создаем ячейку для цифр
        var tdd = document.createElement('td');
        tdd.style.width='50px';
        tdd.style.height='50px';
        tdd.innerHTML=8-i;
        tr.appendChild(tdd);
        
        for(var j=0; j < 8; j++){
            
            if(j==0)
                flag=!flag;
            
            var td = document.createElement('td');
            
            td.style.width='50px';
            td.style.height='50px';
            if(flag){
                td.style.background='black';    
            }else
                td.style.background='white';    
                
            tr.appendChild(td);
            flag=!flag;
        }
        table.appendChild(tr);

        var tdd = document.createElement('td');
        tdd.style.width='50px';
        tdd.style.height='50px';
        tdd.style.transform='rotate(180deg)';
        tdd.innerHTML=8-i;
        tr.appendChild(tdd);
    }
    
    //генерим буквы
    for(var k = 0; k < 9; k++){
        
        var td = document.createElement('td');
        td.style.width='50px';
        td.style.height='50px';
        td.style.background='white';
        td.innerHTML=arr[k];
        
        trr.appendChild(td);
        
    }
    table.appendChild(trr);
    
    document.body.appendChild(table);
}
 
draw();





var table = document.createElement("table");
for (var i = 1; i < 9; i++) {
    var tr = document.createElement('tr');
    for (var j = 1; j < 9; j++) {
        var td = document.createElement('td');
        td.style.width='50px';
        td.style.height='50px';
        if (i%2 == j%2) {
            td.style.background='white';
        } else {
            td.style.background='black';
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);