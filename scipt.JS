document.addEventListener("DOMContentLoaded", function() {
    const text = "Hi! I'm Khushal! ";
    const wavingHand = "👋";
    const titleElem = document.getElementById("main-title");
    let index = 0;
  
    function type() {
      if (index < text.length) {
        titleElem.textContent += text.charAt(index);
        index++;
        setTimeout(type, 120);
      } else {
        titleElem.textContent += wavingHand; // Add waving hand after typing
      }
    }
  
    type();
  });
  