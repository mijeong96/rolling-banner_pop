var $list = $(".list");
var $list_li = $list.find("li");
var interval = 20;
var num = 0;
var wid = $list_li.width();
var len = $list_li.length;
var timer;
$list.width(len*wid);

//브라우저 로딩시 배너 자동롤링 시작
timer = setInterval(move, interval);

//리스트에 마우스호버시 자동롤링 정지
$list.on("mouseenter", function(){
    clearInterval(timer);
});

//리스트에서 마우스가 떠나면 다시 자동롤링 시작
$list.on("mouseleave", function(){
    timer = setInterval(move, interval);
});

function move(){
    if(num < -wid){
        num = 0;
        $list.find("li").first().appendTo($list);
    }else{
        num-=2;
    } 
    $list.css({ marginLeft : num });
}

createPop();

function createPop(){
    $("body")
        .append(
            $("<aside class='pop'>")
                .append(
                    $("<div class='con'>"),
                    $("<span class='btnClose'>")
                )
        )
}