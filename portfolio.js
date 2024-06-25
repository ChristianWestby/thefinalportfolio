document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audioPlayer");
    const playButton = document.getElementById("playButton");
    const muteButton = document.getElementById("muteButton");
    const stopButton = document.getElementById("stopButton");
    const nextButton = document.getElementById("nextButton");
    const aboutPopup = document.getElementById("about-popup");
    const contactPopup = document.getElementById("contact-popup");
    const servicesPopup = document.getElementById("services-popup");
    const closeButtons = document.querySelectorAll(".popup .close");
    const aboutLink = document.getElementById("about-link");
    const contactLink = document.getElementById("contact-link");
    const servicesLink = document.getElementById("services-link");
    const heroContent = document.querySelector('.hero-content');

    if (audioPlayer && playButton && muteButton && stopButton && nextButton) {
        playButton.addEventListener("click", function() {
            if (audioPlayer.paused) {
                audioPlayer.play();
                playButton.textContent = "Pause";
            } else {
                audioPlayer.pause();
                playButton.textContent = "Play";
            }
        });

        muteButton.addEventListener("click", function() {
            if (audioPlayer.muted) {
                audioPlayer.muted = false;
                muteButton.textContent = "Mute";
            } else {
                audioPlayer.muted = true;
                muteButton.textContent = "Unmute";
            }
        });

        stopButton.addEventListener("click", function() {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
            playButton.textContent = "Play";
        });

        nextButton.addEventListener("click", function() {
            // Logic to skip to the next audio clip
        });
    }

    if (aboutLink && aboutPopup) {
        aboutLink.addEventListener("click", function(event) {
            event.preventDefault();
            aboutPopup.style.display = "block";
            heroContent.classList.add('fade-out-hero-content');
            document.body.style.overflow = "hidden"; // Prevent scrolling
        });
    }

    if (contactLink && contactPopup) {
        contactLink.addEventListener("click", function(event) {
            event.preventDefault();
            contactPopup.style.display = "block";
            heroContent.classList.add('fade-out-hero-content');
            document.body.style.overflow = "hidden"; // Prevent scrolling
        });
    }

    if (servicesLink && servicesPopup) {
        servicesLink.addEventListener("click", function(event) {
            event.preventDefault();
            servicesPopup.style.display = "block";
            heroContent.classList.add('fade-out-hero-content');
            document.body.style.overflow = "hidden"; // Prevent scrolling
        });
    }

    if (closeButtons) {
        closeButtons.forEach(button => {
            button.addEventListener("click", function() {
                this.closest(".popup").style.display = "none";
                heroContent.classList.remove('fade-out-hero-content');
                document.body.style.overflow = "auto"; // Restore scrolling
            });
        });
    }

    window.addEventListener("click", function(event) {
        if (event.target === aboutPopup) {
            aboutPopup.style.display = "none";
            heroContent.classList.remove('fade-out-hero-content');
            document.body.style.overflow = "auto"; // Restore scrolling
        }
        if (event.target === contactPopup) {
            contactPopup.style.display = "none";
            heroContent.classList.remove('fade-out-hero-content');
            document.body.style.overflow = "auto"; // Restore scrolling
        }
        if (event.target === servicesPopup) {
            servicesPopup.style.display = "none";
            heroContent.classList.remove('fade-out-hero-content');
            document.body.style.overflow = "auto"; // Restore scrolling
        }
    });
});
