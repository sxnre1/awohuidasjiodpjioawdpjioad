const noticeButton = document.querySelector(".button--primary");
const modal = document.getElementById("noticeModal");
const closeButton = document.querySelector(".modal__close");
const overlay = document.querySelector(".modal__overlay");

const bgm = document.getElementById("bgm");
const soundToggle = document.querySelector(".sound-toggle");

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

noticeButton.addEventListener("click", () => {
		modal.classList.add("is-open");
});

closeButton.addEventListener("click", () => {
		modal.classList.remove("is-open");
});

overlay.addEventListener("click", () => {
		modal.classList.remove("is-open");
});