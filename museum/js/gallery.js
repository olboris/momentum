const galleryInnerContainer = document.querySelector('.gallery__inner-container');

const galleryArr = [
    `assets/img/gallery/gallery1.jpeg`, 
    `assets/img/gallery/gallery2.jpeg`,
    `assets/img/gallery/gallery3.jpeg`,
    `assets/img/gallery/gallery4.jpeg`,
    `assets/img/gallery/gallery5.jpeg`,
    `assets/img/gallery/gallery6.jpeg`,
    `assets/img/gallery/gallery7.jpeg`,
    `assets/img/gallery/gallery8.jpeg`,
    `assets/img/gallery/gallery9.jpeg`,
    `assets/img/gallery/gallery10.jpeg`,
    `assets/img/gallery/gallery11.jpeg`,
    `assets/img/gallery/gallery12.jpeg`,
    `assets/img/gallery/gallery13.jpeg`,
    `assets/img/gallery/gallery14.jpeg`,
    `assets/img/gallery/gallery15.jpeg`,
]

function randomArr() {
    galleryArr.sort(() => Math.random() - 0.5);
    galleryArr.map(i => {
        const img = document.createElement('img');
        img.classList.add('gallery__image')
        img.src = i;
        img.alt = i.slice(19, 28);
        galleryInnerContainer.append(img);
    });
    console.log(galleryArr);
}

randomArr();