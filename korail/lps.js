/* reload 할 예약 페이지는 프레임 내부의 URL을 따서 사용한다.*/

var script = document.createElement('script');
  script.src = 'http://code.jquery.com/jquery-1.7.2.min.js';
  script.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(script);

var research = function() {
  window.location.reload();
}

var run = function() {
  i($('img[src="/2007/img/common/icon_apm_yes.gif"]').length < 1) {
    console.log('예약페이지가 아닌 것으로 간주함');
    return false;
  }

  if($('img[src="/2007/img/common/icon_apm_yes.gif"]').length > 1) {
    $('img[src="/2007/img/common/icon_apm_yes.gif"]').eq(1).trigger('click');
  }else{
    console.log('좌석 없음');
    setTimeout("research()", 6000);
  }
}
setTimeout("run()",2000);
