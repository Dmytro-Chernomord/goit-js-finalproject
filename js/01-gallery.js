import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");

const createMarkup = (ref) => {
  const images = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
      />
    </a>
  </li>`}).join('')

  ref.insertAdjacentHTML("afterbegin", images);
}

createMarkup(galleryRef);

let lightBoxInstance;

const handleEscape = ({key} = {}) => key === 'Escape' && lightBoxInstance?.close();

const handleOnClick = (e) => {
  e.preventDefault()

  lightBoxInstance = basicLightbox.create(`<img alt="image" src="${e.target.dataset.source}" width="auto" height="auto">`, {
    onShow: () => { document.addEventListener('keydown', handleEscape) },
    onClose: () => { document.removeEventListener('keydown', handleEscape) },
  })
  lightBoxInstance.show();
}

galleryRef.addEventListener('click', handleOnClick);


