const holes = document.querySelectorAll('.hole');
const pointsSpan = document.querySelector('.points');

let startGame = false;
let molePos = undefined;
let points = 0;

window.onkeypress = function (event) {
  if (!startGame && event.keyCode == 32) {
    startGame = true;
    // console.log('start');

    holes.forEach(hole => {
      hole.addEventListener('click', () => {
        if (hole.classList.contains('mole')) {
          points += 1;
          pointsSpan.innerHTML = points;
          hole.classList.remove('mole');
        }
      });
    });

    setInterval(spawnMole, 500);
  }
}

function spawnMole() {
  holes.forEach(hole => {
    hole.classList.remove('mole');
  });

  const spawnPos = holes[Math.floor(Math.random() * holes.length)];
  molePos = spawnPos;
  spawnPos.classList.add('mole');
}
