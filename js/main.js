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
  window.addEventListener('load', function(e) {
    $('html').addClass("loaded");
    var defaultContainer = document.getElementById("video-container");
    var video = document.getElementById("video");
    var playButton = document.getElementById("play-pause");
    var volumeBar = document.getElementById("volume-bar");
    var seekBar = document.getElementById("seekBar");
    var fullScreenButton = document.getElementById("full-screen");
    var muteButton = document.getElementById("mute");
    var progresBarSize = document.getElementById("progres");

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
        }
      }
    });
    seekBar.addEventListener("click", function(e) {
      var myPoing = e.pageX-(seekBar.offsetLeft + defaultContainer.offsetLeft);
      var peresentOfItem = (myPoing / seekBar.offsetWidth) * 100;
      progresBarSize.style.width = peresentOfItem;
      video.currentTime = (peresentOfItem / 100) * video.duration;
    });
    seekBar.addEventListener("mouseover", function() {
      // console.log(video.currentTime);
    });
    video.addEventListener("timeupdate", function() {
      var persentage = (video.currentTime / video.duration) * 100;
      progresBarSize.style.width = persentage + "%";
    });
    fullScreenButton.addEventListener("click", function() {
      video.webkitRequestFullscreen();
    });
    // seekBar.addEventListener("mousedown", function() {
    //   video.pause();
    // });
    // seekBar.addEventListener("mouseup", function() {
    //   video.play();
    // });
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