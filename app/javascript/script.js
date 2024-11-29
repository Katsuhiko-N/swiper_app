let title = "javascriptが使えました"
alert(title)



$(document).ready(function(){
    $('.jquery').on('click', function(){
        $(this).css('color','red');
    });
})

// Swiperのオプションを定義　（const = opt）
const opt = {
    loop: true,
    pagination:{
        el: '.swiper-paginaion',
    },
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
}

// Swiperの実行部分
$(document).on('turbolinks:load', function(){
    let swiper = new Swiper(".swiper",opt);
});