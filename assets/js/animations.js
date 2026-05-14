export function initAnimations() {
  const animatedElements = Array.from(document.querySelectorAll(
    '.about__photo-wrap, .about__text, .about__stat,' +
    '.skill__category, .project__card, .cert__card,' +
    '.blog__card, .contact__link'
  ));

  if (!animatedElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        setTimeout(() => {
          entry.target.style.transitionDelay = '0s';
        }, 700);
      } else {
        entry.target.classList.remove('visible');
        const index = animatedElements.indexOf(entry.target);
        entry.target.style.transitionDelay = `${(index % 4) * 0.07}s`;
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  animatedElements.forEach((el, index) => {
    el.style.transitionDelay = `${(index % 4) * 0.07}s`;
    observer.observe(el);
  });
}