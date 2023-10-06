
document.addEventListener("DOMContentLoaded", function () {
  var dropdownItems = document.querySelectorAll('.dropdown-content a');
  dropdownItems.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      var flagName = this.getAttribute('data-flag');
      var countryName = this.getAttribute('data-country');
      changeFlag(flagName, countryName);
    });
  });
});
function changeFlag(flagName, countryName) {
  var flag = document.getElementById('flag');
  flag.src = 'assets/img/' + flagName + '.png';

  var countryElement = document.getElementById('selected-country');
  countryElement.textContent = countryName;
}

document.addEventListener('DOMContentLoaded', function () {
  var carouselItems = document.querySelectorAll('.carousel-inner .item');
  var carouselControls = document.querySelectorAll('.carousel-control');

  for (var i = 0; i < carouselControls.length; i++) {
    carouselControls[i].addEventListener('click', function () {
      setTimeout(function () {
        updateCarouselItemsOpacity();
      }, 300);
    });
  }

  function updateCarouselItemsOpacity() {
    var activeItem = document.querySelector('.carousel-inner .item.active');
    var previousItem = activeItem.previousElementSibling;
    var nextItem = activeItem.nextElementSibling;

    for (var i = 0; i < carouselItems.length; i++) {
      carouselItems[i].style.opacity = '0.5';
    }

    activeItem.style.opacity = '1';

    if (previousItem) {
      previousItem.style.opacity = '0.3';
    }

    if (nextItem) {
      nextItem.style.opacity = '0.3';
    }
  }
});



function displayData(arr) {
  arr.forEach(function (item) {
    const cardsArea = document.querySelector('.cards-area');
    const div1 = document.createElement('div');
    div1.classList = 'col-md-3 col-sm-6';
    const div2 = document.createElement('div');
    div2.classList = 'card';
    const img = document.createElement('img');
    img.src = item.images[0];
    img.classList = 'card-img-top';
    const div3 = document.createElement('div');
    div3.classList = 'card-body';
    const h5 = document.createElement('h5');
    h5.classList = 'card-title';
    h5.innerHTML = item.title;
    const div4 = document.createElement('div');
    div4.classList = 'the-stars';
    const i = document.createElement('i');
    i.classList = 'fa-solid fa-star star';
    const p = document.createElement('p');
    p.classList = 'card-text';
    p.innerHTML = item.description;


    div3.append(div4);
    div3.append(h5);
    div3.append(p);

    div2.append(img);
    div2.append(div3);

    div1.append(div2);

    cardsArea.append(div1);
  });
}

function displaySlider(items) {
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  swiperWrapper.innerHTML = '';
  items.forEach(function (item) {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');

    const div2 = document.createElement('div');
    div2.classList = 'card';
    const img = document.createElement('img');
    img.src = item.images[0];
    img.classList = 'card-img-top';
    const div3 = document.createElement('div');
    div3.classList = 'card-body';
    const h5 = document.createElement('h5');
    h5.classList = 'card-title';
    h5.innerHTML = item.title;
    const div4 = document.createElement('div');
    div4.classList = 'the-stars';
    for (let index = 0; index < 4; index++) {
      const star = document.createElement('i');
      star.classList = 'fa-solid fa-star star';
      div4.appendChild(star);
    }
    const p = document.createElement('p');
    p.classList = 'card-text';
    p.innerHTML = item.description;


    div3.append(div4);
    div3.append(h5);
    div3.append(p);

    div2.append(img);
    div2.append(div3);

    slide.append(div2);

    swiperWrapper.appendChild(slide);
  });

  const swiperContainer = document.querySelector('.swiper-container');
  new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 2,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 4,
      },
      1440: {
        slidesPerView: 4,
      },
    },
  });
}

fetch('https://dummyjson.com/products')
  .then(function (result) {
    return result.json();
  })
  .then(function (result) {
    const firstSixItems = result.products.slice(0, 6);
    displayData(firstSixItems);
    displaySlider(firstSixItems);
    console.log(firstSixItems);
  });











const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    header.classList.toggle('active');
    const accordionContent = header.nextElementSibling;
    const accordionIcon = header.querySelector('.accordion-icon');
    if (accordionContent.style.display === 'block') {
      accordionContent.style.display = 'none';
    } else {
      accordionContent.style.display = 'block';
    }
    accordionIcon.textContent = (accordionIcon.textContent === '+') ? '-' : '+';
  });
});






