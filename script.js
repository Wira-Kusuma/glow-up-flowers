// Add extra sparkle: move your mouse anywhere to spawn a new glowing flower!
// document.body.addEventListener('mousemove', spawnFlower);

// Touch in screen
document.body.addEventListener('touchmove', spawnFlower);

function spawnFlower(e) {
  const flower = document.createElement('div');
  flower.className = 'flower';
  flower.style.position = 'absolute';

  // position
  let x, y;
  if (e.type === 'touchmove') {
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
  } else {
    x = e.clientX;
    y = e.clientY;
  }

  flower.style.left = (x - 50) + 'px';
  flower.style.top = (y - 50) + 'px';

  document.body.appendChild(flower);

  // remove flower after 3 sec
  setTimeout(() => {
    flower.remove();
  }, 3000);
}


const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');

    function updateGradient() {
      document.body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    }

    color1.addEventListener('input', updateGradient);
    color2.addEventListener('input', updateGradient);
    color1.addEventListener('change', updateGradient);
    color2.addEventListener('change', updateGradient);

    // Set gradien awal saat halaman dimuat
    updateGradient();