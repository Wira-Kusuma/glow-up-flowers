// Add extra sparkle: move your mouse anywhere to spawn a new glowing flower!
document.body.addEventListener('mousemove', spawnFlower);

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


