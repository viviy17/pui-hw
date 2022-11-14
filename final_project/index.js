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