import { initNavbar }        from './components/navbar.js';
import { initHero }          from './components/hero.js';
import { initAbout }         from './components/about.js';
import { initSkills }        from './components/skills.js';
import { initProjects }      from './components/projects.js';
import { initCertifications} from './components/certifications.js';
import { initBlog }          from './components/blog.js';
import { initContact }       from './components/contact.js';
import { initFooter }        from './components/footer.js';
import { initAnimations }    from './animations.js';

initNavbar();
initHero();
initAbout();
initSkills();
initProjects();
initCertifications();
initBlog();
initContact();
initFooter();
initAnimations();

/* Smooth scroll com easing customizado */
document.addEventListener('click', e => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  e.preventDefault();

  const target = document.querySelector(link.getAttribute('href'));
  if (!target) return;

  const navHeight = document.querySelector('.navbar').offsetHeight;
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = Math.min(Math.abs(distance) * 0.4, 900);
  let start = null;

  const easeInOutCubic = t =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = timestamp => {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
});