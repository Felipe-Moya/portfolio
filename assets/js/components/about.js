export function initAbout() {
  const sobre = document.getElementById('sobre');

  sobre.innerHTML = `
    <div class="about">
      <div class="section__label">01</div>
      <h2 class="section__title">Sobre mim</h2>
      <div class="about__grid">
        <div class="about__photo-wrap">
          <div class="about__photo-frame">
            <div class="about__photo-icon">👤</div>
            <p class="about__photo-hint">// foto em breve</p>
          </div>
          <div class="about__corner about__corner--tl"></div>
          <div class="about__corner about__corner--br"></div>
        </div>
        <div class="about__text">
          <p>
            Sou estudante de Segurança da Informação na
            <span class="about__highlight">FATEC São Caetano do Sul</span>
            e estagiário na
            <span class="about__highlight">SafeUp Cybersecurity</span>,
            onde atuo em operações de SOC e Blue Team — monitorando eventos,
            analisando alertas e apoiando a detecção de incidentes.
          </p>
          <p>
            Tenho formação técnica em Informática e ao longo da graduação
            desenvolvi experiências práticas em Python, redes, servidores Linux e Windows,
            Docker, Kubernetes e segurança de sistemas. Já conquistei
            <span class="about__highlight">1° lugar em CTF em equipe</span>
            e desenvolvo projetos que unem desenvolvimento e segurança.
          </p>
          <p>
            Acredito que um bom desenvolvedor entende não só como construir,
            mas como <span class="about__highlight">proteger</span> o que constrói.
            Por isso ofereço soluções web que entregam design, performance
            e segurança no mesmo pacote.
          </p>
          <div class="about__stats">
            <div class="about__stat">
              <div class="about__stat-num">5+</div>
              <div class="about__stat-label">anos em TI</div>
            </div>
            <div class="about__stat">
              <div class="about__stat-num">3+</div>
              <div class="about__stat-label">projetos relevantes</div>
            </div>
            <div class="about__stat">
              <div class="about__stat-num">1°</div>
              <div class="about__stat-label">lugar em CTF</div>
            </div>
            <div class="about__stat">
              <div class="about__stat-num">SOC</div>
              <div class="about__stat-label">Blue Team na prática</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}