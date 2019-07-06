(function($){
$.fn.reng=function(color){
    this.css("background", color)
}
$.fn.FlaotAnime=function(){
    this.click(function(){
        $(this).css("position", "relative").animate({
            left:"+=250px"
        },500, function(){
            $(this).animate({
                left:'0px'
            },500)
        })
    })
}
}
(jQuery))