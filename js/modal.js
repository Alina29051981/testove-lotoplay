(() => {
  // 🔹 Модальне меню
  const menuBtnOpen = document.querySelector('[data-menu-open]');
  const menuBtnClose = document.querySelector('[data-menu-close]');
  const menu = document.querySelector('[data-menu]');
  if (menuBtnOpen && menuBtnClose && menu) {
    menuBtnOpen.addEventListener('click', () =>
      menu.classList.toggle('is-open')
    );
    menuBtnClose.addEventListener('click', () =>
      menu.classList.toggle('is-open')
    );
  }

  // 🔹 Модальне вікно форми замовлення квитків
  const ticketBtns = document.querySelectorAll('[data-modal-open]');
  const ticketModal = document.querySelector('[data-modal]');
  const ticketClose = document.querySelector('[data-modal-close]');
  if (ticketModal && ticketClose && ticketBtns.length) {
    ticketBtns.forEach(btn =>
      btn.addEventListener('click', () => ticketModal.classList.add('is-open'))
    );
    ticketClose.addEventListener('click', () =>
      ticketModal.classList.remove('is-open')
    );
  }

  // 🔹 Контактна форма
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(contactForm);

      if (
        !formData.get('name') ||
        !formData.get('email') ||
        !formData.get('message')
      ) {
        alert('Будь ласка, заповніть всі поля.');
        return;
      }

      // Імітуємо відправку
      setTimeout(() => {
        alert('Дякуємо! Ваше повідомлення відправлено.');
        contactForm.reset();
      }, 300);
    });
  }

  // 🔹 Форма замовлення квитків
  const ticketForm = document.querySelector('.ticket-form');
  if (ticketForm) {
    ticketForm.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(ticketForm);

      if (
        !formData.get('event') ||
        !formData.get('ticket-type') ||
        !formData.get('quantity') ||
        !formData.get('user-name') ||
        !formData.get('user-phone') ||
        !formData.get('user-email') ||
        !formData.get('payment')
      ) {
        alert('Будь ласка, заповніть усі обов’язкові поля.');
        return;
      }

      // Імітуємо відправку
      setTimeout(() => {
        alert('Дякуємо! Ваше замовлення прийнято.');
        ticketForm.reset();
        ticketModal.classList.remove('is-open');
      }, 300);
    });
  }
})();
