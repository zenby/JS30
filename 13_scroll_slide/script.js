function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments,
      later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      },
      callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const images = document.querySelectorAll('.slide-in');

function checkSlide() {
  images.forEach(image => {
    const offsetTopOfBottomPage = window.scrollY + window.innerHeight,
      isHalfShown = image.offsetTop + image.height * 0.5 < offsetTopOfBottomPage,
      isNotScrolledPast = window.scrollY < image.offsetTop + image.height;

    isHalfShown && isNotScrolledPast
      ? image.classList.add('active')
      : image.classList.remove('active');
  })
}

window.addEventListener('scroll', debounce(checkSlide));