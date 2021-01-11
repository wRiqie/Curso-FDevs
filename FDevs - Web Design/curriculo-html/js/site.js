//Header
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

function toggle() {
    var header = document.getElementById('header');
    header.classList.toggle('active')
}


//Top
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('a[href="#top"]').fadeIn();
        } else {
            $('a[href="#top"]').fadeOut();
        }
    });

    $('a[href="#top"]').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});


//Ler Mais
function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    var botao = document.getElementById("meuBotao");

    if(display == "none") {
        document.getElementById(el).style.display = 'block';
        botao.innerHTML = "Esconder";
    }
    else {
        document.getElementById(el).style.display = 'none';
        botao.innerHTML = "Mostrar";
    }
}

        