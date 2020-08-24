const app = () => {
	const song = document.querySelector('.audio');
	const play = document.querySelector('.play');
	const outline = document.querySelector('.moving-outline circle');
	const video = document.querySelector('.default-video video');
	const sounds = document.querySelectorAll('.sound button');
	const timeDisplay = document.querySelector('.time-display');
	const timeSelect = document.querySelectorAll(".time button");

	const outlineLength = outline.getTotalLength();

	let fakeDuration = 300;
	outline.style.strokeDasharray = outlineLength;
	outline.style.strokeDashoffset = outlineLength;

	//Sound change
	sounds.forEach(sound => {
		sound.addEventListener('click', function() {
			song.src = this.getAttribute('data-sound');
			video.src = this.getAttribute('data-video');
			checkPlaying(song);
		})
	})


	//Play button launch
	play.addEventListener('click', () => {
		checkPlaying(song);
	})


	//Check if the song is playing
	const checkPlaying = song => {
	if(song.paused) {
		song.play();
		video.play();
		play.src = './images/pause.svg';
	} else {
		song.pause();
		video.pause();
		play.src = './images/play.svg';
	}}

	//Set new meditation time
	timeSelect.forEach(option => {
		option.addEventListener('click', function() {
			 fakeDuration = this.getAttribute('data-time');
			 timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`
		})
	})

	//Change of the current time
	song.ontimeupdate = () => {
		let currentTime = song.currentTime;
		let elapsed = fakeDuration - currentTime;
		let seconds = Math.floor(elapsed % 60);
		let minutes = Math.floor(elapsed / 60);

		let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
		outline.style.strokeDashoffset = progress;

		timeDisplay.textContent = `${minutes}:${seconds}`;

		if(currentTime >= fakeDuration) {
			song.pause();
			song.currentTime = 0;
			play.src = './images/play.svg';
			video.pause();
		}
	}
}
app();
