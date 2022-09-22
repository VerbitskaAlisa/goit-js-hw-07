import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const imagesMarkup = createImgGallery(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function createImgGallery (image) {
    return image.map(({preview, original, description}) => {
        return ` <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
    </div>`
}).join("");
}

galleryContainer.addEventListener("click", onGalleryContainerClick);


function onGalleryContainerClick (evt) {
    evt.preventDefault();
    const isGalleryLink = evt.target.classList.contains("gallery__image");
    if(!isGalleryLink) {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`,{
     onShow: (instance) => {
        document. addEventListener ("keydown", function (evt) {
        if (evt.key === "Escape") {
          return instance.close();
   }
});
},
     onClose: (instance) => {
        document.addEventListener("keydown", function (evt) {
        if (evt.key === "Escape") {
        return instance.close();

    }
});
     },
    }
    );
    instance.show();
}


