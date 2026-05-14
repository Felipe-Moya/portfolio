export function initHero() {
  const hero = document.getElementById('hero');

  hero.innerHTML = `
    <div class="hero">
      <div class="hero__grid"    aria-hidden="true"></div>
      <div class="hero__glow"    aria-hidden="true"></div>
      <div class="hero__content">
        <div class="hero__tag">
          <div class="hero__tag-dot" aria-hidden="true"></div>
          Disponível para freelas
        </div>
        <h1 class="hero__title">
          Felipe<br>
          <span>Moya</span><br>
          Figueiredo<span class="hero__cursor" aria-hidden="true">_</span>
        </h1>
        <p class="hero__sub">
          Segurança da Informação &amp; Desenvolvimento Web
        </p>
        <p class="hero__desc">
            Estagiário em Segurança da Informação na SafeUp Cybersecurity,
            cursando Segurança da Informação na FATEC São Caetano do Sul.
            Desenvolvo soluções web com foco em segurança — porque um site
            bonito também precisa ser blindado.
        </p>
        <div class="hero__btns">
          <a href="#projetos" class="btn btn--primary">Ver projetos</a>
          <a href="#contato"  class="btn btn--secondary">Entrar em contato</a>
        </div>
      </div>
      <div class="hero__scroll" aria-hidden="true">
        <div class="hero__scroll-line"></div>
        <span class="hero__scroll-label">scroll</span>
      </div>
    </div>
  `;
}