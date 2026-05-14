export function initCertifications() {
  const certs = document.getElementById('certs');

  certs.innerHTML = `
    <div class="section__label">04</div>
    <h2 class="section__title">Certificações</h2>
    <div class="certs__grid">
      <div class="cert__card">
        <div class="cert__icon">🛡️</div>
        <div class="cert__info">
          <div class="cert__name">CC Certified in Cybersecurity (CC)</div>
          <div class="cert__issuer">ISC2 · fev 2025 – fev 2028</div>
        </div>
      </div>
      <div class="cert__card">
        <div class="cert__icon">🤖</div>
        <div class="cert__info">
          <div class="cert__name">Artificial Intelligence Fundamentals with Capstone Project</div>
          <div class="cert__issuer">IBM · mai 2025</div>
        </div>
      </div>
      <div class="cert__card">
        <div class="cert__icon">🔍</div>
        <div class="cert__info">
          <div class="cert__name">Imersão SOC & NetSec</div>
          <div class="cert__issuer">Hackone · jan 2026</div>
        </div>
      </div>
      <div class="cert__card">
        <div class="cert__icon">🌐</div>
        <div class="cert__info">
          <div class="cert__name">Introduction to Cybersecurity</div>
          <div class="cert__issuer">Cisco · jan 2025</div>
        </div>
      </div>
      <div class="cert__card">
        <div class="cert__icon">🌐</div>
        <div class="cert__info">
          <div class="cert__name">Networking Basics</div>
          <div class="cert__issuer">Cisco · jul 2024</div>
        </div>
      </div>
      <div class="cert__card">
        <div class="cert__icon">🎓</div>
        <div class="cert__info">
          <div class="cert__name">IV FatecSeg — Certificado de Participação</div>
          <div class="cert__issuer">Even3 · nov 2024</div>
        </div>
      </div>
      <div class="cert__card">
        <div class="cert__icon">🎓</div>
        <div class="cert__info">
          <div class="cert__name">III FatecSeg — Certificado de Participação</div>
          <div class="cert__issuer">Even3 · nov 2023</div>
        </div>
      </div>
    </div>
  `;
}