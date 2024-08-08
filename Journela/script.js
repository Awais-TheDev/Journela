
const containers = document.querySelectorAll('.card');

let currentContainer = 0;

const animateContainers = () => {
  containers[currentContainer].style.transform = translateY(-${window.pageYOffset}px);
  if (currentContainer < containers.length - 1) {
    currentContainer++;
  } else {
    currentContainer = 0;
  }
};

const scrollHandler = () => {
  requestAnimationFrame(animateContainers);
};

window.addEventListener('scroll', scrollHandler);