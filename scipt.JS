// Typing animation for the title
const title = document.getElementById('title');
const fullText = "Hi! I'm Khushal! ";
const wavingHand = "👋";
let index = 0;

function typeTitle() {
  if (index < fullText.length) {
    title.textContent += fullText.charAt(index);
    index++;
    setTimeout(typeTitle, 120);
  } else {
    title.textContent += ' ' + wavingHand;
  }
}
typeTitle();

// Bounce animation retrigger on hover for all links
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.classList.add('bounce');
  });

  link.addEventListener('animationend', () => {
    link.classList.remove('bounce');
  });
});
