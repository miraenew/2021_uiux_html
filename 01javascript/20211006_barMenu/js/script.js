$(document).ready(function(){
    

function nowMenu(menu){
    if(menu == "main"){
        $(".bar").css("opacity",0)
        console.log("메인연결됨");
    }else{
        $(".menu li").eq(menu).addClass("active") //자바스크립트 버전 - document.querySelectorAll(".menu li")[menu].classList.add("active")
        $(".bar").css("left",200*menu)
        console.log("서브페이지")
    }
}

});