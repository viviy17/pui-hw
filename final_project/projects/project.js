//JQUERY- Creates a toggle effect for video
//learned from LearnCodeacademy.com https://www.youtube.com/watch?v=hMxGhHNOkCU
$(document).ready(function(){
    $(".projectVideo").toggle(1000).toggle(1000);
})

//JQUERY- Create a fade out and fade in effect for the header
//learned from LearnCodeacademy.com https://www.youtube.com/watch?v=hMxGhHNOkCU
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
// Learned from Stackoverflow: https://stackoverflow.com/questions/23284036/jquery-play-video-when-hover-on-parent-div

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


    
