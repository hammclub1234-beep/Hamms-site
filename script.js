setTimeout(() => {
  // Change background color every second
  setInterval(() => {
    document.body.style.backgroundColor =
      '#' + Math.floor(Math.random()*16777215).toString(16);
  }, 500);

  // Glitch the title text
  const title = document.getElementById('title');
  setInterval(() => {
    title.textContent = glitchText("Hamms: Trust the Chaos");
  }, 300);

  // Shake the button
  const button = document.getElementById('cta');
  setInterval(() => {
    button.style.transform = `translate(${rand(-5,5)}px, ${rand(-5,5)}px) rotate(${rand(-5,5)}deg)`;
  }, 100);

  // Add sound (optional)
  const audio = new Audio('https://www.soundjay.com/button/sounds/beep-07.mp3');
  audio.play().catch(() => {}); // some browsers block autoplay
}, 2000);

function glitchText(text) {
  const chars = "!@#$%^&*()_+=-[]{};:<>?/\|~";
  return text.split('').map(c =>
    Math.random() > 0.8 ? chars[Math.floor(Math.random() * chars.length)] : c
  ).join('');
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
