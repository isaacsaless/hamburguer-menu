
$(document).ready(function(){
    // Adiciona classe .loaded quando documento estiver pronto
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').addClass('loaded');

    // Quando clicar, alterna classe .open E envia evento ao App Inventor
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
        $(this).toggleClass('open');

        // Envia mensagem pro App Inventor
        if (window.AppInventor) {
            window.AppInventor.setWebViewString("menu_clicado");
        }
    });

    // Previne scroll horizontal (swipe)
    $(document).on('touchmove', function(e) {
        if (e.touches.length === 1) {
            let touch = e.touches[0];
            if (Math.abs(touch.clientX - touch.screenX) > Math.abs(touch.clientY - touch.screenY)) {
                e.preventDefault();
            }
        }
    });
});
