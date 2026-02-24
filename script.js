const noticeButton = document.querySelector(".button--primary");
const modal = document.getElementById("noticeModal");
const closeButton = document.querySelector(".modal__close");
const overlay = document.querySelector(".modal__overlay");

const bgm = document.getElementById("bgm");
const soundToggle = document.querySelector(".sound-toggle");

const trigger = document.getElementById('menu-trigger');
const nav = document.getElementById('header-nav');

bgm.volume = 0.07;
let isPlaying = false;

soundToggle.addEventListener("click", () => {
		if (!isPlaying) {
				bgm.play();
				soundToggle.textContent = "SOUND ON";
				isPlaying = true;
		} else {
				bgm.pause();
				soundToggle.textContent = "SOUND";
				isPlaying = false;
		}
});

document.querySelector('.menu-trigger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('is-open');
});

noticeButton.addEventListener("click", () => {
		modal.classList.add("is-open");
});

closeButton.addEventListener("click", () => {
		modal.classList.remove("is-open");
});

overlay.addEventListener("click", () => {
		modal.classList.remove("is-open");
});