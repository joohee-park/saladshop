/*메인이미지*/
$(function(){
$('.banner').each(function(){
  //$배너 전체 선택
  //$모든 이미지들 선택
  //$각각의 이미지
  //$버튼 들(prev,next)
  //$인디케이터
  
  var $banner = $(this),
      $slides = $banner.find('.slides'),
      $pic = $slides.find('.pic'),
      $btn = $banner.find('.btn'),
      $indicator = $banner.find('.indicator');
  
  //이미지의 총 갯수
  //현재의 순번(index)
  //재생 시간(duration)
  //easing 함수 (Expo, Bounce, Elastic, Sine ..)
  //재생 주기(interval)
  //timer(빈그릇)
  //indicator에 html 요소 삽입 ''
  
  var count = $pic.length,
      currentIndex = 0,
      sp = 1000,
      easing = 'easeInExpo',
      interval = 8000,
      timer,
      indicatorHTML = '';
  
  /* each(function(i){}) 
   => 요소의 갯 수 만큼 반복 실행됨
   => i 값은 (0 1 2 3 ...) 
     
   첫 번째 이미지 {left: 100 * 0 + '%'} ==> 0%
   두 번째 이미지 {left: 100 * 1 + '%'} ==> 100%
   세 번째 이미지 {left: 100 * 2 + '%'} ==> 200%
   네 번째 이미지 {left: 100 * 3 + '%'} ==> 300%
   ...
   
  */
  
  $pic.each(function(i){
    $(this).css({
     left: 100 * i + '%'
    });
   indicatorHTML += '<a href="#">'+(i+1)+'</a>';
  });
  
  $indicator.html(indicatorHTML);
  
  /*슬라이드 재생 함수 만들기*/
  function play(i) {
   $slides.animate({
    left: -100 * i + '%'
   },sp,easing);
   currentIndex = i;
   update();
  }
  
  /*인디케이터 상태 업데이트 함수 만들기*/
  function update() {
   var $prev = $btn.find('.prev'),
       $next = $btn.find('.next');
   
   if(currentIndex == 0){
    $prev.addClass('on')
   }else{
    $prev.removeClass('on')
   }
   
   if(currentIndex == count-1){
    $next.addClass('on')
   }else{
    $next.removeClass('on')
   }
     
   $indicator.find('a').removeClass('on');
   $indicator.find('a').eq(currentIndex).addClass('on');
  }

  /*인디케이터를 "click"하면 해당 이미지 나타내기*/
  $indicator.on('click','a',function(e){
   e.preventDefault();
   
   if(!$(this).hasClass('on')){
    play($(this).index())
   }
  });
  
  /*타이머 함수 만들기(interval) 시작, 정지*/
  function startTimer() {
   timer = setInterval(function(){
    var nextIndex = (currentIndex+1)%count ;
    
    /* 나머지값(%)
    (0 + 1) % 4 = 1
    (0 + 2) % 4 = 2
    (0 + 3) % 4 = 3
    (0 + 4) % 4 = 0
    (0 + 5) % 4 = 1
    (0 + 6) % 4 = 2
    (0 + 7) % 4 = 3
    (0 + 8) % 4 = 0
    ...
    */
    
    play(nextIndex);
   },interval);
  }
  
  function stopTimer() {
   clearInterval(timer);
  }
  
  function hyper() {}
  
  $banner.on({
   mouseenter: stopTimer,
   mouseleave: startTimer,
   click: hyper
  });
  
  /*재생함수, 타이머 실행*/
  play(currentIndex);
  startTimer();
  
 });
});

/*인기상품 슬라이드*/
$(function() {
    var time = 1000;
    var idx = idx2 = 0;
    var slide_width = $(".slider").width();
    var slide_count = $(".slider li").size();
    $(".slider li:first").css("display", "block");
    if(slide_count > 1)
        $(".btn").css("display", "inline");
 
    $("#prev_btn").click(function() {
        if(slide_count > 1) {
            idx2 = (idx - 1) % slide_count;
            if(idx2 < 0)
                idx2 = slide_count - 1;
            $(".slider li:hidden").css("left", "-"+slide_width+"px");
            $(".slider li:eq("+idx+")").animate({ left: "+="+slide_width+"px" }, time, function() {
                $(this).css("display", "none").css("left", "-"+slide_width+"px");
            });
            $(".slider li:eq("+idx2+")").css("display", "block").animate({ left: "+="+slide_width+"px" }, time);
            idx = idx2;
        }
    });
 
    $("#next_btn").click(function() {
        if(slide_count > 1) {
            idx2 = (idx + 1) % slide_count;
            $(".slider li:hidden").css("left", slide_width+"px");
            $(".slider li:eq("+idx+")").animate({ left: "-="+slide_width+"px" }, time, function() {
                $(this).css("display", "none").css("left", slide_width+"px");
            });
            $(".slider li:eq("+idx2+")").css("display", "block").animate({ left: "-="+slide_width+"px" }, time);
            idx = idx2;
        }
    });
});

/*클렌즈주스*/
$(function() {
    var time = 1000;
    var idx = idx2 = 0;
    var slide_width = $(".slider01").width();
    var slide_count = $(".slider01 li").size();
    $(".slider01 li:first").css("display", "block");
    if(slide_count > 1)
        $(".btn").css("display", "inline");
 
    $("#prev_btn01").click(function() {
        if(slide_count > 1) {
            idx2 = (idx - 1) % slide_count;
            if(idx2 < 0)
                idx2 = slide_count - 1;
            $(".slider01 li:hidden").css("left", "-"+slide_width+"px");
            $(".slider01 li:eq("+idx+")").animate({ left: "+="+slide_width+"px" }, time, function() {
                $(this).css("display", "none").css("left", "-"+slide_width+"px");
            });
            $(".slider01 li:eq("+idx2+")").css("display", "block").animate({ left: "+="+slide_width+"px" }, time);
            idx = idx2;
        }
    });
 
    $("#next_btn01").click(function() {
        if(slide_count > 1) {
            idx2 = (idx + 1) % slide_count;
            $(".slider01 li:hidden").css("left", slide_width+"px");
            $(".slider01 li:eq("+idx+")").animate({ left: "-="+slide_width+"px" }, time, function() {
                $(this).css("display", "none").css("left", slide_width+"px");
            });
            $(".slider01 li:eq("+idx2+")").css("display", "block").animate({ left: "-="+slide_width+"px" }, time);
            idx = idx2;
        }
    });
});

/*풀샐러드*/

$(function() {
    var time = 1000;
    var idx = idx2 = 0;
    var slide_width = $(".slider02").width();
    var slide_count = $(".slider02 li").size();
    $(".slider02 li:first").css("display", "block");
    if(slide_count > 1)
        $(".btn").css("display", "inline");
 
    $("#prev_btn02").click(function() {
        if(slide_count > 1) {
            idx2 = (idx - 1) % slide_count;
            if(idx2 < 0)
                idx2 = slide_count - 1;
            $(".slider02 li:hidden").css("left", "-"+slide_width+"px");
            $(".slider02 li:eq("+idx+")").animate({ left: "+="+slide_width+"px" }, time, function() {
                $(this).css("display", "none").css("left", "-"+slide_width+"px");
            });
            $(".slider02 li:eq("+idx2+")").css("display", "block").animate({ left: "+="+slide_width+"px" }, time);
            idx = idx2;
        }
    });
 
    $("#next_btn02").click(function() {
        if(slide_count > 1) {
            idx2 = (idx + 1) % slide_count;
            $(".slider02 li:hidden").css("left", slide_width+"px");
            $(".slider02 li:eq("+idx+")").animate({ left: "-="+slide_width+"px" }, time, function() {
                $(this).css("display", "none").css("left", slide_width+"px");
            });
            $(".slider02 li:eq("+idx2+")").css("display", "block").animate({ left: "-="+slide_width+"px" }, time);
            idx = idx2;
        }
    });
});

/*트리거메뉴*/
$(function(){
	//toggleClass(), hasClass()
	
	var sp = 900,
			easing = 'easeInOutExpo',
			$header = $('header'),
			$aside = $('aside'),
			$btn01 = $header.find('button'),
			$btn02 = $aside.find('button');
	$btn01.on('click',function(){
		$aside.toggleClass('on');
		if($aside.hasClass('on')){
			$aside.stop().animate({
				left:0
			},sp,easing);
		}
	});
	$btn02.on('click',function(){
		$aside.toggleClass('on');
		if($aside.hasClass('')){
			$aside.stop().animate({
				left:'-500px'
			},sp,easing);
		}
	});
	
});

/*트리거 카테고리 아코디언 메뉴효과*/
$(function(){
	$("#accordian h3").click(function(){
		$("#accordian ul ul").slideUp();
		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
		}
	})
})