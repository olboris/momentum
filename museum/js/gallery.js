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
}

randomArr();

console.log("1. Вёрстка валидная +10");
console.log("2. Вёрстка семантическая +24:");
console.log("- <header>, <main>, <footer> +2");
console.log("- семь элементов <section> +2");
console.log("- только один заголовок <h1> +2");
console.log("- семь заголовков <h2> +2");
console.log("- шесть заголовков <h3> +2");
console.log("- два элемента <nav> +2");
console.log("- три списка ul > li > a +2");
console.log("- тринадцать кнопок button +2");
console.log("- три тега input type=radio +2");
console.log("- два тега input type=number +2");
console.log("- два тега input type=range +2");
console.log("- для всех элементов <img> указан обязательный атрибут alt +2");
console.log("3. Вёрстка соответствует макету +45");
console.log("4. Форма покупки билетов +12:");
console.log("- форма плавно выдвигается слева при открытии и плавно возвращается назад при закрытии. В открытом состоянии под формой есть полупрозрачный overlay, который занимает весь экран. Форма и overlay прокручиваются вместе со страницей +2:");
console.log("- форма открывается при клике по кнопке Buy Now в секции Tickets и закрывается кликом по иконке с крестиком в верхнем правом углу или кликом по overlay +2");
console.log("- при вёрстке формы используются следующие элементы: form, input type=datу, input type=time, input type=text, input type=email, input type=tel, input type=number, select +8");
console.log("- вёрстка формы соответствует макету 0");
console.log("5. Требования к css + 18:");
console.log("- добавлен favicon +2");
console.log("- для построения сетки используются флексы или гриды +2");
console.log("- при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2");
console.log("- фоновый цвет каждого блока и секции тянется на всю ширину страницы +2");
console.log("- иконки добавлены в формате .svg +2");
console.log("- расстояние между буквами, там, где это требуется по макету, регулируется css-свойством letter-spacing +2");
console.log("- переключаются радиокнопки в блоке Tickets, одновременно может быть выбрана только одна кнопка +2");
console.log("- в блоке Contacts правильно указанны ссылки на почту mailto и на телефон tel +2");
console.log("- в футере добавлены ссылки на соцсети. Круглая граница вокруг иконок соцсетей выполнена при помощи css +2");
console.log("6.Интерактивность, реализуемая через css +23:");
console.log("- плавная прокрутка по якорям +5");
console.log("- параллакс +5");
console.log("- при кликам по кнопке Discover the Louvre и карточкам секции Visiting открываются полноэкранные панорамы Google Street View встроенные в страницы вашего сайта при помощи iframe +5");
console.log("- изменение стиля интерактивных элементов при наведении и клике +8 (не реализована интерактивность при наведении на ссылки соцсетей");
console.log("7. Интерактивность, реализуемая через js +14");
console.log("- можно передвигать ползунки громкости и прогресс-бар видео, при этом цвет шкалы до и после ползунка отличается и соответствует макету +2");
console.log("- кликами по кнопкам + и - в секции Tiskets можно менять количество билетов Basic и Senior от 0 до 20 +2");
console.log("- кнопке Book в форме покупки билетов добавлен ripple-эффект Демо 0");
console.log("- при перезагрузке (обновлении) страницы картины в блоке Galery отображаются в рандомном порядке + 10");
console.log("Итого: 146/160")