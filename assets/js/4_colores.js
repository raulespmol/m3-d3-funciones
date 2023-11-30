const A = document.getElementById('A');
const B = document.getElementById('B');
const C = document.getElementById('C');
const D = document.getElementById('D');

A.addEventListener('click', e => {paintBlack(e.target)})

B.addEventListener('click', e => {paintBlack(e.target)})

C.addEventListener('click', e => {paintBlack(e.target)})

D.addEventListener('click', e => {paintBlack(e.target)})

function paintBlack(element){
  element.style.backgroundColor = '#000'
}