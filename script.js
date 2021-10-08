var images = document.querySelectorAll('.small img');
var block =  document.querySelector('.big');
for(var item of images){
    item.onclick = function() {
        block.innerHTML = '';
        var bigImg = document.createElement('img');
        bigImg.src = this.src.replace('small', 'big');
        bigImg.onerror = function (){
            alert('Not Found'); 
        }
        document.querySelector('.big').append(bigImg);
    }
}


var item1 = {
    name: 'name1',
    price: 10
}

var item2 = {
    name: 'name2',
    price: 12
}

var item3 = {
    name: 'name3',
    price: 14
}

var items = [item1, item2, item3];

var sum = 0;

function init() {
    var catalog = document.querySelector('.catalog');
    
    for (var i = 0; i < items.length; i++) {
        document.createElement('div');
        // item.setAttribute('class', 'div_item');
        // item.appendChild(document.createTextNode(items[i].name));
        item.innerHTML(items[i].name);
        item.style.border = '1px solid black';
        item.appendChild(document.innerHTML(items[i].price));
        itemBut = createElement('button');
        itemBut.id = 'btn_' + i;
        itemBut.onclick = add;
        item.appendChild(item);
    }
}
