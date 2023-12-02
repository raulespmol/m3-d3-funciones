const ele = document.getElementById("ele1")

ele.addEventListener("click", function(e){
  pintar(e.target, 'yellow')
});

function pintar(element, color='green'){
  element.style.backgroundColor = color
}