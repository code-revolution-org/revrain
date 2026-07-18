// Language Switcher Dropdown / 语言切换器下拉菜单
function initLanguageSwitcher() {
  const switcher = document.querySelector('.lang-switcher');
  const toggle = switcher?.querySelector('.lang-switcher__toggle');
  const list = switcher?.querySelector('.lang-switcher__list');

  if (!switcher || !toggle || !list) return;

  // Toggle dropdown / 切换下拉菜单
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = switcher.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
    // Move focus to first item on open / 打开时焦点移到第一项
    if (isOpen) {
      const firstItem = list.querySelector('a');
      if (firstItem) firstItem.focus();
    }
  });

  // Close when clicking outside / 点击外部关闭
  document.addEventListener('click', () => {
    switcher.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  });

  // Keyboard navigation / 键盘导航
  switcher.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      switcher.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
} else {
  initLanguageSwitcher();
}
