/**
 * Created by root on 16/8/23.
 */
$("#navlist").hover(
    function () {
        $("#navlist_sub").show();
    },
    function () {
        $("#navlist_sub").hide();
    }
);

//        轮播
var pic = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg"];
var p = ["居家必备,懒人快手餐","玉米界的高富帅是这样滴","您的甜品、饮品已做好","奥利奥的N种百搭吃法","培根早餐,唤醒你的食欲","茶味飘香","liuliu的家常菜","喷香小土豆,小心上瘾哦!","这些肉,怎么吃都不胖","谷物早餐,营养健康之选","咖啡可不止是用来喝","入秋吃山药 护胃抗衰老"];
var Span = ["32篇菜谱","30篇菜谱","48篇菜谱","23篇菜谱","33篇菜谱","86篇菜谱","43篇菜谱","22篇菜谱","27篇菜谱","29篇菜谱","31篇菜谱","30篇菜谱"];
for(var i = 0;i <pic.length;i++){
    $(".cplb").append("<li><a href='' target='_blank' ><i><img class='imgLoad' src='../images/caipu/"+pic[i]+"'></i><div class='os'></div><p class='line2'>"+p[i]+"<br><span>"+Span[i]+"</span></p>" );
}

//        有bug
//      1.  全局变量
var curIndex = 0;  //当前index
var imgLen = $(".cplb li").length;



//        3.左右箭头
//        左箭头

$(".prevBtn").click(function () {
//            根据curIndex进行上一个图片处理
    curIndex = (curIndex > 0) ? (--curIndex) : (imgLen - 1);
    changeTo(curIndex);
});

//        右箭头

$(".nextBtn").click(function () {
//            根据curIndex进行上一个图片处理
    curIndex = (curIndex < imgLen - 1) ? (++curIndex) : 0;
    changeTo(curIndex);
});

//        changeTo就是一个图片切换的处理函数

function changeTo(num) {
    if(num <10){
        var goLeft = num * 345;
        $(".cplb").animate({left:"-" +goLeft+"px"},500);
    }else{
        var goLeft = 9 * 345;
        $(".cplb").animate({left:"-" +goLeft+"px"},500);
    }


}

//  最新推荐

  var tuijian = ["1.jpg","1.jpg","1.jpg","1.jpg","1.jpg","1.jpg","1.jpg","1.jpg",];
  var tjtext = ["菇爆鸡丁"];
    var tju = ['小耳Maggie'];

    for(var i = 0;i <tuijian.length;i++){
        $(".tuijian").append("<li><a href=''target='_blank'><i><img class='imgLoad' src='../images/caipu/tuijian/"+tuijian[i]+"'></i><p>"+tjtext[i]+"</p></a><a href=''target='_blank' class='u'>"+tju[i]+"</a>");
    }

    $(".big4_list").css("height",tuijian.length/4*305 + "px");

    $(".ui_title_wrap h3:eq(0)").click(function () {
        $(".ui_title_wrap h3").removeClass("on");
        $(this).addClass("on");
        $(".big4_list ul").hide();
        $(".big4_list ul:eq(0)").show();


    });

//  最新发布
 var zxfb = ["1.jpg"];

var zxtext = ["菇爆鸡丁"];

var zxu = ["小耳Maggie"];

for(var i = 0;i <zxfb.length;i++){
    $(".zxfb").append("<li><a href=''target='_blank'><i><img class='imgLoad' src='../images/caipu/tuijian/"+zxfb[i]+"'></i><p>"+zxtext[i]+"</p></a><a href=''target='_blank' class='u'>"+zxu[i]+"</a>");
}
    $(".ui_title_wrap h3:eq(1)").click(function () {
        $(".ui_title_wrap h3").removeClass("on");
        $(this).addClass("on");
        $(".big4_list ul").hide();
        $(".big4_list ul:eq(1)").show();


    });


//    热菜

var recai = ['1.jpg'];

var rctext = ['菇爆鸡丁'];

var rcu = ['小耳Maggie'];

for(var i = 0;i <recai.length;i++){
    $(".recai").append("<li><a href=''target='_blank'><i><img class='imgLoad' src='../images/caipu/tuijian/"+recai[i]+"'></i><p>"+rctext[i]+"</p></a><a href=''target='_blank' class='u'>"+rcu[i]+"</a>");
}
    $(".ui_title_wrap h3:eq(2)").click(function () {
        $(".ui_title_wrap h3").removeClass("on");
        $(this).addClass("on");
        $(".big4_list ul").hide();
        $(".big4_list ul:eq(2)").show();


    });
//  凉菜

   var liangcai = ['1.jpg'];

  var lctext = ['菇爆鸡丁'];

  var lcu = ['小耳Maggie'];


for(var i = 0;i <liangcai.length;i++){
    $(".liangcai").append("<li><a href=''target='_blank'><i><img class='imgLoad' src='../images/caipu/tuijian/"+liangcai[i]+"'></i><p>"+lctext[i]+"</p></a><a href=''target='_blank' class='u'>"+lcu[i]+"</a>");
}
    $(".ui_title_wrap h3:eq(3)").click(function () {
        $(".ui_title_wrap h3").removeClass("on");
        $(this).addClass("on");
        $(".big4_list ul").hide();
        $(".big4_list ul:eq(3)").show();


    });
//   汤羹

    var tanggeng = ['1.jpg'];

    var tgtext = ['菇爆鸡丁'];

    var tgu = ['小耳Maggie'];

    for(var i = 0;i <tanggeng.length;i++){
        $(".tanggeng").append("<li><a href=''target='_blank'><i><img class='imgLoad' src='../images/caipu/tuijian/"+tanggeng[i]+"'></i><p>"+tgtext[i]+"</p></a><a href=''target='_blank' class='u'>"+tgu[i]+"</a>");
    }
    $(".ui_title_wrap h3:eq(4)").click(function () {
        $(".ui_title_wrap h3").removeClass("on");
        $(this).addClass("on");
        $(".big4_list ul").hide();
        $(".big4_list ul:eq(4)").show();


    });
//  主食

    var zhushi = ['1.jpg'];

    var zstext = ['菇爆鸡丁'];

    var zsu = ['小耳Maggie'];

    for(var i = 0;i <zhushi.length;i++){
        $(".zhushi").append("<li><a href=''target='_blank'><i><img class='imgLoad' src='../images/caipu/tuijian/"+zhushi[i]+"'></i><p>"+zstext[i]+"</p></a><a href=''target='_blank' class='u'>"+zsu[i]+"</a>");
    }
    $(".ui_title_wrap h3:eq(5)").click(function () {
        $(".ui_title_wrap h3").removeClass("on");
        $(this).addClass("on");
        $(".big4_list ul").hide();
        $(".big4_list ul:eq(5)").show();


    });

//   小吃

    var xiaochi = ['1.jpg'];

    var xctext = ['菇爆鸡丁'];

    var xcu = ['小耳Maggie'];

    for(var i = 0;i <xiaochi.length;i++){
        $(".xiaochi").append("<li><a href=''target='_blank'><i><img class='imgLoad' src='../images/caipu/tuijian/"+xiaochi[i]+"'></i><p>"+xctext[i]+"</p></a><a href=''target='_blank' class='u'>"+xcu[i]+"</a>");
    }
    $(".ui_title_wrap h3:eq(6)").click(function () {
        $(".ui_title_wrap h3").removeClass("on");
        $(this).addClass("on");
        $(".big4_list ul").hide();
        $(".big4_list ul:eq(6)").show();


    });
//   西餐

    var xican = ['1.jpg'];

    var xitext = ['菇爆鸡丁'];

    var xiu = ['小耳Maggie'];

    for(var i = 0;i <xican.length;i++){
        $(".xican").append("<li><a href=''target='_blank'><i><img class='imgLoad' src='../images/caipu/tuijian/"+xican[i]+"'></i><p>"+xitext[i]+"</p></a><a href=''target='_blank' class='u'>"+xiu[i]+"</a>");
    }
    $(".ui_title_wrap h3:eq(7)").click(function () {
        $(".ui_title_wrap h3").removeClass("on");
        $(this).addClass("on");
        $(".big4_list ul").hide();
        $(".big4_list ul:eq(7)").show();


    });
//  烘焙

    var hongbei = ['1.jpg'];

    var hbtext = ['菇爆鸡丁'];

    var hbu = ['小耳Maggie'];

    for(var i = 0;i <hongbei.length;i++){
        $(".hongbei").append("<li><a href=''target='_blank'><i><img class='imgLoad' src='../images/caipu/tuijian/"+hongbei[i]+"'></i><p>"+hbtext[i]+"</p></a><a href=''target='_blank' class='u'>"+hbu[i]+"</a>");
    }
    $(".ui_title_wrap h3:eq(8)").click(function () {
        $(".ui_title_wrap h3").removeClass("on");
        $(this).addClass("on");
        $(".big4_list ul").hide();
        $(".big4_list ul:eq(8)").show();


    });

//  自制食材

    var zizhi = ['1.jpg'];

    var zztext = ['菇爆鸡丁'];

    var zzu = ['小耳Maggie'];

    for(var i = 0;i <zizhi.length;i++){
        $(".zizhi").append("<li><a href=''target='_blank'><i><img class='imgLoad' src='../images/caipu/tuijian/"+zizhi[i]+"'></i><p>"+zztext[i]+"</p></a><a href=''target='_blank' class='u'>"+zzu[i]+"</a>");
    }
    $(".ui_title_wrap h3:eq(9)").click(function () {
        $(".ui_title_wrap h3").removeClass("on");
        $(this).addClass("on");
        $(".big4_list ul").hide();
        $(".big4_list ul:eq(9)").show();


    });






