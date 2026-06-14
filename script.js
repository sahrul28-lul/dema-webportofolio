// Inisialisasi Animasi AOS
AOS.init({
  duration: 1000,
  once: true,
});

// Logika Animasi Mengetik (Typing Effect)
const textElement = document.getElementById("typing-text");
const phrases = ["Kolaboratif.", "Progresif.", "Solutif.", "Berintegritas."];
let phraseIndex = 0;
let characterIndex = 0;

function type() {
  if (characterIndex < phrases[phraseIndex].length) {
    textElement.textContent += phrases[phraseIndex].charAt(characterIndex);
    characterIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (characterIndex > 0) {
    textElement.textContent = phrases[phraseIndex].substring(
      0,
      characterIndex - 1,
    );
    characterIndex--;
    setTimeout(erase, 50);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 300);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 500);
});
