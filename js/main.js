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


function readMore() {
  let dots = document.getElementById("dots");
  let more = document.getElementById("more");
  let btn = document.getElementById("btn");

  if(dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "Подробнее"
    more.style.display = "none";
  }  else {
    dots.style.display ="none";
    btn.innerHTML = "Скрыть"
    more.style.display = "inline";
  }
}