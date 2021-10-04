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
