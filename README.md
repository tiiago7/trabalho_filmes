📽️ Sistema de Gerenciamento de Filmes

Aplicação completa Full-Stack para cadastro, edição, listagem e exclusão de filmes.
Desenvolvido com React (Frontend) e Node.js + Express + MongoDB (Backend).

✔️ Funcionalidades

Cadastro de filmes

Listagem de filmes

Edição de filmes

Exclusão de filmes

Conexão com API REST

Interface simples e funcional

Cada filme contém:

Título

Descrição

URL da imagem

Ano de lançamento

🏗️ Tecnologias Utilizadas
Backend

Node.js

Express

MongoDB

Mongoose

Nodemon

CORS

Dotenv

Frontend

React

React Router DOM

Axios

JavaScript

🚀 Como executar o projeto
1️⃣ Pré-requisitos

Node.js instalado

MongoDB instalado e rodando localmente

Git instalado

▶️ Backend
1. Entre na pasta do backend:
cd backend

2. Instale as dependências:
npm install

3. Inicie o servidor:
npm run dev


O backend ficará disponível em:

http://localhost:5000

🌐 Frontend
1. Entre na pasta do frontend:
cd frontend

2. Instale as dependências:
npm install

3. Inicie o frontend:
npm start


A aplicação abrirá em:

http://localhost:3000

🔌 Conexão Frontend ↔ Backend

O arquivo frontend/src/api.js usa:

baseURL: "http://localhost:5000/api"


Por isso, o backend deve estar rodando para que o frontend funcione corretamente.

📁 Estrutura do projeto
trabalho_filmes/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── src/
│       ├── models/
│       ├── controllers/
│       └── routes/
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   ├── api.js
    │   └── App.js
    ├── public/
    └── package.json

🧪 Teste rápido

Abra o frontend (localhost:3000)

Clique em "Novo"

Preencha os dados do filme

Salve

Valide que o filme aparece na lista

Teste editar e excluir
