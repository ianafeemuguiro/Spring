
$(document).ready(function(){
    $(".text1").click(function(){
        $(this).fadeOut("slow")
    });

     $(".paragraph1").click(function(){
        $(this).fadeOut("slow")
    });

     $(".box-black").click(function(){
        $(this).fadeOut("slow")
    });

    $(".img-flowers").click(function(){
        $(this).hide("fast");
    });

     $(".img-article").click(function(){
        $(this).slideUp();
    });

    $(".textt").click(function(){
        $(this).slideUp();
    });

    $(".text2").click(function(){
        $(this).slideUp();
    });

    $(".text3").click(function(){
        $(this).slideUp();
    });

    $("button").click(function(){
        $("p").slideToggle();
    });
});



