function toggleMenu() {
    const navList = document.querySelector(".navbar ul");
    navList.classList.toggle("open");
}

function handleResize() {
    const menu = document.querySelector(".navbar ul");
    if (window.innerWidth > 1000) {
      menu.classList.remove("open");
    } else {
      menu.style.display= " ";
    }
}
  
handleResize();
window.addEventListener("resize", handleResize);

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.img-modal');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', function (event) {
    const clickedImage = event.target.closest('img');
    if (!clickedImage) return;

    const thumbSrc = clickedImage.getAttribute('src');
    const altText = clickedImage.getAttribute('alt');

    const fullSrc = thumbSrc;

    modalImage.setAttribute('src', fullSrc);
    modalImage.setAttribute('alt', altText);

    modal.showModal();
});

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});