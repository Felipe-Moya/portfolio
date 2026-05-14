export function initSkills() {
  const skills = document.getElementById('skills');

  skills.innerHTML = `
    <div class="section__label">02</div>
    <h2 class="section__title">Habilidades & Tecnologias</h2>
    <div class="skills__grid">
      <div class="skill__category">
        <div class="skill__cat-title">🛡️ Segurança</div>
        <div class="skill__tags">
          <span class="skill__tag">SOC / Blue Team</span>
          <span class="skill__tag">SIEM</span>
          <span class="skill__tag">Hardening</span>
          <span class="skill__tag">Análise de eventos</span>
          <span class="skill__tag">CIS Controls</span>
          <span class="skill__tag">Gestão de vuln.</span>
          <span class="skill__tag">KeyCloak</span>
          <span class="skill__tag">Inglês intermediário</span>
        </div>
      </div>
      <div class="skill__category">
        <div class="skill__cat-title">💻 Desenvolvimento</div>
        <div class="skill__tags">
          <span class="skill__tag">HTML</span>
          <span class="skill__tag">CSS</span>
          <span class="skill__tag">JavaScript</span>
          <span class="skill__tag">PHP</span>
          <span class="skill__tag">Python</span>
          <span class="skill__tag">Java</span>
          <span class="skill__tag">Banco de Dados</span>
          <span class="skill__tag">Automação</span>
          <span class="skill__tag">C++</span>
        </div>
      </div>
      <div class="skill__category">
        <div class="skill__cat-title">🏗️ Infraestrutura</div>
        <div class="skill__tags">
          <span class="skill__tag">Linux</span>
          <span class="skill__tag">Windows Server</span>
          <span class="skill__tag">Docker</span>
          <span class="skill__tag">Kubernetes</span>
          <span class="skill__tag">Redes</span>
          <span class="skill__tag">Suporte N1/N2</span>
          <span class="skill__tag">Arduino</span>
        </div>
      </div>
      <div class="skill__category">
        <div class="skill__cat-title">🔧 Ferramentas</div>
        <div class="skill__tags">
          <span class="skill__tag">Bitdefender</span>
          <span class="skill__tag">Fortinet</span>
          <span class="skill__tag">Kaspersky</span>
          <span class="skill__tag">TeamViewer</span>
          <span class="skill__tag">AnyDesk</span>
          <span class="skill__tag">TomTicket</span>
          <span class="skill__tag">Microsoft Office</span>
          <span class="skill__tag">Git / GitHub</span>
        </div>
      </div>
      <div class="skill__category">
        <div class="skill__cat-title">➕ Outros</div>
        <div class="skill__tags">
          <span class="skill__tag">Inglês intermediário</span>
          <span class="skill__tag">Metodologias ágeis</span>
          <span class="skill__tag">Documentação técnica</span>
        </div>
      </div>
    </div>
  `;
}