import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const imagesMarkup = createImgGallery(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

galleryContainer.addEventListener("click", onImageClick)

function createImgGallery (image) {
    return image.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
    `
}).join("");
}


function onImageClick(e){
    e.target.alt;
}

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionType: "attr",
    captionDelay: 250,
});
lightbox .on("show.simpleLightbox");