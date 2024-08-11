# ReminderSystem

## Descrição

Este projeto é um sistema de lembretes que permite aos usuários adicionar, visualizar e excluir lembretes. Os lembretes são organizados em uma lista ordenada cronologicamente. O sistema impõe algumas regras, como a impossibilidade de adicionar lembretes com datas passadas ou a data atual, garantindo que apenas datas futuras sejam aceitas.

## Funcionalidades

- **Adicionar Lembrete:** Crie lembretes com um título e uma data futura. A data atual ou datas passadas não são permitidas.
- **Visualizar Lembretes:** Veja todos os lembretes ordenados em ordem cronológica. Não é necessário atualizar a página ou apertar um botão para exibição, os lembretes são atualizados em tempo real.
- **Excluir Lembrete:** Remova um lembrete da lista ao clicar no ícone de exclusão.

## Premissas

- Apenas lembretes com datas futuras podem ser adicionados.
- Todos os campos (Título e Data) devem estar devidamente preenchidos para que um lembrete seja criado.
- Banco de dados utilizado: MySQL

## Decisões de Projeto

- Utilização do framework Next.js para produção do projeto, utilizando ReactJs como biblioteca.
- Utilização da linguagem TypeScript no Front-End como uma alternativa ao JavaScript, oferecendo maior robustez e manutenção ao projeto.
- Utilizaçao do Stitches como opção mais viável em termos de otimização e desempenho (em relação ao Styled Components).
- Utilização do Zod, React-Hook-Form e Hook-Form-Resolvers para validação do formulário de criação de lembretes.
- Utilização do axios para interação com API e comunicação entre o Front-End e o Back-End.
- Utilização de um banco de dados MySQL para armazenamento dos lembretes. Dessa forma, temos uma estrutura organizada e escalável.
- Utilização do Jest para realização dos testes unitários do Back-End.

## Tecnologias e Dependências

### Front-End

- **@hookform/resolvers:** Resolve schemas de validação para o React Hook Form.
- **@phosphor-icons/react:** Biblioteca de ícones para React.
- **@stitches/react:** Biblioteca CSS-in-JS para estilização.
- **axios:** Cliente HTTP baseado em promises para o navegador e node.js.
- **next:** Framework React para produção, com funcionalidades como SSR e geração estática.
- **react-hook-form:** Biblioteca para lidar com formulários no React.
- **zod:** Biblioteca para validação e parsing de schemas.
- **@types/node, @types/react, @types/react-dom:** Tipagens TypeScript para os respectivos pacotes.
- **typescript:** Superset de JavaScript que adiciona tipagem estática.

### Back-End

- **cors:** Middleware para habilitar CORS (Cross-Origin Resource Sharing).
- **express:** Framework web minimalista para Node.js.
- **express-validator:** Middleware para validação de dados em rotas do Express.
- **jest:** Framework de testes para JavaScript.
- **mysql2:** Cliente MySQL para Node.js com suporte a Promises.
- **node:** Ambiente de execução JavaScript no lado do servidor.
- **sequelize:** ORM (Object-Relational Mapper) para Node.js.

## Arquitetura do Back-End

- **Separação de Responsabilidades:** O código do Back-End foi desenvolvido seguindo o princípio de separação de responsabilidades, garantindo que cada camada do sistema (como rotas, controladores, serviços e modelos) tenha suas próprias funções claramente definidas. Isso facilita a manutenção, a escalabilidade e a clareza do código.

- **Testes Unitários:** Foram implementados testes unitários para o Back-End utilizando o framework Jest, garantindo a qualidade e a confiabilidade das funcionalidades críticas do sistema.

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado (versão 18.16.1 ou superior)
- MySQL instalado e configurado

### Instalação

1. Clone este repositório:
  ```bash
  git clone https://github.com/luizperinig/ReminderSystem.git
  ```
2. Instale as dependências de Front-End:
  ```bash
  cd client
  npm install
  ```
3. Instale as dependências de Back-End:
  ```bash
  cd ../api
  npm install
```

### Configuração
#### Como configurar o Back-End:
- Criar um banco de dados MySQL.
- Substituir "database", "username" e "password", no arquivo api/config/database.js, por, respectivamente, o nome, usuário e senha definidos na criação do banco de dados.
- Descomentar o trecho de código comentado no arquivo api/index.js e iniciar o servidor Back-End

### Iniciando o projeto
1. Inicie o servidor Back-End:
```bash
cd api
node index.js
```
2. Inicie o servidor Front-End:
```bash
cd ../client
npm run dev
```
3. Acesse o sistema no seu navegador
```bash
http://localhost:3000
```

### Testes
- Para rodar os testes unitários do Back-End:
```bash
cd api
npm test
```
