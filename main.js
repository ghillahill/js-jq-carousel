$(document).ready(function () {

    $('.cicle-next').click(function(){
        $('.slider').find('div.active').next().addClass('active');
        $('.slider').find('div.active').prev().removeClass('active');
    });
    $('.cicle-prev').click(function(){
        $('.slider').find('div.active').prev().addClass('active');
        $('.slider').find('div.active').next().removeClass('active');
    });

});
