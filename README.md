# High Tide Chat

High Tide Chat é um projeto de aprendizado que implementa um chat em grupo em tempo real. Os usuários podem criar contas, fazer login e conversar com outras pessoas que estão online.

## Visão Geral

Este projeto foi desenvolvido como uma oportunidade de aprendizado, focando em:

- Implementação de chat em tempo real
- Autenticação de usuários
- Desenvolvimento full-stack (Vue.js no frontend, Node.js no backend)
- Uso de WebSockets para comunicação em tempo real

## Tecnologias Utilizadas

### Frontend
- Vue.js 3
- Vue Router
- Socket.io-client
- Vite (para build e desenvolvimento)

### Backend
- Node.js
- Express.js
- Socket.io
- PostgreSQL (pg)
- bcrypt (para hash de senhas)
- jsonwebtoken (para autenticação)

## Funcionalidades

- Registro de usuários
- Login de usuários
- Chat em grupo em tempo real
- Listagem de usuários online

## Configuração do Projeto

### Pré-requisitos

- Node.js
- PostgreSQL

### Frontend

1. Navegue até a pasta do frontend:
   ```
   cd frontend
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```

### Backend

1. Navegue até a pasta do backend:
   ```
   cd backend
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Configure as variáveis de ambiente (crie um arquivo `.env` com as configurações do banco de dados e a chave secreta para JWT)

4. Inicie o servidor:
   ```
   npm start
   ```

## Estrutura do Projeto

```
high-tide-chat/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── views/
│   │   ├── router/
│   │   ├── App.vue
│   │   └── main.js
│   ├── package.json
│   └── vite.config.js
└── backend/
    ├── src/
    │   ├── routes/
    │   ├── controllers/
    │   ├── models/
    │   └── server.js
    └── package.json
```

## Aprendizados

- Implementação de autenticação de usuários com JWT
- Uso de WebSockets para comunicação em tempo real
- Integração de um frontend Vue.js com um backend Node.js
- Gerenciamento de estado em uma aplicação Vue.js
- Uso de banco de dados PostgreSQL para armazenamento de dados

## Próximos Passos

- Implementar salas de chat privadas
- Adicionar funcionalidade de envio de arquivos
- Melhorar a UI/UX do chat
- Implementar notificações push para novas mensagens
- Adicionar testes automatizados

## Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Faça commit das suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
