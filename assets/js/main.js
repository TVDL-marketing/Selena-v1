document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const primaryNav = document.querySelector('.primary-nav');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const forms = document.querySelectorAll('[data-fake-submit]');
  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const response = form.querySelector('.form-response');
      const nameInput = form.querySelector('input[name="nom"]');
      const firstName = nameInput ? nameInput.value.trim().split(' ')[0] : '';
      if (response) {
        response.textContent = firstName
          ? `Merci ${firstName}, votre demande a bien été prise en compte.`
          : 'Merci, votre demande a bien été prise en compte.';
      }
      form.reset();
    });
  });

  const tabButtons = document.querySelectorAll('[data-tab-target]');
  if (tabButtons.length > 0) {
    tabButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const target = button.getAttribute('data-tab-target');
        if (!target) return;

        tabButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        document.querySelectorAll('.tab-panel').forEach((panel) => {
          panel.classList.remove('active');
        });

        const panel = document.querySelector(target);
        if (panel) {
          panel.classList.add('active');
        }
      });
    });
  }
});
