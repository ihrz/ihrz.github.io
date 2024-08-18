// Nombre de flocons
const numFlakes = 100;
const snowflakes = [];

for (let i = 0; i < numFlakes; i++) {
  let snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  document.body.appendChild(snowflake);
  snowflakes.push({
    element: snowflake,
    speed: Math.random() * 3 + 2, // Vitesse de chute
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    xSpeed: (Math.random() - 0.5) * 2,
    baseXSpeed: (Math.random() - 0.5) * 2, // Ajout de cette ligne
  });
}

// Changement temporaire de direction de la neige avec la souris
document.addEventListener('mousemove', (event) => {
  let mouseX = event.clientX;
  snowflakes.forEach(flake => {
    let direction = (mouseX / window.innerWidth - 0.5) * 4;
    flake.xSpeed = flake.baseXSpeed + direction;
  });
});

// Animation de la neige
function animateSnow() {
  snowflakes.forEach(flake => {
    flake.y += flake.speed;
    flake.x += flake.xSpeed;

    if (flake.y > window.innerHeight) {
      flake.y = -10;
    }

    if (flake.x > window.innerWidth || flake.x < 0) {
      flake.x = (flake.x > window.innerWidth) ? 0 : window.innerWidth;
    }

    flake.element.style.transform = `translate(${flake.x}px, ${flake.y}px)`;
  });
  requestAnimationFrame(animateSnow);
}

animateSnow();
