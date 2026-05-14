# Felipe Moya Figueiredo — Portfólio Profissional

Site portfólio pessoal desenvolvido do zero com HTML, CSS e JavaScript puro,
sem frameworks ou dependências externas.

## 🚀 Tecnologias utilizadas

- **HTML5** — estrutura semântica e acessível
- **CSS3** — estilização modular por seção, variáveis CSS, animações e responsividade
- **JavaScript** — módulos ES6+, IntersectionObserver, smooth scroll com easing customizado

## 📁 Estrutura do projeto

portfolio/
├── index.html
├── README.md
└── assets/
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── global.css
│   ├── animations.css
│   ├── nav.css
│   ├── hero.css
│   ├── about.css
│   ├── skills.css
│   ├── projects.css
│   ├── certifications.css
│   ├── blog.css
│   ├── contact.css
│   └── footer.css
├── js/
│   ├── components/
│   │   ├── navbar.js
│   │   ├── hero.js
│   │   ├── about.js
│   │   ├── skills.js
│   │   ├── projects.js
│   │   ├── certifications.js
│   │   ├── blog.js
│   │   ├── contact.js
│   │   └── footer.js
│   ├── animations.js
│   └── main.js
└── images/

## ✨ Funcionalidades

- Dark theme tecnológico com identidade visual consistente
- Totalmente responsivo — mobile, tablet e desktop
- Animações de entrada com IntersectionObserver
- Smooth scroll com easing cúbico customizado
- Navbar fixa com indicador de seção ativa
- Menu hamburguer para mobile
- Security headers via meta tags

## 🔒 Segurança

- Content Security Policy (CSP) configurada no HTML
- X-Frame-Options: DENY — proteção contra clickjacking
- X-Content-Type-Options: nosniff
- Links externos com `rel="noopener noreferrer"`
- Sanitização de inputs no formulário de contato

## 🌐 Como rodar localmente

Não requer instalação de dependências. Basta clonar e abrir no navegador:

```bash
git clone https://github.com/Felipe-Moya/portfolio.git
cd portfolio
```

Abra o `index.html` diretamente no navegador ou use uma extensão como
**Live Server** no VSCode.

> ⚠️ Por usar módulos ES6 (`type="module"`), o site precisa ser servido
> por um servidor HTTP local. O Live Server do VSCode resolve isso automaticamente.

## 📬 Contato

- **Email:** felipeayom4.f@gmail.com
- **WhatsApp:** (11) 97896-1047
- **LinkedIn:** [felipe-moya-figueiredo](https://www.linkedin.com/in/felipe-moya-figueiredo-30638021b)
- **GitHub:** [Felipe-Moya](https://github.com/Felipe-Moya)