const burger = document.querySelector('.burger');
const menu = document.querySelector('.header-menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('open');
});


const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 15,
    navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
    },
    lazy: {
    loadPrevNext: true,
    },
        breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 2,
        },
        920: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    }
});

document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');

    // закрывать остальные
    document.querySelectorAll('.faq-item').forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
        i.querySelector('.faq-answer').style.maxHeight = 0;
      }
    });

    item.classList.toggle('active');

    if (item.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = 0;
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const tg = document.getElementById('tgFloat');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            tg.classList.add('active');
        } else {
            tg.classList.remove('active');
        }
    });
});
