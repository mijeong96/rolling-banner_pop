/*
특정구문을 반복처리 하는 내장함수
setInterval(반복실행할 함수, 실행간격);

setInterval(function(){
    //2초 간격으로 해당 블록안의 구문이 반복 실행
}, 2000);
*/

var $list = $(".list");
var $list_li = $list.find("li");
var num = 0;

//0.2초 간격으로 ul의 marginLeft값이 2px씩 계속 줄어듬
setInterval(function(){

    if(num < -240){
        num = 0;
        $list_li.first().appendTo($list);
    }else{
        num-=2;
    } 
       
    $list.css({ marginLeft : num });
},20);