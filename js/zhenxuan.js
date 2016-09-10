/**
 * Created by root on 16/8/25.
 */
$(function () {
    $("#navlist").hover(function () {
        $("#navlist_sub").show();
    },function () {
        $("#navlist_sub").hide();
    });

    //        轮播
    var pic = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg"];
    var p = ["清新水果大作战","有情调的格子控","没想到垃圾桶都这么有个性","打败落灰 让家更安心","新[煮]妇时代","想要做菜香,好锅不可少","英氏下午茶,让心情更加惬意","妈妈们爱用的不锈钢制品","好茶就要配好罐","印象·搪瓷","[亚马逊]早来道'蟹'","旅行必备单品......"];
    var Span = ["25件商品","25件商品","26件商品","26件商品","40件商品","24件商品","31件商品","48件商品","20件商品","29件商品","47件商品","36件商品"];
    for(var i = 0;i <pic.length;i++){
        $(".zxlb").append("<li><a href='' target='_blank' ><i><img class='imgLoad' src='../images/zhenxuan/"+pic[i]+"'></i><div class='os' style='display: block;'></div><p class='line2'>"+p[i]+"<br><span>"+Span[i]+"</span></p>" );
    }

//        轮播
    var curIndex = 0;
    var imgLen = $(".zxlb li").length;

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
        if (num < 10) {
            var goLeft = num * 345;
            $(".zxlb").animate({left: "-" + goLeft + "px"}, 500);
        } else {
            var goLeft = 9 * 345;
            $(".zxlb").animate({left: "-" + goLeft + "px"}, 500);
        }
    }

//        buy
    var buypic = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg'];

    var buyp = ['薄荷绿布艺收纳套装','阳澄联合 生鲜阳澄湖大闸蟹礼券966型 公蟹3.6-4.0两 母蟹2.6-3.0两 5对','创意日式陶瓷糖罐盐罐套装手绘釉下彩送小白勺','Violetta家用玻璃水杯套装','山舍 原创木制传统烘焙模具','柳宗理平底不粘锅18-8','波兰进口sante浆果干吃燕麦片早餐冲饮水果脆麦片即食350g*2','简约抽象水果小清新壁画','EASTPAK 中性 包盖式双肩包 多功能夹层潮包EK47B26L绿色','TIGER 虎牌 不锈钢真空保温杯樱花杯MMW-A36C(WI)唯美白','无盖亚麻收纳衣服整理箱 ','田园花果茶玻璃茶具','小资派 搪瓷密封盒保鲜盒','星农联合 生鲜阳澄湖大闸蟹礼券1666型 公蟹4.5-5.0两 母蟹3.2-3.6两 4对','秋湖蟹韵 阳澄湖大闸蟹礼券1228型 公3.8-4.3两 母2.8-3.2两 10只装螃蟹券','德国Lamy Safari狩猎系列限量版凌美钢笔'];

    var buyspan = ['￥29.00','￥328.00','￥13.50','￥119.90','￥80.00','￥268.00','￥46.90','￥54.40','￥759.00','￥558.00','￥24.00','￥128.00','￥39.00','￥638.00','￥358.00','￥178.00'];

    for(var i = 0;i< buypic.length;i++){
        $('#zhen_list_living ul').append("<li><a href='' target='_blank' class='pic'><i><img class='imgLoad' src='../images/zhenxuan/buy/"+buypic[i]+"'style='display: block;'></i><p>"+buyp[i]+"</p><span>"+buyspan[i]+"</span></a><a href='' target='_blank' class='buy' rel='nofollow'>购买</a>");
    }

    $(".zhen_list_living").css("height",buypic.length/4*338 + "px");
})