// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const container = document.querySelector('.gallery');
container.style.listStyleType = "none";

function markupGallery(arr) {
    return arr.map(({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('');
}

container.insertAdjacentHTML('beforeend', markupGallery(galleryItems));

new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    capttionDelay: 250,
});