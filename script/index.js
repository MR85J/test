const test = document.createElement("div");
const body = document.querySelector("body");
let size = 500;
let type = false;


const animate = e => {

  if(type) {
    size++;
    if(size >= 500) type = false;
  }else {
    size--;
    if(size <= 100) type = true;
  }

  test.style.width = `${size}px`;
  test.style.height = `${size}px`;

  requestAnimationFrame(animate);

}

const init = e => {
  
  test.id = "test";
  test.style.background = "#aaa";
  test.style.width = `${size}px`;
  test.style.height = `${size}px`;
  
  body.append(test);

  animate();

}

init();