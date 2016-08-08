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
  function currentTimePosition() {
    var progresBarSize = document.getElementById("progres");
    var persentage = (video.currentTime / video.duration) * 100;
    progresBarSize.style.width = persentage + "%";
  }
  var main = function(){
    htmlClassHandler();
  };
  document.addEventListener('DOMContentLoaded', function(){
    main();
  });
  window.addEventListener('load', function(e) {
    $('html').addClass("loaded");
    var video = document.getElementById("video");
    var playButton = document.getElementById("play-pause");
    var volumeBar = document.getElementById("volume-bar");
    var seekBar = document.getElementById("seekBar");
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
        }
      }
    });
    seekBar.addEventListener("click", function(e) {
      currentTimePosition();
      console.log()
      // video.currentTime = time;
      // console.log(time);
      // var width = e.seekBar.offsetLeft;
      // console.log(width);
      // alert(persentage);
      var x = e.clientX;     // Get the horizontal coordinate
      var y = e.clientY;     // Get the vertical coordinate
      console.log(x,y);
    });

    seekBar.addEventListener("mouseover", function() {
      // console.log(video.currentTime);
    });

    video.addEventListener("timeupdate", function() {
      currentTimePosition();
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