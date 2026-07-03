// Category pagination / 分类分页
document.addEventListener('DOMContentLoaded', () => {
  const cloud = document.querySelector('.cat-cloud');
  if (!cloud) return;

  const perPage = parseInt(cloud.dataset.perPage) || 9;
  const pills = [...cloud.querySelectorAll('.tag-pill')];
  const total = pills.length;
  const totalPages = Math.ceil(total / perPage);
  if (totalPages <= 1) return;

  let page = 1;
  const nav = document.querySelector('.cat-pagination');
  const info = nav.querySelector('.cat-info');
  nav.style.display = '';

  function render() {
    const start = (page - 1) * perPage;
    pills.forEach((p, i) => {
      p.style.display = i >= start && i < start + perPage ? '' : 'none';
    });
    info.textContent = `${page} / ${totalPages}`;
    nav.querySelector('.cat-prev').style.visibility = page > 1 ? '' : 'hidden';
    nav.querySelector('.cat-next').style.visibility = page < totalPages ? '' : 'hidden';
  }

  nav.querySelector('.cat-prev').addEventListener('click', e => {
    e.preventDefault();
    if (page > 1) { page--; render(); }
  });

  nav.querySelector('.cat-next').addEventListener('click', e => {
    e.preventDefault();
    if (page < totalPages) { page++; render(); }
  });

  render();
});
