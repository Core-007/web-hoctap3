// Toggle mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.classList.toggle('open');
  });
}

// Set active link by data-page if cần tự động (đang set thủ công class="active" trong HTML)
// const page = document.body.dataset.page;
// document.querySelectorAll('.site-nav .nav-link').forEach(a=>{
//   if (a.getAttribute('href').includes(page)) a.classList.add('active');
// });
