document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("title");
    const fullText = "Hi! I'm Khushal";
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
  
    // Add bounce animation to all links on hover
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.classList.add('bounce');
      });
  
      link.addEventListener('animationend', () => {
        link.classList.remove('bounce');
      });
    });
  });
  