// const images = document.querySelectorAll('.fullscreen-image');

// images.forEach(image => {
//   image.addEventListener('click', () => {
//     image.classList.toggle('fullscreen');
//     if (image.classList.contains('fullscreen')) {
//     //   document.documentElement.requestFullscreen();
//     } else {
//     //   document.exitFullscreen();
//     }
//   });
// });

const images = document.querySelectorAll('.fullscreen-image');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const closeBtn = document.querySelector('.close');

let currentIndex = 0;

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentIndex = index;
    showModal(image.src);
  });
});

prevBtn.addEventListener('click', () => {
  navigate(-1);
});

nextBtn.addEventListener('click', () => {
  navigate(1);
});

closeBtn.addEventListener('click', () => {
  closeModal();
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

function showModal(imageUrl) {
  modalContent.src = imageUrl;
  modal.style.display = 'flex';
  updateArrows();
}

function closeModal() {
  modal.style.display = 'none';
}

function navigate(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showModal(images[currentIndex].src);
}

function updateArrows() {
    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = currentIndex === images.length - 1 ? 'none' : 'block';
  }