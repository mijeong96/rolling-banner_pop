var $list = $(".list");
var $list_li = $list.find("li");
var interval = 20;
var num = 0;
var wid = $list_li.width();
var len = $list_li.length;

$list.width(len*wid);

//0.02초 간격으로 ul의 marginLeft값이 2px씩 계속 줄어듬
setInterval(function(){
    if(num < -wid){
        num = 0;
        $list.find("li").first().appendTo($list);
    }else{
        num-=2;
    } 

    $list.css({ marginLeft : num });
},interval);