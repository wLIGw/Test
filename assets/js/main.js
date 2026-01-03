

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
  const footer = document.querySelector('footer');

  if (!tg || !footer) return;

  const baseBottom = 30; 

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowH = window.innerHeight;

    
    if (scrollY > 500) {
      tg.classList.add('active');
    } else {
      tg.classList.remove('active');
    }

    
    const footerTop = footer.getBoundingClientRect().top + scrollY;

    
    const overlap = scrollY + windowH - footerTop;

    if (overlap > 0) {
      tg.style.bottom = baseBottom + overlap + 'px';
    } else {
      tg.style.bottom = baseBottom + 'px';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const tgFloat = document.getElementById('tgFloat');
  const tgContacts = document.querySelector('.contacts__tg-float');
  const contacts = document.querySelector('.contacts__right');

  if (!tgFloat || !tgContacts || !contacts) return;

  function handleTG() {
    // только мобилка
    if (window.innerWidth > 770) {
      tgFloat.classList.remove('tg-hidden');
      tgContacts.classList.remove('active');
      return;
    }

    const contactsTop = contacts.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (contactsTop < windowHeight - 330) {
      // контакты видны
      tgFloat.classList.add('tg-hidden');
      tgContacts.classList.add('active');
    } else {
      // контактов нет
      tgFloat.classList.remove('tg-hidden');
      tgContacts.classList.remove('active');
    }
  }

  window.addEventListener('scroll', handleTG);
  window.addEventListener('resize', handleTG);
  handleTG();
});

