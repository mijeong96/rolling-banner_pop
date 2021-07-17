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

//각 리스트 클릭시 동적으로 레이어 팝업 함수 호출
$list_li.on("click", function(e){
    e.preventDefault();
    createPop();
});

//팝업닫기버튼 클릭시 해당 팝업 fadeout시키고 제거
$(".pop .btnClose").on("click", function(){
    console.log("clicked!!");
    $(".pop").fadeOut(500);
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

function createPop(){
    $("body")
        .append(
            $("<aside class='pop'>")
                .append(
                    $("<div class='con'>")
                        .append(
                            "<img src='img/loading.gif' class='loading'>"
                        ),
                    $("<span class='btnClose'>").text("close")
                ).fadeIn()
        )
}