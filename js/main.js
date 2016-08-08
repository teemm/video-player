(function(window,document){
  "use strict";
  var windowWidth = document.documentElement.clientWidth,
      windowHeight = document.documentElement.clientHeight;

  var htmlClassHandler = function () {
    if(isMobile){
      $('html').addClass('mobile')
    }
    if(!G().isTouch()){
      $('html').addClass('no-touch');
    }
  };

  var main = function(){
    htmlClassHandler();
  };
  
  document.addEventListener('DOMContentLoaded', function(){
    main();
  });

  window.addEventListener('load', function(e) {
    $('html').addClass("loaded");
    var video = document.getElementById("video");
    var muteButton = document.getElementById("mute");
    var playButton = document.getElementById("play-pause");
    var volumeBar = document.getElementById("volume-bar");
    var seekBar = document.getElementById("seek-bar");
    var fullScreenButton = document.getElementById("full-screen");
    var muteButton = document.getElementById("mute");

    playButton.addEventListener("click", function() {
      if(video.paused == true) {
        video.play();
        playButton.classList.add('active');
      }else{
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
          volumeBar.volume = '0'
        }
      }
    });
    seekBar.addEventListener("change", function() {
      var time = video.duration * (seekBar.value / 100);
      video.currentTime = time;
      // console.log(time);
    });
    seekBar.addEventListener("mouseover", function() {
      console.log(video.currentTime);
    });

    video.addEventListener("timeupdate", function() {
      var value = (100 / video.duration) * video.currentTime;
      // console.log(video.duration);
      seekBar.value = value;
    });
    fullScreenButton.addEventListener("click", function() {
      video.webkitRequestFullscreen();
    });
    seekBar.addEventListener("mousedown", function() {
      video.pause();
    });
    seekBar.addEventListener("mouseup", function() {
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
  });

  window.addEventListener('resize', function(e) {
    windowWidth = document.documentElement.clientWidth;
    windowHeight = document.documentElement.clientHeight;
  });

})(window,document);