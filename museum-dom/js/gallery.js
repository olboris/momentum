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

randomArr(galleryInnerContainer, galleryArr);

function debounce(func, wait = 20, immediate = true) {
    
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function(){
            timeout = null;
            if (!immediate) func.apply(context, args);
        }
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
        } 
};

const sliderImages = document.querySelectorAll('.gallery__image');


function checksSlide(e) {
    sliderImages.forEach(sliderImage => {
        function getCoords(elem) {
            var box = elem.getBoundingClientRect();
            return top = box.top + pageYOffset;
          }
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        const imageBottom = getCoords(sliderImage) + sliderImage.height;
        const isHalfShown = slideInAt > getCoords(sliderImage);
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('gallery__image_active');
        } else {
            sliderImage.classList.remove('gallery__image_active');
        }
    });
};

window.addEventListener('scroll', debounce(checksSlide));


console.log("1. Вёрстка соответствует макету. Ширина экрана 1024px - 36 баллов (форма не соответсвует)");
console.log("2. Вёрстка соответствует макету. Ширина экрана 768px - 36 баллов (форма не соответсвует)");
console.log("3. Вёрстка соответствует макету. Ширина экрана 420px - 36 баллов (форма не соответсвует)");
console.log("4. Совмещается адаптивная и респонсивная (резиновая) вёрстка +14");
console.log("5. На ширине экрана 1024рх и меньше реализовано адаптивное меню +10 (меню не закрывается кликом на overlay)");
console.log("6. Оптимизация скорости загрузки страницы +4 (82 (orange): Needs Improvement)");
console.log("Итого: 142/160")