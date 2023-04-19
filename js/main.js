AOS.init();

document.querySelectorAll('a.menu__link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault()


    const  href = this.getAttribute('href').substring(1)

    const scrollTarget = document.getElementById(href)

    const topOffset = 150

    const elementPosition = scrollTarget.getBoundingClientRect().top

    const offsetPosition = elementPosition - topOffset 

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    })
  })
});



$(document).ready(function () {
  $('.menu-burger__header').click(function () {
    $('.menu-burger__header, .menu').toggleClass('open-menu');
  });
});