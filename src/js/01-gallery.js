import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryMarkUp = createCard(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkUp);

let gallery = new SimpleLightbox('div.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  animationSpeed: 250,
});

function createCard(items) {
  return items
    .map(({ preview, original, description }) => {
      return ` 
      <a 
         class="gallery__item" 
          href="${original}">
  <img 
      class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
   </a>`;
    })
    .join('');
}
console.log(galleryItems);
