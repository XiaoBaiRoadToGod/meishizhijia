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

  var tuijian = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg",'9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg'];
  var tjtext = ["菇爆鸡丁",'小熊趣味广式月饼','蒜泥秋葵','酸菜白肉','冰皮月饼','巧克力北海道戚风','熔岩软曲奇','奶油鸡肉咖喱','金沙奶黄月饼','豆沙馅月饼','原味鸡蛋仔','起司牛肉汤','炸猪排','焗蔓越莓吐司布丁','孜然香烤金仓鱼','家常版辣子鸡','内有乾坤','香酥酱鸭','杏鲍菇黑椒牛肉粒','巧克力熔岩蛋糕'];
    var tju = ['小耳Maggie','开心果子365','～梅杰','捷赛私房菜','翟女……','吾爱烘焙','丫丫嘛嘛','翟女……','白~雾','蔬菜沙拉','悄悄2050','点滋味小吃','舒舒的厨房','肉肉厨','烘焙123','允儿小妞的厨房','Mon姐','啊呜咖啡','Anna美食','恬萝姑娘'];

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
 var zxfb = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg",'9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg'];

var zxtext = ["红烧土豆丸",'番茄鸡蛋汤','人见人爱的芒果慕斯','清炒萝卜苗','番茄鸡蛋汤','番茄冷汤','穷炒饭','蒜蓉粉丝蒸车螺','青春菠萝饭','小熊趣味广式月饼','西式蛤蜊炖丝瓜','蒜泥秋葵','盘锦河蟹的制作方法','酸菜白肉','冰皮月饼','巧克力北海道戚风','枣泥蛋糕','熔岩软曲奇','奶油鸡肉咖喱','金沙奶黄月饼'];

var zxu = ['广发华福吃','辣妈的厨房lin','菜菜烘焙屋','Māριé','辣妈的厨房lin','心煮艺的厨房','无所谓就这样吧','甲子','心煮艺的厨房','开心果子365','心煮艺的厨房','～梅杰','盘锦蟹老大','捷赛私房菜','翟女……','吾爱烘焙','忽冷忽热。❤','丫丫嘛嘛','翟女……','白~雾'];

for(var i = 0;i <zxfb.length;i++){
    $(".zxfb").append("<li><a href=''target='_blank'><i><img class='imgLoad' src='../images/caipu/zxfb/"+zxfb[i]+"'></i><p>"+zxtext[i]+"</p></a><a href=''target='_blank' class='u'>"+zxu[i]+"</a>");
}
    $(".ui_title_wrap h3:eq(1)").click(function () {
        $(".ui_title_wrap h3").removeClass("on");
        $(this).addClass("on");
        $(".big4_list ul").hide();
        $(".big4_list ul:eq(1)").show();


    });


//    热菜

var recai = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg",'9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg'];

var rctext = ['酸菜白肉','奶油鸡肉咖喱','孜然香烤金仓鱼','家常版辣子鸡','杏鲍菇黑椒牛肉粒','叉烧鸭腿','西红柿鸡蛋','炸小酥肉','吉野家牛肉饭','红椒冬瓜块','黄瓜杏鲍菇炒肉','家庭版黄焖鸡','无水葱油鸡','花朵豆腐酿','脆皮烤五花肉','丝瓜炒肉片','番茄牛肉汤','黑椒牛肉炒洋葱','快手木耳','盖浇肉末蒸嫩豆腐'];

var rcu = ['捷赛私房菜','翟女……','烘焙123','允儿小妞的厨房','Anna美食','泽瑞妈妈','Māριé','～梅杰','小堂堂妈妈','清水淡竹','掀帘晨曦datura','演堃@杨爸爸','演堃@杨爸爸','紫嫣秀儿','演堃@杨爸爸','coldly','吃好吃的喽520','coldly','娃娃学做菜菜','宣大爷是胖妞'];

for(var i = 0;i <recai.length;i++){
    $(".recai").append("<li><a href=''target='_blank'><i><img class='imgLoad' src='../images/caipu/rc/"+recai[i]+"'></i><p>"+rctext[i]+"</p></a><a href=''target='_blank' class='u'>"+rcu[i]+"</a>");
}
    $(".ui_title_wrap h3:eq(2)").click(function () {
        $(".ui_title_wrap h3").removeClass("on");
        $(this).addClass("on");
        $(".big4_list ul").hide();
        $(".big4_list ul:eq(2)").show();


    });
//  凉菜

   var liangcai = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg",'9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg'];

  var lctext = ['蒜泥秋葵','蒜蓉西兰花','凉拌皮蛋','豆浆机版猪皮冻','紫薯山药糕','拌茄子','Q弹爽口的肉皮冻','酱牛肉','葱香盐水鸭','麻辣土豆丝','凉拌青黄瓜','川菜经典蒜泥白肉','三文鱼之恋','美味肉皮冻','酱牛肉','凉拌苦瓜 ','骨汤石螺','凉拌西兰花','芹菜拌花生米','椒盐羊头肉'];

  var lcu = ['～梅杰','～梅杰','～梅杰','拉拉妞儿','沙儿飞飞❉','我是一只幸福猪','lqmy2k','猫猫家的私厨','悦悦玉食','四叶小馆','Criminal','sunshinewinnie','祯祯宝贝','满宝妈妈','我幸福相约','rosejyy2000','Elin','政妈妈','眉儿','Meggy跳舞的苹果'];


for(var i = 0;i <liangcai.length;i++){
    $(".liangcai").append("<li><a href=''target='_blank'><i><img class='imgLoad' src='../images/caipu/lc/"+liangcai[i]+"'></i><p>"+lctext[i]+"</p></a><a href=''target='_blank' class='u'>"+lcu[i]+"</a>");
}
    $(".ui_title_wrap h3:eq(3)").click(function () {
        $(".ui_title_wrap h3").removeClass("on");
        $(this).addClass("on");
        $(".big4_list ul").hide();
        $(".big4_list ul:eq(3)").show();


    });
//   汤羹

    var tanggeng = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg",'9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg'];

    var tgtext = ['起司牛肉汤','番茄牛肉汤','夜交滕乌鸡汤','薏米冬瓜炖老鸭','花生鸡爪汤','沙参玉竹老鸭汤','虫草花干贝玉米汤','玉米排骨汤','黄瓜干制作及煲汤介绍','经典木瓜炖雪蛤','白萝卜蹄髈汤','火腿冬瓜羹','猴头菇虫草花竹笙汤','猴头菇煲鸡','紫菜鸡蛋汤','韩式参鸡汤','番茄蛋花银耳汤','银耳桃胶皂角米羹','玉米山药排骨汤','松茸煲鸡汤'];

    var tgu = ['点滋味小吃','吃好吃的喽520','黄宝玲','清水淡竹','茶浅浅来做好吃的','coldly','隽膳汤品','苏三菲菲','rosejyy2000','吃货花老师','掀帘晨曦datura','悦悦玉食','隽膳汤品','Mon姐','FC美食煮意','A苹果小厨','祯祯宝贝','筱苏苏','童尐果','tgcyy'];

    for(var i = 0;i <tanggeng.length;i++){
        $(".tanggeng").append("<li><a href=''target='_blank'><i><img class='imgLoad' src='../images/caipu/tg/"+tanggeng[i]+"'></i><p>"+tgtext[i]+"</p></a><a href=''target='_blank' class='u'>"+tgu[i]+"</a>");
    }
    $(".ui_title_wrap h3:eq(4)").click(function () {
        $(".ui_title_wrap h3").removeClass("on");
        $(this).addClass("on");
        $(".big4_list ul").hide();
        $(".big4_list ul:eq(4)").show();


    });
//  主食

    var zhushi = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg",'9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg'];

    var zstext = ['杂粮豆浆米饭','胡萝卜早餐饼','葱油饼','水烙馍','墨西哥鸡肉卷','猪肉大白菜包子','南瓜丝饼','培根鸡蛋烤吐司','河南特色的芝麻叶面','坚果糖包','香菇猪肉锅贴','荷叶鸡饭','咖喱鸡饭','酱油炒饭','红豆薏米山药饭','玫瑰蒸饺','曲麻菜五花肉饭','红螺粥','夏季黑松露意大利烩饭','咸菜鸡肉煲仔饭电饭煲轻松做'];

    var zsu = ['lqmy2k','小堂堂妈妈','眼角眉梢-格格','泽瑞妈妈','苏卡苏卡','rosejyy2000','清水淡竹','coldly','Ange121','悦悦玉食','coldly','sunshinewinnie','Jasmin_mstx','苏三菲菲','A苹果小厨','祯祯宝贝','四叶小馆','爱生活的馋猫','心煮艺的厨房','coldly'];

    for(var i = 0;i <zhushi.length;i++){
        $(".zhushi").append("<li><a href=''target='_blank'><i><img class='imgLoad' src='../images/caipu/zs/"+zhushi[i]+"'></i><p>"+zstext[i]+"</p></a><a href=''target='_blank' class='u'>"+zsu[i]+"</a>");
    }
    $(".ui_title_wrap h3:eq(5)").click(function () {
        $(".ui_title_wrap h3").removeClass("on");
        $(this).addClass("on");
        $(".big4_list ul").hide();
        $(".big4_list ul:eq(5)").show();


    });

//   小吃

    var xiaochi = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg",'9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg'];

    var xctext = ['韭菜锅烙','炸猪排','蟹壳黄烧饼','苏式鲜肉月饼','苏式豆沙月饼','雪媚娘--榴莲味','五香鹌鹑蛋','QQ糖布丁','木瓜椰汁盅','紫薯冰皮月饼','玉米烙','紫薯山药糕','炸鸡柳','冰皮月饼','蒸菱角','炸薯条','枣泥山药球','绿豆糕','软糯糖水鸡头米','酱香烤玉米'];

    var xcu = ['冬季心情','舒舒的厨房','爱跳舞的老太','心在乌云上2013','吃好吃的喽520','素年米妈厨房','猫猫家的私厨','素年米妈厨房','素年米妈厨房','素年米妈厨房','?不爱吃糖的糖糖糖?','沙儿飞飞❉','尖角小荷','snowlily8','狸小胖','Mon姐','满宝妈妈','A苹果小厨','苏三菲菲','阳光明媚99'];

    for(var i = 0;i <xiaochi.length;i++){
        $(".xiaochi").append("<li><a href=''target='_blank'><i><img class='imgLoad' src='../images/caipu/xc/"+xiaochi[i]+"'></i><p>"+xctext[i]+"</p></a><a href=''target='_blank' class='u'>"+xcu[i]+"</a>");
    }
    $(".ui_title_wrap h3:eq(6)").click(function () {
        $(".ui_title_wrap h3").removeClass("on");
        $(this).addClass("on");
        $(".big4_list ul").hide();
        $(".big4_list ul:eq(6)").show();


    });
//   西餐

    var xican = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg",'9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg'];

    var xitext = ['','','','','','','','','','','','','','','','','','','',''];

    var xiu = ['','','','','','','','','','','','','','','','','','','',''];

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

    var hongbei = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg",'9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg'];

    var hbtext = ['','','','','','','','','','','','','','','','','','','',''];

    var hbu = ['','','','','','','','','','','','','','','','','','','',''];

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

    var zizhi = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg",'9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg'];

    var zztext = ['','','','','','','','','','','','','','','','','','','',''];

    var zzu = ['','','','','','','','','','','','','','','','','','','',''];

    for(var i = 0;i <zizhi.length;i++){
        $(".zizhi").append("<li><a href=''target='_blank'><i><img class='imgLoad' src='../images/caipu/tuijian/"+zizhi[i]+"'></i><p>"+zztext[i]+"</p></a><a href=''target='_blank' class='u'>"+zzu[i]+"</a>");
    }
    $(".ui_title_wrap h3:eq(9)").click(function () {
        $(".ui_title_wrap h3").removeClass("on");
        $(this).addClass("on");
        $(".big4_list ul").hide();
        $(".big4_list ul:eq(9)").show();


    });






