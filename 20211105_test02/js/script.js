$(function(){
    $(".mainLi").mouseover(function(){
        $(".mainLi ul").stop().slideDown();
    });
    $(".mainLi").mouseout(function(){
        $(".mainLi ul").stop().slideUp();
    });
    var myslide = $(".slider").bxSlider({
        controls:false, 
        auto:true
        // mode:"fade",
        
    });
    $(".nextBtn").click(function(){
        myslide.goToNextSlide(); //bxsliderm public method option
    });
    $(".preBtn").click(function(){
        myslide.goToPrevSlide(); //bxsliderm public method option
    });
});

var slider = $('.slide_wrap>ul').bxSlider({
    auto: true, //mode:'fade',
    infiniteLoop:true,
    hideControlOnEnd:true,
    pager: true, 
    pagerCustom: "#slide_pager"
  });

  $('#prevBtn').on( 'click', function () {
    slider.goToPrevSlide();
    return false;
  });

  $('#nextBtn').on( 'click', function () {
    slider.goToNextSlide();
    return false;
  } );

  $(document).on('click','.bx-next, .bx-prev',function() {
    slider.stopAuto();
    slider.startAuto();
  });	