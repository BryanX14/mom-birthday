document.addEventListener("DOMContentLoaded", () => {
    // 🎉 Confetti function
    function launchConfetti() {
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#b38bff', '#e0b3ff', '#ffffff']
      });
    }
  
    // Launch confetti on load and repeat every 5 seconds
    launchConfetti();
    setInterval(launchConfetti, 10000);
  
    // 🖼️ Image rotation
    const images = [
      "images/1.png",
      "images/2.png",
      "images/3.png",
      "images/4.png",
      "images/5.png",
      "images/6.png",
      "images/7.png",
      "images/8.png",
      "images/9.png",
      "images/10.png",
      "images/11.png",
      "images/12.png",
      "images/13.png",
      "images/14.png",
      "images/15.png",
      "images/16.png",
      "images/17.png",
      "images/18.png",
      "images/19.png",
      "images/20.png"
    ];
  
    let currentIndex = 0;
    const galleryImg = document.getElementById("gallery-image");
  
    function rotateImages() {
      currentIndex = (currentIndex + 1) % images.length;
      galleryImg.style.opacity = 0;
  
      setTimeout(() => {
        galleryImg.src = images[currentIndex];
        galleryImg.style.opacity = 1;

        galleryImg.classList.remove("zoom-in");
    void galleryImg.offsetWidth; // trigger reflow to restart animation
    galleryImg.classList.add("zoom-in");
      }, 500);
    }
  
    setInterval(rotateImages, 5000);
  
    // 🔊 Voice message playback
    const voiceNotes = [
      { btnId: 'play-bryan', audioId: 'audio-bryan' },
      { btnId: 'play-zoe', audioId: 'audio-zoe' },
      { btnId: 'play-mitch', audioId: 'audio-mitch' }
    ];
  
    voiceNotes.forEach(({ btnId, audioId }) => {
      const button = document.getElementById(btnId);
      const audio = document.getElementById(audioId);
  
      if (button && audio) {
        button.addEventListener("click", () => {
          // Pause all other audios
          voiceNotes.forEach(({ audioId: otherId }) => {
            const otherAudio = document.getElementById(otherId);
            const otherBtn = document.getElementById(
              voiceNotes.find(v => v.audioId === otherId).btnId
            );
            if (otherAudio && otherAudio !== audio && !otherAudio.paused) {
              otherAudio.pause();
              if (otherBtn) otherBtn.textContent = "▶️";
            }
          });
  
          if (audio.paused) {
            audio.play();
            button.textContent = "⏸️";
          } else {
            audio.pause();
            button.textContent = "▶️";
          }
        });
  
        audio.addEventListener("ended", () => {
          button.textContent = "▶️";
        });
      }
    });
  });
  