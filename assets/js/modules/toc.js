// TOC Interaction / 目录交互
// Handle scroll, highlight, and collapse for Hugo-generated TOC / 处理目录的跳转、高亮和折叠

function initTOC() {
  const tocNav = document.getElementById('toc-nav');
  const article = document.querySelector('.glass-card');
  if (!tocNav || !article) return;

  const links = tocNav.querySelectorAll('a');
  if (links.length === 0) return;

  // Add collapse to h2 items / 给有子项的标题添加折叠功能
  tocNav.querySelectorAll('li').forEach((li) => {
    const subList = li.querySelector('ul');
    if (!subList) return;

    const link = li.querySelector(':scope > a');
    if (!link) return;

    const arrow = document.createElement('span');
    arrow.className = 'toc-arrow';
    link.appendChild(arrow);

    arrow.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      li.classList.toggle('collapsed');
    });
  });

  // Smooth scroll with header offset / 平滑滚动并预留导航栏空间
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      if (e.target.classList.contains('toc-arrow')) return;
      const id = link.getAttribute('href')?.slice(1);
      const target = id && document.getElementById(id);
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector('header')?.offsetHeight || 64;
        const y = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
        window.scrollTo({ top: y, behavior: 'smooth' });
        history.pushState(null, null, `#${id}`);
      }
    });
  });

  // Highlight active heading on scroll / 滚动时高亮当前标题
  const headings = article.querySelectorAll('h2, h3, h4');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove('active'));
          const active = tocNav.querySelector(`a[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
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