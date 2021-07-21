$(document).ready(function(){
    $(".content__title").click(function(){
        $(this).next().toggle();
    });
});