// Language Switcher Dropdown / 语言切换器下拉菜单
function initLanguageSwitcher() {
  const switcher = document.querySelector('.lang-switcher');
  const toggle = switcher?.querySelector('.lang-switcher__toggle');
  const list = switcher?.querySelector('.lang-switcher__list');

  if (!switcher || !toggle || !list) return;

  // Toggle dropdown / 切换下拉菜单
  const openMenu = () => {
    switcher.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    // Move focus to first item on open / 打开时焦点移到第一项
    const firstItem = list.querySelector('a');
    if (firstItem) firstItem.focus();
  };

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (switcher.classList.contains('is-open')) {
      close();
    } else {
      openMenu();
    }
  });

  // Close when clicking outside / 点击外部关闭
  document.addEventListener('click', (e) => {
    if (!switcher.contains(e.target)) {
      close();
    }
  });

  const options = () => [...list.querySelectorAll('a')];

  const close = () => {
    switcher.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  // Keyboard navigation / 键盘导航
  switcher.addEventListener('keydown', (e) => {
    const open = switcher.classList.contains('is-open');
    switch (e.key) {
      case 'Escape':
        if (open) {
          close();
          toggle.focus();
        }
        break;
      case 'ArrowDown':
      case 'ArrowUp': {
        e.preventDefault();
        const items = options();
        if (items.length === 0) break;
        if (!open) {
          openMenu();
          break;
        }
        const idx = items.indexOf(document.activeElement);
        const delta = e.key === 'ArrowDown' ? 1 : -1;
        const next = (idx + delta + items.length) % items.length;
        items[next].focus();
        break;
      }
      case 'Home':
        e.preventDefault();
        if (open) options()[0]?.focus();
        break;
      case 'End':
        e.preventDefault();
        if (open) {
          const items = options();
          items[items.length - 1]?.focus();
        }
        break;
      case 'Tab':
        if (open) close();
        break;
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
} else {
  initLanguageSwitcher();
}
