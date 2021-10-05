//처음 list의 위치값
var num=0;
var timer;

 timer = setInterval(move, 50);

$(".listBox").on("mouseenter",function(){
    clearInterval(timer);
});

$(".listBox").on("mouseleave",function(){
    timer = setInterval(move,50)
});

//setInterval로 반복할 공통 함수 분리
function move(){
    if(num <= -120){
        num=0;
        $(".list").find("li").first().appendTo($(".list"));
    }else{
        num-=2;
    }
    $(".list").css({left:num});
}


