const body = document.body;
const buttons = document.querySelectorAll('.header__theme-menu-button');
const STORAGE_KEY = 'theme';

const saved = localStorage.getItem(STORAGE_KEY);
if (saved === 'light' || saved === 'dark') {
  body.classList.add(`theme-${saved}`);
  buttons.forEach((b) => {
    const isTarget = b.classList.contains(`header__theme-menu-button_type_${saved}`);
    b.classList.toggle('header__theme-menu-button_active', isTarget);
    b.disabled = isTarget;
  });
}

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    buttons.forEach((b) => {
      b.classList.remove('header__theme-menu-button_active');
      b.disabled = false;
    });

    btn.classList.add('header__theme-menu-button_active');
    btn.disabled = true;

    body.classList.remove('theme-light', 'theme-dark');

    if (btn.classList.contains('header__theme-menu-button_type_light')) {
      body.classList.add('theme-light');
      localStorage.setItem(STORAGE_KEY, 'light');
    } else if (btn.classList.contains('header__theme-menu-button_type_dark')) {
      body.classList.add('theme-dark');
      localStorage.setItem(STORAGE_KEY, 'dark');
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  });
});