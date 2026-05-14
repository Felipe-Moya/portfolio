export function initContact() {
  const contato = document.getElementById('contato');

  contato.innerHTML = `
    <div class="contact__inner">
      <div class="section__label">06</div>
      <h2 class="section__title">Contato</h2>
      <p class="contact__desc">
        Tem um projeto em mente? Precisa de um site, sistema web ou
        consultoria em segurança? Me chama — respondo rápido.
      </p>
      <div class="contact__links">
        <a href="mailto:felipeayom4.f@gmail.com" class="contact__link">
          <div class="contact__icon">✉️</div>
          <div class="contact__info">
            <div class="contact__label">Email</div>
            <div class="contact__value">felipeayom4.f@gmail.com</div>
          </div>
          <span class="contact__arrow">→</span>
        </a>
        <a href="https://wa.me/5511978961047" class="contact__link" target="_blank" rel="noopener noreferrer">
          <div class="contact__icon">💬</div>
          <div class="contact__info">
            <div class="contact__label">WhatsApp</div>
            <div class="contact__value">(11) 97896-1047</div>
          </div>
          <span class="contact__arrow">→</span>
        </a>
        <a href="https://www.linkedin.com/in/felipe-moya-figueiredo-30638021b" class="contact__link" target="_blank" rel="noopener noreferrer">
          <div class="contact__icon">🔗</div>
          <div class="contact__info">
            <div class="contact__label">LinkedIn</div>
            <div class="contact__value">felipe-moya-figueiredo</div>
          </div>
          <span class="contact__arrow">→</span>
        </a>
        <a href="https://github.com/Felipe-Moya" class="contact__link" target="_blank" rel="noopener noreferrer">
          <div class="contact__icon">🐙</div>
          <div class="contact__info">
            <div class="contact__label">GitHub</div>
            <div class="contact__value">github.com/Felipe-Moya</div>
          </div>
          <span class="contact__arrow">→</span>
        </a>
      </div>
    </div>
  `;
}