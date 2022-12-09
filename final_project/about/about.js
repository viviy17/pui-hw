
//JQUERY 06- Creates a toggle effect when video loads
$(document).ready(function(){
    $(".aboutVideo").toggle(1000).toggle(1000);
})

//JQUERY- Bolds the menu options when mouse hovers over it
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
$(document).ready(function () {
  $(".aboutVideo").hover(function () {
     $(this).find("video")[0].play();
  }, function () {
      var el = $(this).find("video")[0];
      el.pause();
      el.currentTime = 0;
  });
});

