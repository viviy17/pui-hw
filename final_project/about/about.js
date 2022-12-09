
//JQUERY 06- Creates a toggle effect when video loads
//learned from LearnCodeacademy.com https://www.youtube.com/watch?v=hMxGhHNOkCU
$(document).ready(function(){
    $(".aboutVideo").toggle(1000).toggle(1000);
})

//JQUERY- Bolds the menu options when mouse hovers over it
// Learned from https://www.tutorialspoint.com/How-to-make-text-bold-italic-and-underline-using-jQuery
$(document).ready(function(){
    $(".menuOption").on({
      mouseenter: function(){
        $(this).css("font-weight", "bold");
      },  
      mouseleave: function(){
        $(this).css("font-weight", "normal");
      }
      })
    })


//JQUERY- Plays video on hover
// Learned from Stackoverflow: https://stackoverflow.com/questions/23284036/jquery-play-video-when-hover-on-parent-div
$(document).ready(function () {
  $(".aboutVideo").hover(function () {
     $(this).find("video")[0].play();
  }, function () {
      var el = $(this).find("video")[0];
      el.pause();
      el.currentTime = 0;
  });
});

