const modal = document.getElementById("noticeModal");
const modalClose = document.querySelector(".modal__close");
const modalOverlay = document.querySelector(".modal__overlay");
const noticeButton = document.querySelector(".button--primary");

const productModal = document.getElementById("productModal");
const productClose = productModal.querySelector(".modal__close");
const productOverlay = productModal.querySelector(".modal__overlay");
const mobileBtn = document.querySelector(".mobile-button");

const bgm = document.getElementById("bgm");
const soundToggle = document.querySelector(".sound-toggle");

const menuTrigger = document.querySelector('.menu-trigger');
const nav = document.querySelector('.header__nav');
const menuOverlay = document.querySelector('.menu-overlay');

const enterButton = document.getElementById('enterButton');

let isPlaying = false;

if (soundToggle && bgm) {

    bgm.volume = 0.07;

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

}

if (enterButton) {

    enterButton.addEventListener('click', () => {

        const target = document.querySelector('.outlet-info');
        if (!target) return;

        const targetPosition = target.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1200;

        let start = null;

        function animation(currentTime) {

            if (start === null) start = currentTime;

            const timeElapsed = currentTime - start;
            const run = ease(timeElapsed, startPosition, distance, duration);

            window.scrollTo(0, run);

            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    });

}

if (noticeButton && modal) {

    noticeButton.addEventListener('click', () => {
        modal.classList.add('is-open');
    });

}

if (modalClose && modal) {

    modalClose.addEventListener('click', () => {
        modal.classList.remove('is-open');
    });

}

if (modalOverlay && modal) {

    modalOverlay.addEventListener('click', () => {
        modal.classList.remove('is-open');
    });

}

if (mobileBtn && productModal) {
    mobileBtn.addEventListener('click', () => {
        productModal.classList.add('is-open');
    });
}

if (productClose && productModal) {
    productClose.addEventListener('click', () => {
        productModal.classList.remove('is-open');
    });
}

if (productOverlay && productModal) {
    productOverlay.addEventListener('click', () => {
        productModal.classList.remove('is-open');
    });
}

if (menuTrigger && nav) {

    menuTrigger.addEventListener('click', () => {
        menuTrigger.classList.toggle('active');
        nav.classList.toggle('is-open');

        if (menuOverlay) {
            menuOverlay.classList.toggle('active');
        }
    });

    if (menuOverlay) {
        menuOverlay.addEventListener('click', () => {
            menuTrigger.classList.remove('active');
            nav.classList.remove('is-open');
            menuOverlay.classList.remove('active');
        });
    }
}