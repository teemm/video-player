(function(window,document){
  "use strict";
  var windowWidth = document.documentElement.clientWidth,
      windowHeight = document.documentElement.clientHeight;
  var htmlClassHandler = function () {
    // if(isMobile){
    //   $('html').addClass('mobile')
    // }
    // if(!G().isTouch()){
    //   $('html').addClass('no-touch');
    // }
  };
  var main = function(){
    htmlClassHandler();
  };
  document.addEventListener('DOMContentLoaded', function(){
    main();
  });
  window.addEventListener('load', function() {
    $('html').addClass("loaded");
    var defaultContainer = document.getElementById("video-container");
    var video = document.getElementById("video");
    var playButton = document.getElementById("play-pause");
    var volumeBar = document.getElementById("volume-bar");
    var seekBar = document.getElementById("seekBar");
    var fullScreenButton = document.getElementById("full-screen");
    var muteButton = document.getElementById("mute");
    var progresBarSize = document.getElementById("progres");
    var videoDurationControl = document.getElementById("video-duration");
    var currentTimeCounter = document.getElementById("current-time");

    playButton.addEventListener("click", function(e) {
        if(video.paused == true) {
          if (!e) return;
          video.play();
          playButton.classList.add('active');
        }else{
          if (!e) return;
          video.pause();
          playButton.classList.remove("active");
        }
    });
    muteButton.addEventListener("click", function() {
      if(volumeBar.value !== '0'){
        if (video.muted == false){
          video.muted = true;
          muteButton.classList.add('active');
        } else {
          video.muted = false;
          muteButton.classList.remove('active');
          volumeBar.value == '0'
        }
      }
    });
    seekBar.addEventListener("click", function(e) {
      var myPoing = e.pageX-(seekBar.offsetLeft + defaultContainer.offsetLeft);
      var peresentOfItem = (myPoing / seekBar.offsetWidth) * 100;
      //var videoSize = -(100 - peresentOfItem)+"%";
      var videoTimeNow = (peresentOfItem / 100) * video.duration;
      progresBarSize.style.left = videoTimeNow;
      video.currentTime = videoTimeNow;
    });
    video.addEventListener("timeupdate", function() {
      var persentage = (video.currentTime / video.duration) * 100;
      progresBarSize.style.left = -(100 - persentage)+"%";
      currentTimeCounter.innerHTML = parseInt(video.currentTime);
      videoDurationControl.innerHTML = parseInt(video.duration);
    });
    fullScreenButton.addEventListener("click", function() {
      video.webkitRequestFullscreen();
    });
    video.addEventListener('ended', function() {
      video.currentTime = 0;
      video.pause();
      playButton.classList.remove('active');
    });
     seekBar.addEventListener("mousedown", function(e) {
       muteButton.classList.remove('active');
       video.pause();

     });
     seekBar.addEventListener("mouseup", function() {
       muteButton.classList.add('active');
       video.play();

     });
    volumeBar.addEventListener("change", function() {
      if (volumeBar.value == '0'){
        muteButton.classList.add('active');
      }else{
        muteButton.classList.remove('active');
      }
      video.volume = volumeBar.value;
    });
    videoDurationControl.innerHTML = parseInt(video.duration);
  });
  window.addEventListener('resize', function(e) {
    windowWidth = document.documentElement.clientWidth;
    windowHeight = document.documentElement.clientHeight;
  });
})(window,document);