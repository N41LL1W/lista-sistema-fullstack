# 🛒 Sistema de Listas de Compras Inteligente

Bem-vindo ao Sistema de Listas de Compras Inteligente! Esta é uma aplicação web full-stack desenvolvida para criar, gerenciar e otimizar suas idas ao supermercado. Com uma interface limpa, sistema de contas de usuário e funcionalidades poderosas, o objetivo é transformar a tarefa de fazer compras em uma experiência organizada, econômica e colaborativa.

![Tela Inicial da Aplicação](./img/index.png)

## ✨ Funcionalidades Principais

*   **🔐 Autenticação de Usuários:** Sistema completo de registro e login para gerenciamento privado e seguro das listas.
*   **🧠 Padronização de Produtos:** Ao adicionar um item, um campo de busca inteligente com autocompletar sugere produtos de uma base de dados central. Produtos novos são adicionados à base para futuras sugestões.
*   **📂 Organização por Categorias:** Associe produtos a categorias padronizadas. As listas são automaticamente agrupadas, otimizando sua rota no supermercado.
*   **📝 Gerenciamento Completo:** Crie, renomeie e delete listas. Adicione e remova itens facilmente.
*   **💸 Acompanhamento de Compras:** Durante a compra, insira preços e quantidades, marque itens como "comprados" e veja o total do seu carrinho ser calculado em tempo real.
*   **📈 Histórico de Preços Pessoal:** Salve suas compras finalizadas e consulte o histórico de preços de cada produto para saber se está fazendo um bom negócio.
*   **🔄 Modelos Reutilizáveis (Templates):** Salve listas recorrentes (como "Compras do Mês") como modelos, delete os que não precisa mais e crie novas listas pré-preenchidas com um clique.
*   **🔗 Compartilhamento Simples:** Gere um link de compartilhamento (somente visualização) para qualquer lista e envie para familiares ou amigos.
*   **🧹 Limpeza Inteligente:** Após a compra, limpe apenas os itens marcados como "comprados" ou resete todos os preços e quantidades para uma nova compra.
*   **📱 Interface Responsiva:** O layout se adapta perfeitamente a telas de desktop, tablets e celulares.

## 🛠️ Tecnologias Utilizadas

### **Frontend**
*   **React (via Vite):** Biblioteca moderna para construção de interfaces de usuário.
*   **JavaScript (ES6+)** e **JSX**.
*   **CSS3:** Estilização modular e responsiva.
*   **[Choices.js](https://github.com/Choices-js/Choices):** Biblioteca para os campos de busca com autocompletar.

### **Backend**
*   **[Node.js](https://nodejs.org/)**
*   **[Express.js](https://expressjs.com/):** Framework para a criação da API RESTful.
*   **[express-session](https://github.com/expressjs/session):** Para gerenciamento de sessões de usuário.
*   **[bcryptjs](https://github.com/dcodeIO/bcrypt.js):** Para criptografia segura de senhas.
*   **[dotenv](https://github.com/motdotla/dotenv):** Para gerenciamento de variáveis de ambiente.

### **Banco de Dados**
*   **[PostgreSQL](https://www.postgresql.org/)**
*   **Hospedagem:** [Neon](https://neon.tech/) (Serverless Postgres)

### **Deployment**
*   **[Vercel](https://vercel.com/)**: Plataforma para deploy contínuo do frontend (React) e backend (Node.js API) a partir de um único monorepo.

## 🚀 Como Executar Localmente

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/lista-sistema-fullstack.git
    cd lista-sistema-fullstack
    ```

2.  **Configure o Backend:**
    *   Navegue até a pasta do backend: `cd backend`
    *   Instale as dependências: `npm install`
    *   Crie um arquivo `.env` dentro da pasta `backend` e adicione as seguintes variáveis com seus dados do Neon DB:
        ```env
        # Parâmetros de Conexão do Neon DB
        DB_HOST="seu-host.aws.neon.tech"
        DB_DATABASE="neondb"
        DB_USER="seu_usuario"
        DB_PASSWORD="sua_senha"
        DB_PORT=5432

        # Segredo da Sessão
        SESSION_SECRET="crie_uma_string_longa_e_aleatoria_aqui"
        ```

3.  **Configure o Frontend:**
    *   Em um novo terminal, navegue até a pasta do frontend: `cd frontend`
    *   Instale as dependências: `npm install`

4.  **Execute a Aplicação:**
    *   **No terminal do backend:** `node server.js` (deve exibir "Conexão bem-sucedida" e "Servidor rodando...")
    *   **No terminal do frontend:** `npm run dev`

5.  **Abra o navegador:**
    Acesse a URL fornecida pelo Vite (geralmente `http://localhost:5173`).

## 🔮 Próximos Passos

*   **Análise de Preços da Comunidade:** Implementar a lógica para calcular e exibir a média de preços de um produto com base nos dados de todos os usuários.

---
_Este projeto foi desenvolvido com o auxílio do Gemini, uma IA do Google._