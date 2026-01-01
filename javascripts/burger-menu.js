// Функционал бургер-меню
export function initBurgerMenu() {
  const burgerMenu = document.querySelector('.burger-menu');
  const headerList = document.querySelector('.header__list');
  
  if (!burgerMenu || !headerList) {
    return;
  }

  // Переключение меню
  burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('active');
    headerList.classList.toggle('active');
    
    // Блокировка прокрутки body при открытом меню
    if (headerList.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Закрытие меню при клике на ссылку
  const headerLinks = document.querySelectorAll('.header__link');
  headerLinks.forEach(link => {
    link.addEventListener('click', function() {
      burgerMenu.classList.remove('active');
      headerList.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Закрытие меню при клике вне его
  document.addEventListener('click', function(event) {
    const isClickInsideMenu = headerList.contains(event.target);
    const isClickOnBurger = burgerMenu.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnBurger && headerList.classList.contains('active')) {
      burgerMenu.classList.remove('active');
      headerList.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Закрытие меню при нажатии Escape
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && headerList.classList.contains('active')) {
      burgerMenu.classList.remove('active');
      headerList.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}
