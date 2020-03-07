$('.owl-one').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('.owl-two').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.owl-3').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
$('.owl-4').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    nav:false,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

var ABOUToffset = $("#about").offset().top;
var SERVICESoffset = $("#SERVICES").offset().top;
var PORTFOLIOoffset = $("#PORTFOLIO").offset().top;
var PRICEoffset = $("#PRICE").offset().top;
var CLINTSoffset = $("#CLINTS").offset().top;
var BLOGoffset = $("#BLOG").offset().top;
//var CONTACToffset = $("#CONTACT").offset().top;

$(window).scroll(function () { 
    var Winscroll = $(window).scrollTop();
    if (Winscroll > ABOUToffset-300 ) 
    {  
        $(".navbar").addClass("navbarmove");
    }
    else
    {
        $(".navbar").removeClass("navbarmove");
    }
   { if (Winscroll > ABOUToffset-30 && Winscroll < 1600 ) 
    {
        $("#ABOUTBtn").css("color", "red");
    }
     else 
    {
        $("#ABOUTBtn").css("color", "white");

    }
    if (Winscroll > SERVICESoffset-30 && Winscroll < 2500 ) 
    {
        $("#SERVICESBtn").css("color", "red");
    }
     else 
    {
        $("#SERVICESBtn").css("color", "white");
    }
    if (Winscroll > PORTFOLIOoffset-100 && Winscroll < 3700 ) 
    {
        $("#PORTFOLIOBtn").css("color", "red");
    }
     else 
    {
        $("#PORTFOLIOBtn").css("color", "white");
    }
    if (Winscroll > PRICEoffset-100 && Winscroll < 4350 ) 
    {
        $("#PRICEBtn").css("color", "red");
    }
     else 
    {
        $("#PRICEBtn").css("color", "white");
    }
    if (Winscroll > CLINTSoffset-200 && Winscroll < 5550 ) 
    {
        $("#CLINTSBtn").css("color", "red");
    }
     else 
    {
        $("#CLINTSBtn").css("color", "white");
    }
    if (Winscroll > BLOGoffset-100 && Winscroll < 6400 ) 
    {
        $("#BLOGBtn").css("color", "red");
    }
     else 
    {
        $("#BLOGBtn").css("color", "white");
    }}
    if (Winscroll > ABOUToffset-400) 
    {
        $("#btnup").fadeIn(500);
    }
    else
    {
        $("#btnup").fadeOut(500);

    }
    if (Winscroll == 0) 
    {
        $("#HOMEBtn").css("color", "red");
    }
    else 
    {
        $("#HOMEBtn").css("color", "white");

    }
});

$("#btnup").click(function () { 
    $("html,body").animate({scrollTop:'0'},1500)
});

$("a[href^='#']").click(function (e) { 
    let aHref = $(this).attr("href");
    $("html,body").animate({scrollTop:$(aHref).offset().top},1500)
    
});

$(document).ready(function () {
   $(".loadingsc").fadeOut(2000,function(){
    $("body").css("overflow", "auto");

   })
});