var audio=document.getElementById("playlist");
var songs=["songs/youngHeartsRunFree.mp3","songs/borderline.mp3", "songs/afterLaughter.mp3"];
var songTitles=["Young Hearts Run Free - Candi Stanton", "Borderline - Brandy", "After Laughter Comes Tears - Wendy Rene"];
var index=0; //the song we start off at
var playbtn=document.getElementById("playpause");
var title=document.getElementById("title");
var nextbtn=document.getElementById("next");
var rewindbtn=document.getElementById("rewind");

//when we press the next button, we want to increment our index #, but not when its greater than 2, otherwise we're going get an error
nextbtn.addEventListener("mousedown", playNext);
rewindbtn.addEventListener("mousedown", rewind);
function playNext(){
    if(index>=songs.length-1){
        //start playlist over
        index=0;
      }else{
        index++; //increase index to the next song
      }
      title.innerHTML=songTitles[index]; 
      audio.src=songs[index]; //make sure next song is loaded
      audio.play();  
}

function rewind(){
   if(index<=0){
       index=2;
   }else{
    index--;
   }
   title.innerHTML=songTitles[index]; 
      audio.src=songs[index]; //make sure next song is loaded
      audio.play(); 
}

window.addEventListener("load", function(event){
  //when page is loaded start playlist at the beginning
  audio.src=songs[index];
    title.innerHTML=songTitles[index]; 
})
audio.addEventListener("ended", playNext, false);
playbtn.addEventListener("mousedown", function(event){
  if(audio.paused){
    //if paused then play
    audio.play();
    console.log("weArePlaying");
  }else{
    //if playing then pause
    audio.pause();
    console.log("weArePaused");
  }
  console.log("wePressedTheImage");
});