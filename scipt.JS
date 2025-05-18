document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("title");
    const Text = "Hi! I'm Khushal 👋";
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
  
    // Add bounce animation to all links
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.classList.add('bounce');
      });
  
      link.addEventListener('animationend', () => {
        link.classList.remove('bounce');
      });
    });
  });
  