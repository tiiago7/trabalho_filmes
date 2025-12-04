
# 🎬 Sistema de Gerenciamento de Filmes

Aplicação Full Stack com **React**, **Node.js**, **Express** e **MongoDB**, permitindo cadastrar, listar, editar e excluir filmes.

## 📌 Funcionalidades

- Cadastro de filmes  
- Listagem de filmes  
- Edição de filmes  
- Exclusão de filmes  
- Comunicação com API REST  
- Interface simples e funcional  

Cada filme contém:
- Título  
- Descrição  
- Ano  
- URL da imagem  

## 🏗️ Tecnologias Utilizadas

### Backend
- Node.js  
- Express  
- MongoDB  
- Mongoose  
- Nodemon  
- CORS  
- Dotenv  

### Frontend
- React  
- React Router DOM  
- Axios  
- JavaScript  

## 🚀 Como executar o projeto

### Pré-requisitos
- Node.js instalado  
- MongoDB instalado e rodando  
- Git instalado  

## ▶️ Executando o Backend
```
cd backend
npm install
npm run dev
```

Servidor:  
http://localhost:5000

## 🌐 Executando o Frontend
```
cd frontend
npm install
npm start
```

Frontend:  
http://localhost:3000

## 🔌 Conexão entre Frontend e Backend
Arquivo `frontend/src/api.js`:
```
baseURL: "http://localhost:5000/api"
```

## 📁 Estrutura do Projeto
```
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
    ├── public/
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   ├── api.js
    │   └── App.js
    └── package.json
```

## 🧪 Teste do Sistema

1. Acesse `http://localhost:3000`  
2. Clique em "Novo"  
3. Preencha os dados  
4. Salve  
5. Veja o filme listado  
6. Teste editar e excluir  


## 📚 Autor
Projeto desenvolvido para fins acadêmicos.
