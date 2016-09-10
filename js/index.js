/**
 * Created by root on 16/8/17.
 */



    //轮播
    $(function () {
        $("#mycarousel").carousel("next");

    });

    

    //导航
    $(".i1").mouseover(function(){
        $(".ii1").show();
    });
    $(".i1").mouseout(function(){
        $(".ii1").hide();
    });

    $(".i2").mouseover(function(){
        $(".ii2").show();
    });
    $(".i2").mouseout(function(){
        $(".ii2").hide();
    });

    $(".i3").mouseover(function(){
        $(".ii3").show();
    });
    $(".i3").mouseout(function(){
        $(".ii3").hide();
    });

    $(".i4").mouseover(function(){
        $(".ii4").show();
    });
    $(".i4").mouseout(function(){
        $(".ii4").hide();
    });

    $(".i5").mouseover(function(){
        $(".ii5").show();
    });
    $(".i5").mouseout(function(){
        $(".ii5").hide();
    });
    
    
//    健康
    $("#jk").click(function(){
        $(".tj").show();
        $(".wrap_w3_1 h3").removeClass("on");
        $(".wrap_w3_1 h3:eq(0)").addClass("on");
        $(".La3").hide();
        $("#sl").css("color","#666");
    });
    $("#sl").click(function(){
        $(this).css("color","#ff6767");
        $(".tj").hide();
        $(".wrap_w3_1 .ui_title_wrap h3").removeClass("on");
        $(".wrap_w3_1 .ui_title_wrap h3:eq(1)").addClass("on");
        $(".La3").show();
        $("#jk").css("color","#666");
        
    });
//    烘焙

    $("#hb").click(function(){
        $(".hb").show();
        $(".wrap_w3_2 .ui_title_wrap h3").removeClass("on");
        $(".wrap_w3_2 .ui_title_wrap h3:eq(0)").addClass("on");
        $(this).css("color","#ff6767");
        $(".sp").hide();
        $("#sp").css("color","#666");
        
    });
    $("#sp").click(function(){
        $(".hb").hide();
        $(".wrap_w3_2 .ui_title_wrap h3").removeClass("on");
        $(".wrap_w3_2 .ui_title_wrap h3:eq(1)").addClass("on");
        $(this).css("color","#ff6767");
        $(".sp").show();
        $("#hb").css("color","#666");
        

    });

// 菜谱

window.onload = function () {

    //新秀菜谱
    var pic1 = ["c1.jpg", "c2.jpg", "c3.jpg", "c4.jpg", "c5.jpg", "c6.jpg", "c7.jpg", "c8.jpg", "c9.jpg", "c10.jpg", "c11.jpg", "c12.jpg", "c13.jpg", "c14.jpg", "c15.jpg", "c16.jpg", "c17.jpg", "c18.jpg", "c19.jpg", "c20.jpg"];
    var text1 = ["蜜汁叉烧", "玉米燕麦豆浆", "秋日的私语", "五仁馅月饼", "香辣土豆片", "自制花生酱", "香菇酱炒面", "水煮牛肉", "白巧轻乳酪小蛋糕", "咸柠泡泡", "牛肉炒农家菜", "火腿炒意面", "蒜黄木耳炒鸡蛋", "麻辣牛肚百叶", "超简单小葱拌豆腐", "葡式蛋挞", "清爽玉带笋", "豌豆黄", "五彩拌面", "锅巴肉片"];
    var textb1 = ["胖子瘦子我都爱", "lxp幸福", "阳光明媚99", "请叫我壮壮妈", "二婷爱美食", "Marsally4390", "小北美食", "罗拉藏馆", "食·色", "Elin", "rosejyy2000", "小棉袄的麻麻", "沵沵", "掀帘晨曦datura", "杜鹃花美食", "丝巾", "余甘果蜜", "吾爱烘焙", "个性胜过姿色", "演堃@杨爸爸"];



    // 一周热门
    var pic2 = ["r1.jpg", "r2.jpg", "r3.jpg", "r4.jpg", "r5.jpg", "r6.jpg", "r7.jpg", "r8.jpg", "r9.jpg", "r10.jpg", "r11.jpg", "r12.jpg", "r13.jpg", "r14.jpg", "r15.jpg", "r16.jpg", "r17.jpg", "r18.jpg", "r19.jpg", "r20.jpg"];

    var text2 = ["玫瑰煎饺", "家常版梅干菜扣肉", "手抓饼", "家常麻婆豆腐", "南瓜软饼", "蒜泥凉粉", "酱香肉沫蒸茄子", "泡椒猪肝", "时蔬鸡蛋饼早餐饼", "鱼香肉丝", "电饭煲版海棉蛋糕", "奶香玉米饼", "雅韵黄梅", "豆腐圆子", "家常焖三鲜", "葱花手抓饼", "手工自制香辣豆鼓牛肉酱", "黄金米饭饼", "香葱饼", "西红柿鸡蛋面"];

    var textb2 = ["演堃@杨爸爸", "小诺厨娘", "芋儿1", "眉儿", "黑猫警长kitchen", "人生就是过客", "我家臭猪", "人生就是过客", "小诺厨娘", "心语梦境", "lqmy2k", "暖夫生活", "阳光明媚99", "紫嫣秀儿", "贾府私房菜", "Meggy跳舞的苹果", "蒲的贪吃老爸", "雷小厨", "雷小厨", "个性胜过姿色"];


    // 最受欢迎的家常菜

    var pic3 = ["j1.jpg", "j2.jpg", "j3.jpg", "j4.jpg", "j5.jpg", "j6.jpg", "j7.jpg", "j8.jpg", "j9.jpg", "j10.jpg", "j11.jpg", "j12.jpg", "j13.jpg", "j14.jpg", "j15.jpg", "j16.jpg", "j17.jpg", "j18.jpg", "j19.jpg", "j20.jpg"];

    var text3 = ["红烧肉", "红烧茄子", "宫保鸡丁", "麻辣香锅", "红烧排骨", "糖醋排骨", "鱼香肉丝", "可乐鸡翅", "麻婆豆腐", "佛跳墙", "水煮肉片", "红烧鱼", "沙拉", "西红柿鸡蛋面", "蛋炒饭", "鸡蛋饼", "口水鸡", "水煮鱼", "啤酒鸭", "麻辣烫"];

    // 时令食材
    var shiling = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg"];

    var shitext = ["秋葵","藕带","豆角","茄子","黄瓜","西红柿","黑木耳","生蚝","小龙虾","鸡翅","排骨","丝瓜","土豆","绿豆"];

    var shitextb = ["本性粘人,爱我请深爱","偶的小时候","吃豆吃到老老老","有事没事喊喊我","抱歉,上面是小字辈","好你个番茄","八朵木耳一身轻","宛如深吻的吮吸","红到勾心,辣到流泪","老少通吃","可记得吮指之乐","善解人意的清淡","Please call me 马铃薯","止渴消暑可是大事"];


    for (var i = 0; i < pic1.length; i++) {

        //新秀菜谱
        $(".wrap_w4_wrap").append("<li><a href='' target='_blank' ><i><img src='../images/c-images/" + pic1[i] + "'style='display: block'></i><p>" + text1[i] + "</p></a><a  href='' class='u'>" + textb1[i] + "</a></li>");

        //    一周热门
        $(".wrap_w4_wrap_1").append("<li><a href='' target='_blank' ><i><img src='../images/c-images/" + pic2[i] + "'style='display: block'></i><p>" + text2[i] + "</p></a><a  href='' class='u'>" + textb2[i] + "</a></li>");


//    最受欢迎的家常菜
        $(".wrap_w4_wrap_2").append("<li><a href='' target='_blank' ><i><img src='../images/c-images/" + pic3[i] + "'style='display: block'></i><p>" + text3[i] + "</p></a><a  href='' class='u'></a></li>");


    }

    for (var i =0;i < shiling.length;i++){

        //    时令食材
        $(".food").append("<li><a href='' target='_blank' ><img src='../images/shilingshicai/" + shiling[i] + "'style='display: block'>" + shitext[i] + "</a><span class='u'>" + shitextb[i] + "</span></li>");
    }

//    新秀

    $("#c1").click(function () {
        $(".wrap_w4 .ui_title_wrap h3").removeClass("on");
        $(".wrap_w4 .ui_title_wrap h3:eq(0)").addClass("on");
        $(".wrap_w4_wrap").show();
        $(this).css("color", "#ff6767");
        $(".wrap_w4_wrap_1").hide();
        $("#c2").css("color", "#999");
        $(".wrap_w4_wrap_2").hide();
        $("#c3").css("color", "#999");
    });

//    热门
    $("#c2").click(function () {
        $(".wrap_w4 .ui_title_wrap h3").removeClass("on");
        $(".wrap_w4 .ui_title_wrap h3:eq(1)").addClass("on");
        $(".wrap_w4_wrap_1").show();
        $(this).css("color", "#ff6767");
        $(".wrap_w4_wrap").hide();
        $("#c1").css("color", "#999");
        $(".wrap_w4_wrap_2").hide();
        $("#c3").css("color", "#999");
    });

//    家常菜
    $("#c3").click(function () {
        $(".wrap_w4 .ui_title_wrap h3").removeClass("on");
        $(".wrap_w4 .ui_title_wrap h3:eq(2)").addClass("on");
        $(".wrap_w4_wrap_2").show();
        $(this).css("color", "#ff6767");
        $(".wrap_w4_wrap").hide();
        $("#c1").css("color", "#999");
        $(".wrap_w4_wrap_1").hide();
        $("#c2").css("color", "#999");
    });

    // footer
    var footer = ["爱奇艺生活","糖酒快讯","应用汇","中华美食网","太平洋亲子网","名厨网","美食杰","POCO美食网","红餐微杂志","百年餐饮网","食品商务网","妈妈网","亲宝网","6296网址大全","中国地图","三九养生堂","饭菜网","装修网","波奇网","糖豆网","慧聪网","企业服务平台",];

    var thisurl = ["http://life.iqiyi.com/","http://www.tjkx.com/","http://www.appchina.com/","http://www.zhms.cn/","http://www.pcbaby.com.cn/","http://www.greatchef.com.cn","http://www.meishij.net/","http://food.poco.cn/","http://www.canyin88.com/","http://www.100ncy.com/","http://www.21food.cn/","http://www.mama.cn/","http://www.qqbaobao.com/","http://www.6296.com.cn/","http://www.city8.com/","http://www.39yst.com/","http://www.fancai.com/","http://home.fang.com/","http://www.boqii.com/","http://www.tangdou.com/","http://www.hc360.com/","http://www.258.com",];
        for (var i = 0;i<footer.length;i++){
            $(".w_link_url").append("<li><a href='"+thisurl[i]+"'target='_blank'>"+footer[i]+"</a></li>");
        }
};
