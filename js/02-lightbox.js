import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

const createMarkup = (ref) => {
  const images = galleryItems.map(({ preview, original, description }) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
           class="gallery__image"
           src="${preview}"
           alt="${description}"
          />
        </a>
      </li>`)
      .join('');

  ref.insertAdjacentHTML("afterbegin", images)
}
createMarkup(galleryRef);

galleryRef.addEventListener('click', (e) => e.preventDefault());

new SimpleLightbox('.gallery__link', {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
