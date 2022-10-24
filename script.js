const board = document.querySelector('#board');
const colors = ['#FFF8DC', '#FFEBCD', '#FFE4C4', '#DEB887', '#D2B48C', 'white', '#BC8F8F', '#F4A460', '#DAA520', '#B8860B', '#CD853F', '#D2691E']
const SQUARES_NUMBER = 1600;

for (let i = 0; i < SQUARES_NUMBER; i++) {
   const square = document.createElement('div');
   square.classList.add('square');

   square.addEventListener('mouseover', () => 
   setColor(square));

   square.addEventListener('mouseleave', () => 
   removeColor(square));
   
   board.append(square);
}

function setColor(element) {
   const color = getRandomColor();
   // const color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase(); 
   element.style.backgroundColor = color;
   element.style.boxShadow = `0 0 3px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.backgroundColor = '#1d1d1d';
   element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}