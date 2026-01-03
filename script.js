document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("enter-btn");
  const envelope = document.querySelector(".envelope");

  if (!btn || !envelope) return;

  btn.addEventListener("click", () => {
    envelope.classList.add("open");
  });
});


const weddingDate = new Date("2026-08-07T15:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff <= 0) return;

  document.getElementById("days").innerText =
    Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("hours").innerText =
    Math.floor((diff / (1000 * 60 * 60)) % 24);

  document.getElementById("minutes").innerText =
    Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("seconds").innerText =
    Math.floor((diff / 1000) % 60);
}, 1000);


const btn = document.getElementById("enter-btn");
const overlay = document.getElementById("music-overlay");
const envelope = document.querySelector(".envelope");
const music = document.getElementById("bg-music");

btn.addEventListener("click", () => {
  // Open envelope
  envelope.classList.add("open");

  // Start music
  music.volume = 0.4;
  music.play();

  // Fade out overlay after animation
  setTimeout(() => {
    overlay.style.opacity = "0";
    overlay.style.transition = "opacity 0.8s ease";
  }, 1800);

  setTimeout(() => {
    overlay.style.display = "none";
  }, 2600);
});
