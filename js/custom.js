var num=0;

setInterval(function(){
    num-=2;
    $(".list").css({left:num})
},20);