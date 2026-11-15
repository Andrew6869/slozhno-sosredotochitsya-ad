const body = document.body;
const buttons = document.querySelectorAll('.header__theme-menu-button');
const STORAGE_KEY = 'theme';

// Восстановление темы при загрузке
const savedTheme = localStorage.getItem(STORAGE_KEY);
if (savedTheme === 'light' || savedTheme === 'dark') {
  body.classList.add(`theme-${savedTheme}`);
  buttons.forEach((btn) => {
    const isTarget = btn.classList.contains(`header__theme-menu-button_type_${savedTheme}`);
    btn.classList.toggle('header__theme-menu-button_active', isTarget);
    btn.disabled = isTarget;
  });
}

// Переключение
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Сбрасываем активные классы со всех
    buttons.forEach((b) => {
      b.classList.remove('header__theme-menu-button_active');
      b.disabled = false;
    });

    // Устанавливаем активный на текущую
    btn.classList.add('header__theme-menu-button_active');
    btn.disabled = true;

    // Меняем тему
    body.classList.remove('theme-light', 'theme-dark');

    if (btn.classList.contains('header__theme-menu-button_type_light')) {
      body.classList.add('theme-light');
      localStorage.setItem(STORAGE_KEY, 'light');
    } else if (btn.classList.contains('header__theme-menu-button_type_dark')) {
      body.classList.add('theme-dark');
      localStorage.setItem(STORAGE_KEY, 'dark');
    } else {
      localStorage.removeItem(STORAGE_KEY); // Авто
    }
  });
});