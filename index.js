let pomodoro=document.querySelector('.pomodoro');
let shortbreak=document.querySelector('.short_break');
let longbreak=document.querySelector('.long_break');

let pomodoro_timer_button=document.querySelectorAll(".pomodoro_timer_button")

let start=document.querySelector('.start');
let reset=document.querySelector('.reset');
let pause=document.querySelector(".pause");

let hide=document.querySelector(".hide");
let show=document.querySelector(".show");

let time=document.querySelector(".time")

let mood=document.querySelectorAll(".dropdown-item")
let titleMood=document.querySelector(".current_mood")

let drop_button=document.querySelector(".drop_button")

let title=document.querySelector(".title")

let startTime=1500
let myInterval
let currentTime

time.innerHTML=`${startTime/60}:00`

const mapTimer = new Map();

mapTimer.set('pomodoro', 1500);
mapTimer.set('short_break', 300);
mapTimer.set('long_break', 900);

let currentMode="pomodoro"

let currentMood="Studychill"

let spotify_player=document.querySelector(".spotify_player")

const songs = new Map();

    songs.set("Studychill","https://open.spotify.com/embed/playlist/37i9dQZF1DX8Uebhn9wzrS?utm_source=generator&theme=0");
    songs.set("nightcore","https://open.spotify.com/embed/album/2VDT1qOaUYCkpPNXGgCBOy?utm_source=generator&theme=0");
    songs.set("nostalgia","https://open.spotify.com/embed/playlist/6I6Zhpvm3C7jY8ewtKOCiw?utm_source=generator&theme=0" );
    songs.set("retro","https://open.spotify.com/embed/playlist/6HXYyF1TXV2mDTv8QLHqoT?utm_source=generator&theme=0");
    songs.set("energy","https://open.spotify.com/embed/playlist/1yspcEya6w7WtBFe7j0FIl?utm_source=generator&theme=0");
    songs.set("cheerful","https://open.spotify.com/embed/playlist/66AXRS8lkbsU7XLozNslLD?utm_source=generator&theme=0");
    songs.set("romantic","https://open.spotify.com/embed/album/1kIk9eo4zjt72NDKn4yPt1?utm_source=generator&theme=0");
    songs.set("spring","https://open.spotify.com/embed/playlist/3e1mML0cAxyool80MzIgXJ?utm_source=generator&theme=0");
    songs.set("summer","https://open.spotify.com/embed/playlist/4gRoFV3lCVoNMsDdPmKy0Z?utm_source=generator&theme=0");
    songs.set("winter","https://open.spotify.com/embed/playlist/0Riq6FE4VYUH7uXhFexHdT?utm_source=generator&theme=0");
    songs.set("autumn","https://open.spotify.com/embed/playlist/0hyS5GAiZ39Rke6Jcm4Rsm?utm_source=generator&theme=0");
    

const backgroundColors=new Map();
    backgroundColors.set("Studychill","#2D9596");//
    backgroundColors.set("nightcore","#818589");//
    backgroundColors.set("nostalgia","#797e95");//
    backgroundColors.set("retro","#704264");//
    backgroundColors.set("energy","#7d53a2");//
    backgroundColors.set("cheerful","#4e92c2");
    backgroundColors.set("romantic","#af4e91");//
    backgroundColors.set("spring","#518a58");//
    backgroundColors.set("summer","#ED7D31");//
    backgroundColors.set("winter","#76ABAE");//
    backgroundColors.set("autumn","#a6473d");//

document.body.style.backgroundColor=backgroundColors.get(currentMood)

const textColor=new Map();
    textColor.set("Studychill","#e43b12");
    textColor.set("nightcore","#1b1b1c");
    textColor.set("nostalgia","#959079");
    textColor.set("retro","#659557");
    textColor.set("energy","#3d9ca6");
    textColor.set("cheerful","#3c7aff");
    textColor.set("romantic",);
    textColor.set("spring","#932936");//
    textColor.set("summer");
    textColor.set("winter","#d7b8bd");
    textColor.set("autumn",);



start.style.color="white"
pause.style.color="white"
reset.style.color="white"

for(i=0;i<pomodoro_timer_button.length;i++){
         pomodoro_timer_button[i].style.color="white"
     }
titleMood.style.color="white"
drop_button.style.color="white"
// settings_button.style.color="white"
title.style.color="white"


//Start timer Pomodoro
start.addEventListener("click", startTimer);


function updateTimer(){
    startTime--
    currentTime=startTime
    
    time.innerHTML=`${Math.floor(startTime/60)<10?`0${Math.floor(startTime/60)}`:`${Math.floor(startTime/60)}`}:
    ${startTime%60<10?`0${startTime%60}`:`${startTime%60}`}`

    if(currentTime==0){
        stopTimer()
    }
}

function startTimer() {
    show.style.display="none"
    hide.style.display="flex"
    hide.style.justifyContent="center"
    hide.style.gap="0.8rem"
    myInterval=setInterval( updateTimer,1000);
    
}


//Change mode 

var allButtons=document.querySelectorAll(".pomodoro_timer_button")

for (var i = 0; i < allButtons.length; i++) {
allButtons[i].addEventListener('click', changeMode);
}

function changeMode(event) {
    const target_button = event.target;
    const classesList = event.target.classList;
    currentMode=classesList[1]              // get the button class

    startTime=mapTimer.get(currentMode)
    console.log(startTime)

    clearInterval(myInterval);

    time.innerHTML=`${startTime/60}:00`    //Reset the timer
    show.style.display="block"
    hide.style.display="none"    //Display start button and hide pause

}

//Pause the timer
pause.addEventListener("click", pauseTimer)

function pauseTimer(){
    show.style.display="block"
    hide.style.display="none" 

    clearInterval(myInterval);
    time.innerHTML=`${Math.floor(currentTime/60)<10?`0${Math.floor(currentTime/60)}`:`${Math.floor(currentTime/60)}`}:
    ${currentTime%60<10?`0${currentTime%60}`:`${currentTime%60}`}`

}

//Reset the timer
reset.addEventListener("click", resetTimer)

function resetTimer(){
    show.style.display="block"
    hide.style.display="none" 

    clearInterval(myInterval);

    time.innerHTML=`${mapTimer.get(currentMode)/60}:00`
}

//When the timer hits 00
function stopTimer(){
    show.style.display="block"
    hide.style.display="none" 

    clearInterval(myInterval)

    time.innerHTML=`${mapTimer.get(currentMode)/60}:00`


    
}

//Change mood 
for(i=0;i<mood.length;i++){
    mood[i].addEventListener("click",changeMood)
}

function changeMood(event){
    currentMood=event.target.classList[1]
    titleMood.innerHTML=currentMood[0].toUpperCase()+currentMood.substring(1)
    console.log(currentMood)
    spotify_player.src=songs.get(currentMood)
    document.body.style.backgroundColor=backgroundColors.get(currentMood)
}




















