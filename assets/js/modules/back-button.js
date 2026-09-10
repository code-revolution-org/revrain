// Go Back / 返回：有历史记录时返回，否则跟随 href 回退到首页
// Progressive enhancement: go back when history exists, else fall back to the href target
function initBackButton() {
  document.querySelectorAll('[data-back]').forEach((el) => {
    el.addEventListener('click', (e) => {
      if (window.history.length > 1) {
        e.preventDefault();
        window.history.back();
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBackButton);
} else {
  initBackButton();
}
