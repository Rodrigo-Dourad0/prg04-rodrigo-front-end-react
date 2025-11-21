# 🚌 Projeto Roteiro Livre (React Migration)

Este projeto é a versão moderna e refatorada do sistema "Roteiro Livre". A arquitetura foi migrada de um site estático (HTML/CSS) para uma **Single Page Application (SPA)** utilizando **React** e **Vite**.

---

## 📂 Estrutura de Pastas

A organização do projeto segue o padrão modular, separando responsabilidades lógicas (Javascript/JSX) de estilização (CSS) e ativos estáticos (Imagens).

```text
meu-projeto/
├── 📂 public/              # Arquivos Estáticos (Acessíveis via URL raiz)
│   ├── 📂 images/          # Todas as imagens (Logos, fundos, fotos)
│   └── 📂 audio/           # Arquivos de áudio
│
├── 📂 src/                 # Código Fonte (A inteligência do App)
│   ├── 📂 components/      # "Peças de Lego" reutilizáveis
│   │   └── Navbar.jsx      # Menu de navegação global
│   │
│   ├── 📂 pages/           # Páginas (Rotas do sistema)
│   │   ├── Home.jsx        # Página Inicial
│   │   ├── Login.jsx       # Tela de Autenticação
│   │   ├── Admin.jsx       # Dashboard Administrativo
│   │   ├── Atividade3.jsx  # Conteúdo didático 1
│   │   └── Atividade4.jsx  # Conteúdo didático 2 (Cores)
│   │
│   ├── 📂 styles/          # Folhas de Estilo (CSS)
│   │   ├── css-global.css  # Resets e estilos do body/#root
│   │   ├── login.css       # Estilos específicos do Login
│   │   └── ...             # Outros CSS específicos por página
│   │
│   ├── App.jsx             # Configuração de Rotas (React Router)
│   └── main.jsx            # Ponto de entrada (Renderização no DOM)
│
├── index.html              # O único HTML real (Carrega o React e Bootstrap)
└── package.json            # Lista de dependências e scripts
