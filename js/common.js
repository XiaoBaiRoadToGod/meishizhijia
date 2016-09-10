/**
 * Created by root on 16/8/20.
 */

$(function(){
    $("#nav_menu").hover(function(){
        $("#nav_menu_no").show();
    },function () {
        $("#nav_menu_no").hide();
    });

    $("#navbar_right_img").hover(function(){
        $("#navbar_right_no").show();
    },function () {
        $("#navbar_right_no").hide();
    });

    $("#navbar_fabu").hover(function(){
        $("#navbar_fabu_no").show();
    },function () {
        $("#navbar_fabu_no").hide();
    });
//  点击签到有礼
     $("#J_down").click(function(){
        $(".msc_dialog").show();
        $(".ui_dialog_mask").show();
        Jdown();

    })
     $(window).resize(function(){
        Jdown();
     })

     // 取消
     $(".ui_dialog_close").click(function(){
        $(".msc_dialog").hide();
        $(".ui_dialog_mask").hide();
     })

});

function Jdown(){
    $(".msc_dialog").css({
        "margin-left":window.innerWidth/2+"px",
        "left":"-"+$(".msc_dialog").width()/2+"px"
    })
}
