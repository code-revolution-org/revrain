// TOC Interaction / 目录交互
// Handle scroll, highlight, and collapse for Hugo-generated TOC / 处理目录的跳转、高亮和折叠

function initTOC() {
  const tocNav = document.getElementById('toc-nav');
  const article = document.querySelector('.glass-card');
  if (!tocNav || !article) return;

  // Remove empty li placeholders from Hugo / 移除 Hugo 生成的空占位 li
  // Hoist child ul up before removing / 删除前先将子 ul 提升到父级
  let changed = true;
  while (changed) {
    changed = false;
    tocNav.querySelectorAll('li').forEach((li) => {
      if (li.querySelector(':scope > a')) return;
      const childUl = li.querySelector(':scope > ul');
      if (childUl && li.parentElement) {
        li.parentElement.insertBefore(childUl, li);
      }
      li.remove();
      changed = true;
    });
  }

  const links = tocNav.querySelectorAll('a');
  if (links.length === 0) return;

  // Add collapse to nested items / 给嵌套项添加折叠功能
  tocNav.querySelectorAll('li').forEach((li) => {
    const subList = li.querySelector('ul');
    if (!subList) return;

    const link = li.querySelector(':scope > a');
    if (!link) return;

    // Click to toggle expand / 点击切换展开
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href')?.slice(1);
      const target = id && document.getElementById(id);
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector('header')?.offsetHeight || 64;
        const y = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
        // 系统开启"减少动态效果"时禁用平滑滚动 / Use instant scroll when reduced motion is on
        const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: y, behavior: smooth ? 'smooth' : 'auto' });
        history.replaceState(null, null, `#${id}`);
      }
      li.classList.toggle('expanded');
    });
  });

  // Highlight active heading on scroll / 滚动时高亮当前标题
  const headings = article.querySelectorAll('h2, h3, h4, h5, h6');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove('active'));
          const active = tocNav.querySelector(`a[href="#${entry.target.id}"]`);
          if (active) {
            active.classList.add('active');
            // Expand parent items / 展开父级
            let parent = active.closest('li');
            while (parent) {
              parent.classList.add('expanded');
              parent = parent.parentElement?.closest('li');
            }
          }
        }
      });
    },
    { rootMargin: '-80px 0px -70% 0px' }
  );

  headings.forEach((heading) => observer.observe(heading));
}

// Hide TOC if no content / 无内容时隐藏目录
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTOC);
} else {
  initTOC();
}