const cell = Array.from(document.querySelectorAll('.cell'));

setInterval(() => {
  const index = Math.floor(Math.random() * cell.length);
  cell.forEach((item) => {
    item.classList.remove('goblin');
  });
  if (cell[index].classList.contains('goblin')) {
    cell[index].classList.remove('goblin');
  } else {
    cell[index].classList.add('goblin');
  }
}, 1000);