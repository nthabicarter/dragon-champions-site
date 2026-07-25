document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

function createGalaxyBackground() {
  if (document.querySelector('.galaxy-layer')) return;

  const starLayer = document.createElement('div');
  starLayer.className = 'galaxy-layer';
  starLayer.setAttribute('aria-hidden', 'true');

  const nebulaLayer = document.createElement('div');
  nebulaLayer.className = 'galaxy-nebula';
  nebulaLayer.setAttribute('aria-hidden', 'true');

  const starCount = window.innerWidth < 600 ? 70 : 135;

  for (let i = 0; i < starCount; i += 1) {
    const star = document.createElement('span');
    const size = Math.random() * 2.4 + 0.7;
    const colorRoll = Math.random();

    star.className = 'star';
    if (colorRoll > 0.9) star.classList.add('star-cyan');
    else if (colorRoll > 0.82) star.classList.add('star-gold');

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty('--twinkle-duration', `${2.2 + Math.random() * 4.5}s`);
    star.style.setProperty('--twinkle-delay', `${Math.random() * -6}s`);
    starLayer.appendChild(star);
  }

  document.body.prepend(nebulaLayer);
  document.body.prepend(starLayer);

  const shootingStarCount = window.innerWidth < 600 ? 1 : 2;
  for (let i = 0; i < shootingStarCount; i += 1) {
    const shootingStar = document.createElement('span');
    shootingStar.className = 'shooting-star';
    shootingStar.setAttribute('aria-hidden', 'true');
    shootingStar.style.setProperty('--shooting-top', `${8 + i * 30}%`);
    shootingStar.style.setProperty('--shooting-delay', `${2 + i * 5}s`);
    shootingStar.style.setProperty('--shooting-duration', `${9 + i * 3}s`);
    document.body.prepend(shootingStar);
  }
}

createGalaxyBackground();
