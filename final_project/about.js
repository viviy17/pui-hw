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
    $(".aboutVideo").toggle(1000).toggle(1000);
})
