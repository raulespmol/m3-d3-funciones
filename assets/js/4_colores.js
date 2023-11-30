document.addEventListener('click', e => {
  const element = e.target;
  if(element.className === 'box'){
    element.style.backgroundColor = '#000';
  }
})