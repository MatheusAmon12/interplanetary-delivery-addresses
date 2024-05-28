# Interplanetary Delivery

![Interplanetary Delivery Mockups](/public/mockups.png)

Este projeto é parte de um processo seletivo. Consiste em um gerenciador de endereços em um contexto hipotético onde existem viagens entre os plantes Terra e Marte. Nesse contexto o enderaçamento de Marte é diferente do convencional que conhecemeos, sendo constituídos por lotes composto de 4 dígitos. Esse projeto resolve a situação permitindo a criação de endereços baseados em Marte.
As tecnologias e ferramentas utilizadas foram:

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zod](https://github.com/colinhacks/zod)
- [React Hook Form](https://react-hook-form.com/)
- [React Router Dom](https://reactrouter.com/)

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Setup do Projeto

- Clone o repositório [interplanetary-delivery](https://github.com/MatheusAmon12/interplanetary-delivery) para a sua máquina
- Rode o seguinte comando no terminal: `npm install`
- Rode o seguinte comando no terminal: `npm run dev`
- Finalizado!

## Estrutura do Projeto

- `src`
  - `@types` contém tipagens utilizadas ao longo do projeto
  - `components`
    - `ui` contém os componentes provisionados pelo Shadcn UI
    - `empty-list.tsx` contém o componente `EmptyList` que é apresentado quando não existem endereços
  - `lib` contém o arquivo `utils.ts` utilizado pelo Shadcn UI
  - `routes`
    - `edit-address.tsx` contém a rota para a listagem de endereços e a edição de um endereço
    - `form` contém a página do formulário
  - `store`
    - `createNewAddress` cria um novo endereço e salva no localStorage
    - `getAllAddresses` retorna todos os endereços do localStorage
    - `getOneAddress` retorna um endereço pelo baseado no campo `address`. Como cada lote é único foi um candidato para ser passado com `state` no método `navigate()`
    - `removeOneAddress` remove um endereço pelo campo `address`
  - `utils`
    - `AppError.ts` cria uma classe do tipo `AppError` para tratamento de erros personalizados
    - `formSchema.ts` define as validações do formulário
  - `App.tsx` contém a aplicação principal, renderiza o `<Outlet />` do `react-router-dom`, contendo as rotas definidas no `routes`
  - `index.css` estilos globais
  - `main.tsx` arquivo root da aplicação

## Considerações adicionais

- No projeto o Lote 0000 é considerado
- Cada lote tem 4 dígitos, mesmo que contenha zeros a à esquerda
- Cada lote é único, portanto, ao editar um endereço o salvamento falhará se tentar enviar o mesmo lote, para isso é preciso remover antigo na página de listagem