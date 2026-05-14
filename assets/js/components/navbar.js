export function initNavbar() {
  const navbar = document.getElementById('navbar');

  navbar.innerHTML = `
    <nav class="navbar" role="navigation" aria-label="Menu principal">
      <div class="navbar__logo">
        FM<span>_</span>dev
      </div>
      <ul class="navbar__links">
        <li><a href="#sobre">sobre</a></li>
        <li><a href="#skills">skills</a></li>
        <li><a href="#projetos">projetos</a></li>
        <li><a href="#certs">certs</a></li>
        <li><a href="#blog">blog</a></li>
        <li><a href="#contato">contato</a></li>
      </ul>
      <button class="navbar__toggle" aria-label="Abrir menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>

    <div class="navbar__mobile" role="dialog" aria-label="Menu mobile">
      <a href="#sobre">sobre</a>
      <a href="#skills">skills</a>
      <a href="#projetos">projetos</a>
      <a href="#certs">certs</a>
      <a href="#blog">blog</a>
      <a href="#contato">contato</a>
    </div>
  `;

  const nav       = document.querySelector('.navbar');
  const navLinks  = document.querySelectorAll('.navbar__links a');
  const sections  = document.querySelectorAll('section, header');
  const toggle     = document.querySelector('.navbar__toggle');
  const mobileMenu = document.querySelector('.navbar__mobile');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  document.querySelectorAll('.navbar__mobile a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      mobileMenu.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
      document.body.style.overflow = '';
    });
  });
}