//JQUERY- Creates a toggle effect for video
$(document).ready(function(){
    $(".projectVideo").toggle(1000).toggle(1000);
})

//JQUERY- Create a fade out and fade in effect for the header
  $(document).ready(function(){
      $(".header").fadeOut(10).delay(1000).fadeIn(2000);
  })

  $(document).ready(function(){
    $(".introSubHeader").fadeOut(10).delay(1000).fadeIn(2000);
})

  $(document).ready(function(){
    $(".introSubHeader2").fadeOut(10).delay(1000).fadeIn(2000);
})


//JQUERY- Plays video on hover
$(document).ready(function () {
  $(".projectVideo").hover(function () {
     $(this).find("video")[0].play();
  }, function () {
      var el = $(this).find("video")[0];
      el.pause();
      el.currentTime = 0;
  });
});


//JQUERY- Bolds "see project" when mouse hovers over it
$(document).ready(function(){
  $("a").on({
    mouseenter: function(){
      $(this).css("font-weight", "bold");
    },  
    mouseleave: function(){
      $(this).css("font-weight", "normal");
    }
    })
  })


    
