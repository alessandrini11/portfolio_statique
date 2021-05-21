$(document).ready(function(){
    //sticky nav on scroll
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("stick")
        }else{
            $('.navbar').removeClass("stick")
        }
    });
    //toogle menu bar
    $('.menu-btn').click(function(){
        $('.main-nav').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });

    //type in animation
    var typed = new Typed(".typing",{
        strings: ["Web Developer","Freelancer","App Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2",{
        strings: ["Web Developer","Freelancer","App Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('.up-btn').fadeIn()
        }else{
            $('.up-btn').fadeOut()
        }
    })
    //scroll to top
    $('.up-btn').click(function(){
        $('html, body').animate({scrollTop : 0},800)
    })
    //smooth scroll
    $('menu-items').click(function (){
        set
    })
})