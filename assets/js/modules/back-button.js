// Back Button Module / 返回按钮模块
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.back-button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      history.back();
    });
  });
});
