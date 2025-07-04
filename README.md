# Animal Shop com Valtio e React

Este é um desafio do curso "Fullstack Pro" do Sujeito Programador, onde foi desenvolvido um e-commerce de pet shop utilizando *Valtio* para gerenciamento de estado. A aplicação permite visualizar produtos, detalhes dos produtos e adicionar itens ao carrinho. O desafio originalmente utilizava Context API ou Redux, mas resolvi implementar com *Valtio* para explorar suas capacidades reativas e simplicidade além de me desafiar a aprender uma tecnologia nova assim como o TanStack *Query/React Query*, outra tecnologia que eu não conhecia.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Valtio**: Biblioteca para gerenciamento de estado reativo.
- **TanStack Query**: Biblioteca para gerenciamento de dados assíncronos.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Vite**: Ferramenta de construção rápida para projetos web.

## Estrutura do Projeto

```plaintext
src
├── cartStore.ts
├── hooks
│   ├── useProducts.ts
│   └── useProductsById.ts
├── interfaces
│   └── productProps.ts
├── pages
│   ├── Home
│   │   └── index.tsx
│   └── ProductDetails
│       └── index.tsx
└── utils
    └── formatPrice.ts
```

## Como Usar

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Inicie o JSON Server com `npx json-server db.json` para simular uma API REST.
4. Inicie o servidor de desenvolvimento com `npm run dev`.
5. Acesse a aplicação em `http://localhost:3000`.
