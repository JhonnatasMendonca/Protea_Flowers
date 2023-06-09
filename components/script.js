var tamanho = 10;

function aumentarFonte(){
    tamanho++;
    document.body.style.fontSize=tamanho+"px";
}

function diminuirFonte(){
    tamanho--;
    document.body.style.fontSize=tamanho+"px";
}


function test2(){
    var linktest = document.getElementById('link2');
    linktest.onclick = function () {
        window.location = "../perfil_comprador/perfil_comprador.html";
    };
}

function test(){
    var linktest = document.getElementById('link');
    linktest.onclick = function () {
        window.location = "../perfil_vendedor/perfil_vendedor.html";
    };
}


document.addEventListener('DOMContentLoaded', function() {




    //Ativa o modal

    $(".entrar").click(function(){
            
        $(".cliente-modal").fadeIn();
        $(".cliente").fadeIn();
        
        $('body').css("overflow", "hidden");
        
    });

    $(".Central-vendedor").click(function(){
        
        $(".vendedor-modal").fadeIn();
        $(".vendedor").fadeIn();
       
        $('body').css("overflow", "hidden");
       
    });

     $("#finalizarCompra").click(function(){
            
        $(".aprovado").fadeIn();
        // $('body').css("overflow", "hidden");
    });

    //Fecha o modal

    $(".img-fechar").click(function(){
        $(".fundo-modal").fadeOut();
        $(".modal").fadeOut();
        $('body').css("overflow", "visible");   
       
    });

    //Abrir menu mobile

    $(".menu-img").click(function(){
        $(".box-menu-mobile").toggle();
    });


    //Ativar modo noturno

    $("#icon_lua").click(function(){

        $('#icon_lua').css("display", "none");
        $('body, footer, header, .principal-box, .comentarios, .main').css("background-color", "black"); 
        $('a, li, span, h1, h2, h3, h4, p, label').css("color", "white");
        $('#icon_sol').css("display", "block");

        $('.box-demonstracao, .add_produto, .box-img, .box-container, .flor-parecida, .info, .box-centro-dados').css("background-color", "#0F270F");

        // $('.add_produto').css("background-color", "black");
        $('.botao-claro').css("background-color", "#859479");
        $('.card-form-vendedor').css("background-color", "#3D0E0A");

        $('.img-lixo, #icon-face, #icon-insta, #icon-whatsapp, #icon-pinterest, #icon-tw, #icon-youtube').css("display", "none");
        $('.img-lixo-branca, #icon-face-branca, #icon-insta-branca, #icon-whatsapp-branca, #icon-pinterest-branca, #icon-tw-branca, #icon-youtube-branca').css("display", "block");
        


       
    });


    //Desativa modo noturno

    $("#icon_sol").click(function(){

        $('#icon_sol').css("display", "none");
        $('body').css("background-color", "#efefee"); 
        $('header').css("background-color", "#859479"); 
        $('footer').css("background-color", "#0F270F"); 
        $('.text-capslock ').css("color", "#0F270F");
        $('.informacoes-left li, .informacoes-right li').css("color", "#0F270F");
        $('#icon_lua').css("display", "block");    


        $('.breadcrumbs span').css("color", "#859479");
        $('a, li, span, h1, h2, h3, h4, p, label').css("color", "#0F270F");
        $('.header-bottom .buttons a').css("color", "#efefee");
        $('.box-demonstracao, .box-img, .box-container').css("background-color", "#D9D9D9");
        $('box-opcoes li').css("color", "#0F270F"); 
        $('.texto-branco').css("color", "white"); 
        $('.breadcrumbs-final').css("color", "#859479"); 
        $('.page-atual').css("color", "#0F270F");
        $('.add_produto, .card-form-vendedor, .box-centro-dados').css("background-color", "#FFFAF7");
        $('.botao-claro').css("background-color", "#0F270F");
        $('.principal-box, .comentarios').css("background-color", "#ffffff");
        $('.flor-parecida').css("background-color", "#DBD8CF");
        $('.info').css("background-color", "#DBE8D1");

        $('.img-lixo, #icon-face, #icon-insta, #icon-whatsapp, #icon-pinterest, #icon-tw, #icon-youtube').css("display", "block");
        $('.img-lixo-branca, #icon-face-branca, #icon-insta-branca, #icon-whatsapp-branca, #icon-pinterest-branca, #icon-tw-branca, #icon-youtube-branca').css("display", "none");


       
    });


    

});