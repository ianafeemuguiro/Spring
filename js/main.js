alert ("Hola mundo");

$(document).ready(function(){
    $("btn1").click(function(){
        $("#texto").fadeOut("slow")
    });
    $("btn2").click(function(){
        $("#texto").fadeIn("fast");
    });
});