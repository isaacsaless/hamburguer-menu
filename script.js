$(document).ready(function(){
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').addClass('loaded');

    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
        $(this).toggleClass('open');
    });

    $(document).on('touchmove', function(e) {
        if (e.touches.length === 1) {
            let touch = e.touches[0];
            if (Math.abs(touch.clientX - touch.screenX) > Math.abs(touch.clientY - touch.screenY)) {
                e.preventDefault();
            }
        }
    });
});
