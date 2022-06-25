var Links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
    alist[i].style.color = color;
    i = i + 1;
    }
    // $('a').css('color', color); //이 웹페이지의 모든 a 코드를 jQuery로 제어하겠다
  }
}
var Body = {
  setColor:function(color){
    document.querySelector('body').style.color = color;
    // $('body').css('color', color);
  }, //객체와 Property와 Property를 구분할 때 , 사용
  SetBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
    // $('body').css('color', color);
  }
}
function nightDayHandler(self){
var target = document.querySelector('body');
if(self.value === 'night'){
  Body.SetBackgroundColor('black');
  Body.setColor('white');
  self.value = 'day';

  Links.setColor('powderblue');
} else{
  Body.SetBackgroundColor('white');
  Body.setColor('black');
  self.value = 'night';

  Links.setColor('orange');
}
}
