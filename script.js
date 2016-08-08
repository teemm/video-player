window.onload = function() {
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
			playButton.innerHTML = "Pause";
		}else{
			video.pause();
			playButton.innerHTML = "Play";
		}
	});
	muteButton.addEventListener("click", function() {
		if (video.muted == false) {
			video.muted = true;
			muteButton.innerHTML = "Unmute";
		} else {
			video.muted = false;
			muteButton.innerHTML = "Mute";
		}
	});
	seekBar.addEventListener("change", function() {
		var time = video.duration * (seekBar.value / 100);
		video.currentTime = time;
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
		video.volume = volumeBar.value;
	});
}