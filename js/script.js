// Variables//

var video = document.getElementById("main-video");
var playPauseButton = document.getElementById("playpause");
var muteButton = document.getElementById("mute");
var fullScreenButton = document.getElementById("full-screen");
var progress = document.getElementById('progress');
var progressBar = document.getElementById('progress-bar');
var captionHighlight = document.querySelectorAll('.captionText span');

//Play and Pause Button//

playPauseButton.addEventListener('click', function () {
  var image = document.getElementById('play-pause-icon');
  if (video.paused || video.ended) {
    video.play();
    image.src = "icons/pause-icon.png";
  } else {
    video.pause();
    image.src = "icons/play-icon.png";
  }
});

//Mute button

muteButton.addEventListener('click', function () {
  var image = document.getElementById('volume-icon');
  if (video.muted) {
    video.muted = false;
    image.src = "icons/volume-on-icon.png";
  } else {
    video.muted = true;
    image.src = "icons/volume-off-icon.png";
  }
});

// Full Screen

fullScreenButton.addEventListener('click', function () {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen(); //firefox
  } else if (video.webkitRequestFullScreen) {
    video.webkitRequestFullscreen(); //Chrome and Safari
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen(); //IE 11
  }
});


// Progress

    // Maximum duration
video.addEventListener('loadedmetadata', function () {
  progress.setAttribute('max', video.duration);
});

    // Current time of the video
video.addEventListener('timeupdate', function () {
  progress.value = video.currentTime;
  progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
});

    //Video duration for mobile browsers
video.addEventListener('timeupdate', function () {
  if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
  progress.value = video.currentTime;
  progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
});

//Timer

  //Display current time
video.addEventListener('timeupdate', function () {
  var curtime = document.getElementById("current-time");
  var minutes = Math.floor(video.currentTime / 60);
  var seconds = Math.floor(video.currentTime - minutes * 60);
  var x = minutes < 10 ? " " + minutes + ":" : minutes;
  var y = seconds < 10 ? "0" + seconds : seconds;
  curtime.innerHTML = (x + y + "  " + "/ ");
});

   //Display video duration
video.addEventListener('durationchange', function () {
  var durtime = document.getElementById("duration-time");
  var minutes = Math.floor(video.duration / 60);
  var seconds = Math.floor(video.duration - minutes * 60);
  var x = minutes < 10 ? " " + minutes + ": " : minutes;
  var y = seconds < 10 ? "0" + seconds : seconds;
  durtime.innerHTML = (" " +  x + y + " ");
});

  //Skip ahead allows user to click on different locations on progress bar to skip to different point
progress.addEventListener('click', function (e) {
  var pos = (e.pageX  - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
  video.currentTime = pos * video.duration;
});

 // Highlight Transcript Function

video.addEventListener("timeupdate", function() {

   var cueTime = video.currentTime;
   if(cueTime > 0 && cueTime < 4.13) {
      captionHighlight[0].classList.add('highlight');
   } else {
      captionHighlight[0].classList.remove('highlight');
   }
   if(cueTime > 4.13 && cueTime < 7.535) {
      captionHighlight[1].classList.add('highlight');
   } else {
      captionHighlight[1].classList.remove('highlight');
   }
   if(cueTime > 7.535 && cueTime < 11.27) {
      captionHighlight[2].classList.add('highlight');
   } else {
      captionHighlight[2].classList.remove('highlight');
   }
   if(cueTime > 11.27 && cueTime < 13.960) {
      captionHighlight[3].classList.add('highlight');
   } else {
      captionHighlight[3].classList.remove('highlight');
   }
   if(cueTime > 13.96 && cueTime < 17.94) {
      captionHighlight[4].classList.add('highlight');
   } else {
      captionHighlight[4].classList.remove('highlight');
   }
   if(cueTime > 17.94 && cueTime < 22.37) {
      captionHighlight[5].classList.add('highlight');
   } else {
      captionHighlight[5].classList.remove('highlight');
   }
   if(cueTime > 22.37 && cueTime < 26.88) {
      captionHighlight[6].classList.add('highlight');
   } else {
      captionHighlight[6].classList.remove('highlight');
   }
   if(cueTime > 26.88 && cueTime < 30.92) {
      captionHighlight[7].classList.add('highlight');
   } else {
      captionHighlight[7].classList.remove('highlight');
   }
   if(cueTime > 32.1 && cueTime < 34.73) {
      captionHighlight[8].classList.add('highlight');
   } else {
      captionHighlight[8].classList.remove('highlight');
   }
   if(cueTime > 34.73 && cueTime < 39.43) {
      captionHighlight[9].classList.add('highlight');
   } else {
      captionHighlight[9].classList.remove('highlight');
   }
   if(cueTime > 39.43 && cueTime < 41.19) {
      captionHighlight[10].classList.add('highlight');
   } else {
      captionHighlight[10].classList.remove('highlight');
   }
   if(cueTime > 42.35 && cueTime < 46.3) {
      captionHighlight[11].classList.add('highlight');
   } else {
      captionHighlight[11].classList.remove('highlight');
   }
   if(cueTime > 46.3 && cueTime < 49.27) {
      captionHighlight[12].classList.add('highlight');
   } else {
      captionHighlight[12].classList.remove('highlight');
   }
   if(cueTime > 49.27 && cueTime < 53.76) {
      captionHighlight[13].classList.add('highlight');
   } else {
      captionHighlight[13].classList.remove('highlight');
   }
   if(cueTime > 53.76 && cueTime < 57.78) {
      captionHighlight[14].classList.add('highlight');
   } else {
      captionHighlight[14].classList.remove('highlight');
   }
   if(cueTime > 57.78) {
      captionHighlight[15].classList.add('highlight');
   } else {
      captionHighlight[15].classList.remove('highlight');
   }

});










































