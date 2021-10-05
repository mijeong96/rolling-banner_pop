//처음 list의 위치값
var num=0;
var timer;

//0.05초 간격으로 반복하면서
 timer = setInterval(function(){
    if(num <= -120){
        num=0;
        $(".list").find("li").first().appendTo($(".list"));
    }else{
        
        num-=2;
    }

    $(".list").css({left:num})
},50);

//listbox영역에 마우스 포인터가 들어가면
$(".listBox").on("mouseenter",function(){
    //롤링 정지
    clearInterval(timer);
});

//listbox영역에 마우스 포인터가 떠나면
$(".listBox").on("mouseleave",function(){
    //다시 롤링 시작
    timer = setInterval(function(){
        if(num <= -120){
            num=0;
            $(".list").find("li").first().appendTo($(".list"));
        }else{
            
            num-=2;
        }
    
        $(".list").css({left:num});
    },50);
});




