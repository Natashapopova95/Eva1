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



function init() {
  let map = new ymaps.Map('map', {
    center: [52.756979320669366, 41.47066227182767],
    zoom: 17
  });

  let placemark = new ymaps.Placemark([52.757487916613094, 41.4702087610175], {}, {
    iconLayout: 'default#image',
    iconImageHref: './images/logo.svg',
    iconImageSize: [50, 50],
    iconImageOfset: [0, 0]
  });


  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил

  map.geoObjects.add(placemark);
}

ymaps.ready(init);