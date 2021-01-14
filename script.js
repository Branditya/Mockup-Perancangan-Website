let masuk=document.querySelector('.masuk');
let button = document.querySelector('.navbutton');
button.addEventListener('click',function(e){
    masuk.classList.add('show');
    })
    masuk.addEventListener('click', function() {
        this.classList.remove('show');
    });
    masuk.querySelector('.masuk-content').addEventListener('click', function(e) {
        e.stopPropagation();
    });