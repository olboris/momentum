const topButton = document.querySelector('.top-button');

function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;
    console.log('kk');

    if (scrolled > coords) {
      topButton.classList.add('top-button_active');
    }
    if (scrolled < coords) {
        topButton.classList.remove('top-button_active');
    }
  };

function scrollToTop() {
  window.scrollTo(pageYOffset, 0);
};

document.addEventListener('scroll', trackScroll);
topButton.addEventListener('click', scrollToTop);