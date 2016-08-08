<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico?v=1"/>

  <!--  for Android-->
  <meta name="theme-color" content="#CDA34C">
  <link rel="icon" sizes="192x192" href="img/favicon192.png">

  <link rel="stylesheet" href="css/style.css">
<!--  <link rel="stylesheet" href="css/style.css?v=--><?//=$random_number_for_disabling_cache?><!--">-->

  <title>My Boilerplate</title>

<!--  <meta name="description" content="--><?//= $texts['tags']['description'][$lang]?><!--" />-->
<!--  <meta property="og:type" content="website">-->
<!--  <meta property="fb:app_id" content="--><?//= $texts['tags']['app-id'][$lang]?><!--" />-->
<!--  <meta property="og:image" content="--><?//= $valid_url['default'] . $texts['tags']['image'][$lang]?><!--">-->
<!--  <meta property="og:url" content="--><?//= $valid_url['default'] . $texts['tags']['url'][$lang]?><!--">-->
<!--  <meta property="og:title" content="--><?//= $texts['tags']['fb-title'][$lang]?><!--">-->
<!--  <meta property="og:description" content="--><?//= $texts['tags']['fb-description'][$lang]?><!--">-->

</head>
<body>
<div id="video-container">
  <video id="video" width="640" height="365">
    <source src="videos/mikethefrog.webm" type="video/webm">
    <source src="videos/mikethefrog.ogv" type="video/ogv">
    <source src="videos/mikethefrog.mp4" type="video/mp4">
  </video>
  <div id="video-controls">
    <button class="buttons play vertical-items" type="button" id="play-pause">
      <svg viewBox="0 0 100 100" class="icon play">
        <use xlink:href="#play"></use>
      </svg>
      <svg viewBox="0 0 100 100" class="icon stop">
        <use xlink:href="#stop"></use>
      </svg>
    </button>
    <input class="vertical-items" type="range" id="seek-bar" value="0">
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
<?php include("img/svg-sprite.svg"); ?>
  <script src="js/script.js"></script>
</body>