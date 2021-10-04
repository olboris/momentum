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
];

function randomArr() {
    galleryArr.sort(() => Math.random() - 0.5);
    galleryArr.map(i => {
        const img = document.createElement('img');
        img.classList.add('gallery__image');
        img.src = i;
        img.alt = i.slice(19, 28);
        galleryInnerContainer.append(img);
    });
}

  randomArr(galleryInnerContainer, galleryArr)

console.log("1. Вёрстка соответствует макету. Ширина экрана 1024px - 36 баллов (форма не соответсвует");
console.log("2. Вёрстка соответствует макету. Ширина экрана 768px - 36 баллов (форма не соответсвует");
console.log("3. Вёрстка соответствует макету. Ширина экрана 420px - 36 баллов (форма не соответсвует");
console.log("4.Совмещается адаптивная и респонсивная (резиновая) вёрстка +14");
console.log("5. На ширине экрана 1024рх и меньше реализовано адаптивное меню +10 (меню не закрывается кликом на overlay");
console.log("Итого: 138/160")