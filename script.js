const modal = document.getElementById("noticeModal");
const modalClose = document.querySelector(".modal__close");
const modalOverlay = document.querySelector(".modal__overlay");
const noticeButton = document.querySelector(".button--primary");

const bgm = document.getElementById("bgm");
const soundToggle = document.querySelector(".sound-toggle");

const menuTrigger = document.getElementById('menu-trigger');
const nav = document.getElementById('header-nav');
const menuOverlay = document.querySelector('.menu-overlay');

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

noticeButton.addEventListener('click', () => {
    modal.classList.add('is-open');
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('is-open');
});
modalOverlay.addEventListener('click', () => {
    modal.classList.remove('is-open');
});

menuTrigger.addEventListener('click', () => {
    menuTrigger.classList.toggle('active');
    nav.classList.toggle('is-open');
    menuOverlay.classList.toggle('active');
});

menuOverlay.addEventListener('click', () => {
    menuTrigger.classList.remove('active');
    nav.classList.remove('is-open');
    menuOverlay.classList.remove('active');
});