console.log("Welcome to Spotify");

let songIndex = 0;
let audioelement = new Audio('song1.mp3');
let masterplay = document.getElementById('masterplay');
let size = document.getElementById('size');
let gif = document.getElementById('gif');
let somgItem = document.getElementsByClassName('somgItem')
let songs = [
    {songname : "Starboy", filepath: "song/1.mp3", coverpath: "cover/1.jpeg"},
    {songname : "Starboy", filepath: "song/1.mp3", coverpath: "cover/1.jpeg"},
    {songname : "Starboy", filepath: "song/1.mp3", coverpath: "cover/1.jpeg"},
    {songname : "Starboy", filepath: "song/1.mp3", coverpath: "cover/1.jpeg"},
    {songname : "Starboy", filepath: "song/1.mp3", coverpath: "cover/1.jpeg"},
    {songname : "Starboy", filepath: "song/1.mp3", coverpath: "cover/1.jpeg"},
]

masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }
    else{
        audioelement.pause();
        masterplay.classList.add("fa-play-circle");
        masterplay.classList.remove("fa-pause-circle");
        gif.style.opacity = 0;
    }
})

audioelement.addEventListener('timeupdate' , ()=>{
    timestamp = parseInt((audioelement.currentTime/audioelement.duration)* 100);
    size.value = timestamp;
})

size.addEventListener('change', ()=>{
    audioelement.currentTime = size.value * audioelement.duration/100;
})