const container = document.querySelector('main')
const keyDiv = document.getElementById('key');

//Teclas ASD
let color = '#FFF';

document.addEventListener('keydown', e => {
  if(e.key === 'a' || e.key === 'A'){
    color = '#FCC'
  } else if (e.key === 's' || e.key === 'S'){
    color = '#F80'
  } else if (e.key === 'd' || e.key === 'D'){
    color = '#5EE'
  }
  keyDiv.style.backgroundColor = color
})

//Teclas QWE
//Crear div
const keyDiv2 = document.createElement('div')
keyDiv2.id = 'key2';
let keys = ['q', 'w', 'e', 'Q', 'W', 'E']

document.addEventListener('keydown', e => {
  if(keys.includes(e.key) && container.childElementCount == 1){
    container.appendChild(keyDiv2);
  }
})

//Cambiar color
let color2 = '#FFF';

document.addEventListener('keydown', e => {
  if(e.key === 'q' || e.key === 'Q'){
    color2 = '#909'
  } else if (e.key === 'w' || e.key === 'W'){
    color2 = '#888'
  } else if (e.key === 'e' || e.key === 'E'){
    color2 = '#530'
  }
  keyDiv2.style.backgroundColor = color2
})




