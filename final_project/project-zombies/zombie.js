//JQUERY on hover video
$(document).ready(function () {
  $(".lofiVideo").hover(function () {
     $(this).find("video")[0].play();
  }, function () {
      var el = $(this).find("video")[0];
      el.pause();
      el.currentTime = 0;
  });
});

//JQUERY toggle titles

$(document).ready(function(){
  $(".title").fadeOut(10).delay(1000).fadeIn(2000);
})

$(document).ready(function(){
  $(".image").hide(1000).show(1000);
})
   
$(document).ready(function(){
  $(".paragraph").hide(1000).show(1000);
})
    
