/**
 * Created by root on 16/8/23.
 */
window.onload = function () {
    adjust();
    $(window).resize(function () {
        adjust();

    })

   

};
function adjust() {
    $("#myCarousel img").css({"width":window.innerWidth+"px","height":window.innerHeight+"px"});
    $(".logonbox").css({
        "margin-top":window.innerHeight/2+"px",
        "margin-left":window.innerWidth/2+"px",
        "top":"-"+$(".logonbox").height()/2+"px",
        "left":"-"+$(".logonbox").width()/2+"px"
    })
};

$(function () {
    $("#myCarousel").carousel();
})
