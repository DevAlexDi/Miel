$(document).ready(function(){

    $('.tel-inp').inputmask({
        "mask": "+7 (999) 999-99-99"
        , "placeholder": "_"
        , showMaskOnHover: false
        , showMaskOnFocus: true
    });

    $('.app__backdrop-modal, .right-modal__close').click(function(){
        $('.right-modal').removeClass('right-modal--show');
        $('.filter').removeClass('filter--show');
        $('.app').removeClass('app--opened-modal');
    });

    $('.menu-butt').click(function(){
        $('.right-modal--menu').addClass('right-modal--show');
        $('.app').addClass('app--opened-modal');
    });

    $('.open-contacts').click(function(){
        $('.right-modal--contacts').addClass('right-modal--show');
        $('.app').addClass('app--opened-modal');
        if($('.right-modal--menu').hasClass('right-modal--show')){
            $('.right-modal--menu').removeClass('right-modal--show')
        }
    });

    $('.open-order').click(function(){
        $('.right-modal--order').addClass('right-modal--show');
        $('.app').addClass('app--opened-modal');
        
    });
    
    $('.map-side__filter-open').click(function(){
        $('.filter').addClass('filter--show');
        $('.app').addClass('app--opened-modal'); 
    });

    $('.filter__sm-close').click(function(){
        $('.filter').removeClass('filter--show');
        $('.app').removeClass('app--opened-modal'); 
    });

    $('.faq').click(function(){
        if(!$(this).hasClass('faq--opened')){
            $(this).addClass('faq--opened');
            $(this).find('.faq__hidden-text').slideDown(300);
        }
        else {
            $(this).removeClass('faq--opened');
            $(this).find('.faq__hidden-text').slideUp(300);
        }
       
    });

});

$(window).load(function() {
    $('.app').addClass('app--loaded');
});

