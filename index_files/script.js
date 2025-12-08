
// 1. Polaroid Rotation Effect (Keeps the cool messy look)
let polaroids = document.querySelectorAll('.polaroid');

polaroids.forEach(item => {
  // Rotates images randomly between -6 and 6 degrees
  const randomRotation = Math.floor(Math.random() * (6 - -6 + 1) + -6);
  item.style.transform = `rotate(${randomRotation}deg)`;
});

// 2. 3D Hover Effect for the Profile Card
function setupSpiderTag3D() {
  const card = document.querySelector('.spider-tag');
  const container = document.querySelector('.container');

  if (card && container) {
    container.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      const rotateX = (mouseY / (rect.height / 2)) * -10;
      const rotateY = (mouseX / (rect.width / 2)) * 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
      card.style.boxShadow = `${-mouseX/20}px ${-mouseY/20}px 30px -10px rgba(0,0,0,0.3)`;
    });

    container.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
      card.style.boxShadow = '0 1px 15px -7.5px #000000';
    });
  }
}

// Initialize the 3D effect
setupSpiderTag3D();