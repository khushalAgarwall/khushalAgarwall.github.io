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

  // Bounce animation for links
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.classList.add('bounce');
    });

    link.addEventListener('animationend', () => {
      link.classList.remove('bounce');
    });
  });

  // Modal logic
  const cards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  const modalText = document.getElementById('modalDescription');
  const modalImages = document.getElementById('modalImages');
  const closeBtn = document.getElementById('closeModal');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-title');
      const description = card.getAttribute('data-description');
      const images = JSON.parse(card.getAttribute('data-images') || '[]');

      modalTitle.textContent = title;
      modalText.innerHTML = description; // allows <em> or formatting

      // Clear previous images
      modalImages.innerHTML = '';

      // Add new images if any
      if (images.length > 0) {
        images.forEach(img => {
          const imageElement = document.createElement('img');
          imageElement.src = img;
          imageElement.alt = title + " screenshot";
          modalImages.appendChild(imageElement);
        });
      }

      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
});
