// Mobile Menu Toggle / 移动端菜单切换
function initMobileMenu() {
  const toggle = document.querySelector('.header__menu-toggle');
  const nav = document.querySelector('.header__nav');

  if (!toggle || !nav) return;

  const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';

  const openMenu = () => {
    toggle.setAttribute('aria-expanded', 'true');
    toggle.classList.add('is-active');
    nav.classList.add('is-open');
    // 打开时把焦点移到第一个链接，方便键盘用户 / Move focus to first link when opened
    const firstLink = nav.querySelector('a');
    if (firstLink) firstLink.focus();
  };

  const closeMenu = (returnFocus = true) => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.classList.remove('is-active');
    nav.classList.remove('is-open');
    if (returnFocus) toggle.focus();
  };

  toggle.addEventListener('click', () => {
    if (isOpen()) {
      closeMenu(false);
    } else {
      openMenu();
    }
  });

  // 打开时按 Esc 关闭并回到按钮 / Close on Escape while open
  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) closeMenu();
  });

  nav.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) closeMenu();
  });

  // Close menu when clicking a link / 点击链接时关闭菜单
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.classList.remove('is-active');
      nav.classList.remove('is-open');
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileMenu);
} else {
  initMobileMenu();
}
