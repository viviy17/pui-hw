var music= document.getElementById("myAudio");

function enableLoop(){
    music.loop=true;
    music.load();
}

function disableLoop(){
    music.loop=false;
    music.load();
}

function checkLoopStatus(){
    alert(music.loop);
}


$(document).ready(function(){
    $(".projectVideo").toggle(1000).toggle(1000);
})




//Bolds the menu options when mouse hovers over it
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


    
