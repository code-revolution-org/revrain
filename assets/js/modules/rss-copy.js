// RSS 订阅链接点击复制（渐进增强）：点击复制 feed 地址到剪贴板，不支持时保持默认跳转
// 无障碍：保留 href（无 JS/复制失败仍可跳转）、键盘可达（链接本身可聚焦）、aria-live 播报提示
function initRssCopy() {
  document.querySelectorAll('[data-copy-rss]').forEach((el) => {
    el.addEventListener('click', async (e) => {
      if (!navigator.clipboard || !navigator.clipboard.writeText) return;
      const url = el.dataset.copyRss;
      const msg = el.dataset.copyMsg || 'Copied';
      try {
        e.preventDefault();
        await navigator.clipboard.writeText(url);
        const original = el.textContent;
        el.textContent = msg;
        setTimeout(() => { el.textContent = original; }, 2000);
      } catch { /* 复制失败 → 不拦截，允许打开 feed */ }
    });
  });
}

// 与主题其他模块一致：等待 DOM 就绪后再绑定（script 在 <head> 同步加载）
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRssCopy);
} else {
  initRssCopy();
}
