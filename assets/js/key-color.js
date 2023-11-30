const keyDiv = document.getElementById('key');
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



