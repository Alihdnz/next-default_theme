# 🧩 Next.js Base Theme Template

Este é um projeto base em **Next.js** desenvolvido para servir como um tema inicial customizável. Ele foi estruturado com foco em **componentização**, **boas práticas de código**, **manutenção facilitada** e **separação de responsabilidades**, ideal para projetos escaláveis.

---

## 📁 Estrutura do Projeto

```bash
.
├── app/                # Estrutura de rotas e layout do Next.js
├── components/         # Componentes reutilizáveis da aplicação
├── public/             # Arquivos públicos (imagens, fontes, css minificado, etc.)
├── resources/
│   └── styles/         # SCSS modularizado (pré-processado e minificado)
├── styles/             # Estilos globais do Next (se necessário)
├── .gitignore
├── package.json
└── README.md

 ```
- Next.js

- TypeScript

- Tailwind CSS

- Sass/SCSS

- Concurrently – para rodar SCSS e Next.js em paralelo

```bash

git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
npm install

```


## 🚀 Scripts Disponíveis

| Comando              | Descrição                                           |
|----------------------|----------------------------------------------------|
| `npm run dev`        | Inicia o Next.js em modo de desenvolvimento + SCSS |
| `npm run build`      | Compila o projeto Next.js e o SCSS                 |
| `npm run scss:watch` | Observa alterações nos arquivos SCSS               |
| `npm run scss:build` | Compila manualmente os arquivos SCSS               |



## 🎨 Customização de Estilo

Os estilos SCSS estão localizados em `resources/styles/` e são compilados em um único arquivo `public/css/styles.css`.

- Utilize `@import` dentro de `main.scss` para modularizar seus estilos.
- Para alterar o tema, edite os arquivos parciais como `_variables.scss`, `_layout.scss`, etc.

---

## 📦 Como Usar Este Template

1. Faça um fork ou clone deste repositório.
2. Altere os componentes ou estilos conforme seu projeto.
3. Publique ou versiona sua própria versão de tema customizado.

---

## 🧠 Boas Práticas

- Use nomes de classes utilitárias do **Tailwind CSS** sempre que possível.
- Evite alterar os componentes diretamente se for reaproveitar o tema base em múltiplos projetos.
- Prefira sobrescrever estilos via SCSS centralizado em `resources/styles/`.
- Mantenha a pasta `components/` organizada por responsabilidade.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Crie uma issue descrevendo sua sugestão ou correção.
2. Faça um fork do projeto.
3. Crie uma nova branch:

   ```bash
   git checkout -b minha-melhoria

   Commit suas mudanças:
   git commit -m 'feat: minha melhoria'

   Envie um Pull Request.

   ```

   📝 Licença
Este projeto está licenciado sob a MIT License.


Desenvolvido por Diniz Amorim Desenvolvimento Web — inspirado em práticas modernas de desenvolvimento front-end.
   
