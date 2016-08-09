<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico?v=1"/>
  <meta name="theme-color" content="#CDA34C">
  <link rel="icon" sizes="192x192" href="img/favicon192.png">
  <link rel="stylesheet" href="css/style.css">
  <title>Videp Player</title>
</head>
<body>
<div id="video-container">
  <video id="video" width="640" height="365" preload>
    <source src="http://www.quirksmode.org/html5/videos/big_buck_bunny.mp4" type="video/mp4">
  </video>
  <div id="video-controls">
    <div class="left-control vertical-items">
      <button class="buttons play vertical-items" type="button" id="play-pause">
        <svg viewBox="0 0 100 100" class="icon play">
          <use xlink:href="#play"></use>
        </svg>
        <svg viewBox="0 0 100 100" class="icon stop">
          <use xlink:href="#stop"></use>
        </svg>
      </button>
      <!--    <input class="vertical-items" type="range" id="seek-bar" value="0">-->
      <div class="progresbar vertical-items"  id="seekBar">
        <div class="progres" id="progres"></div>
      </div>
      <div class="video-time vertical-items">
        <span class="current-time" id="current-time">0</span>
        <span class="slesh">/</span>
        <span class="video-duration" id="video-duration">3:57</span>
      </div>
    </div>
    <div class="right-control vertical-items">
      <button class="vertical-items buttons mute" type="button" id="mute">
        <svg viewBox="0 0 100 100" class="icon sound_on transform-center">
          <use xlink:href="#sound_on"></use>
        </svg>
        <svg viewBox="0 0 100 100" class="icon sound_off transform-center">
          <use xlink:href="#sound_off"></use>
        </svg>
      </button>
      <input class="buttons vertical-items" type="range" id="volume-bar" min="0" max="1" step="0.1" value="1">
      <button class="buttons vertical-items fullscreen" type="button" id="full-screen">
        <svg viewBox="0 0 100 100" class="icon fullscreen transform-center">
          <use xlink:href="#fullscreen"></use>
        </svg>
      </button>
    </div>
  </div>
</div>
<?php include("img/svg-sprite.svg"); ?>
  <script src="js/script.js"></script>
</body>
