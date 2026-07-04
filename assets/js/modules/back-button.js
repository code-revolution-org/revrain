// Back Button Module / 返回按钮模块
document.addEventListener('DOMContentLoaded', () => {
  const homepage = '/';
  const key = 'revrain_history';

  // 记录当前页面 / Record current page
  const current = window.location.pathname;
  const history = JSON.parse(sessionStorage.getItem(key) || '[]');

  // 如果当前页不是最后记录的页面，添加进去 / Add if not last entry
  if (history[history.length - 1] !== current) {
    history.push(current);
    sessionStorage.setItem(key, JSON.stringify(history));
  }

  document.querySelectorAll('.back-button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const list = JSON.parse(sessionStorage.getItem(key) || '[]');

      // 移除当前页，尝试回到上一页 / Remove current, go back
      list.pop();
      const prev = list[list.length - 1];

      if (prev && prev !== current) {
        sessionStorage.setItem(key, JSON.stringify(list));
        window.location.href = prev;
      } else {
        // 没有上一页，回到首页 / No history, go home
        sessionStorage.setItem(key, JSON.stringify([homepage]));
        window.location.href = homepage;
      }
    });
  });
});