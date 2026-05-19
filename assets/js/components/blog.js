export function initBlog() {
  const blog = document.getElementById('blog');

  blog.innerHTML = `
    <div class="section__label">05</div>
    <h2 class="section__title">Blog & Posts</h2>
    <div class="blog__grid">
      <div class="blog__card">
        <div class="blog__tag">Em breve · LinkedIn</div>
        <div class="blog__title">O que é o protocolo MCP e por que ele precisa de segurança?</div>
        <p class="blog__excerpt">
          Uma explicação acessível sobre a tecnologia que está mudando o
          ecossistema de IAs — e os riscos que ainda poucos estão discutindo.
        </p>
        <div class="blog__footer">
          <span class="blog__coming">// em produção</span>
          <span class="blog__arrow">→</span>
        </div>
      </div>
      <div class="blog__card">
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7462524985434112000/" target="_blank" rel="noopener noreferrer" class="blog__card">
          <div class="blog__tag">LinkedIn · Publicado</div>
          <div class="blog__title">Como construí um Mini SIEM do zero</div>
          <p class="blog__excerpt">
            Do problema real ao código: como detectar e bloquear ataques
            de força bruta automaticamente com Python e análise de logs.
          </p>
          <div class="blog__footer">
            <span class="blog__coming">// ver post</span>
            <span class="blog__arrow">→</span>
          </div>
        </a>
      </div>
      <div class="blog__card">
        <div class="blog__tag">Em breve · LinkedIn</div>
        <div class="blog__title">Dev + Segurança: por que todo desenvolvedor deveria pensar como um hacker</div>
        <p class="blog__excerpt">
          O diferencial competitivo de unir desenvolvimento web com
          mindset de segurança ofensiva e defensiva.
        </p>
        <div class="blog__footer">
          <span class="blog__coming">// em produção</span>
          <span class="blog__arrow">→</span>
        </div>
      </div>
    </div>
  `;
}