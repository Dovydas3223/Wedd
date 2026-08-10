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
const envelope = document.querySelector(".envelope");
const music = document.getElementById("bg-music");
const postOpenMessage = document.getElementById("post-open-message");

btn.addEventListener("click", () => {
  // Open envelope
  envelope.classList.add("open");

  // Start music
  music.volume = 0.4;
  music.play();

  // Fade out envelope + button after animation
  setTimeout(() => {
    envelope.style.opacity = "0";
    envelope.style.transition = "opacity 0.8s ease";
    btn.style.opacity = "0";
    btn.style.transition = "opacity 0.8s ease";
  }, 1800);

  // Reveal the message
  setTimeout(() => {
    envelope.style.display = "none";
    btn.style.display = "none";
    postOpenMessage.classList.add("show");
  }, 2600);
});
