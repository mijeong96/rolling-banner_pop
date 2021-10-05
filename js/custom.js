var num=0;
var timer;

 timer = setInterval(move, 20);

$(".listBox").on("mouseenter",function(){
    clearInterval(timer);
});

$(".listBox").on("mouseleave",function(){
    timer = setInterval(move,20);
});

function move(){
    if(num <= -240){
        num=0;
        $(".list").find("li").first().appendTo($(".list"));
    }else{
        num-=2;
    }
    $(".list").css({left:num});
}


