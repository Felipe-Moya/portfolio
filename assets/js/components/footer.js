export function initFooter() {
  const footer = document.getElementById('footer');

  footer.innerHTML = `
    <div class="footer">
      <div class="footer__copy">
        © 2025 <span>Felipe Moya Figueiredo</span> — Todos os direitos reservados
      </div>
      <div class="footer__links">
        <a href="#sobre">sobre</a>
        <a href="#projetos">projetos</a>
        <a href="#contato">contato</a>
      </div>
    </div>
  `;
}