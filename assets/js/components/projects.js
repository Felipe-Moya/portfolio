export function initProjects() {
  const projetos = document.getElementById('projetos');

  projetos.innerHTML = `
    <div class="section__label">03</div>
    <h2 class="section__title">Projetos</h2>
    <div class="projects__grid">
      <div class="project__card">
        <div class="project__badge">TCC</div>
        <div class="project__num">// 001</div>
        <h3 class="project__title">Segurança de IA em ambiente corporativo</h3>
        <p class="project__desc">
          Trabalho de conclusão de curso desenvolvido em grupo focado em
          recomendações de segurança para IA integrada a ambientes de
          orquestração de containers. O projeto abrange autenticação,
          controle de acesso e boas práticas para uso seguro de IA
          em ambientes corporativos.
        </p>
        <div class="project__tags">
          <span class="project__tag">Python</span>
          <span class="project__tag">Docker</span>
          <span class="project__tag">Kubernetes</span>
          <span class="project__tag">KeyCloak</span>
          <span class="project__tag">OAuth2</span>
          <span class="project__tag">Ubuntu Server</span>
          <span class="project__tag">MCP</span>
        </div>
      </div>
      <div class="project__card">
        <div class="project__badge">Segurança</div>
        <div class="project__num">// 002</div>
        <h3 class="project__title">Mini SIEM — Detecção de Força Bruta</h3>
        <p class="project__desc">
          Sistema de monitoramento de segurança que analisa logs em tempo real
          para identificar padrões de ataque de força bruta. Ao detectar
          tentativas suspeitas, o sistema classifica o evento como BruteForce
          e bloqueia automaticamente a conta alvo, reduzindo o tempo de
          resposta a incidentes.
        </p>
        <div class="project__tags">
          <span class="project__tag">Python</span>
          <span class="project__tag">SIEM</span>
          <span class="project__tag">Log Analysis</span>
          <span class="project__tag">Automação</span>
        </div>
      </div>
      <div class="project__card">
        <div class="project__badge">Portfólio</div>
        <div class="project__num">// 003</div>
        <h3 class="project__title">Portfólio Profissional</h3>
        <p class="project__desc">
          Site institucional desenvolvido do zero com HTML, CSS e JavaScript
          puro, sem frameworks ou dependências externas. Dark theme tecnológico,
          totalmente responsivo e com boas práticas de segurança frontend
          aplicadas desde a estrutura.
        </p>
        <div class="project__tags">
          <span class="project__tag">HTML</span>
          <span class="project__tag">CSS</span>
          <span class="project__tag">JavaScript</span>
          <span class="project__tag">Responsivo</span>
          <span class="project__tag">Security Headers</span>
        </div>
      </div>
    </div>
  `;
}