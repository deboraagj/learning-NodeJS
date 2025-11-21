# 🧠 Atividade Prática — Projeto Blog (Node.js + Express + Sequelize + Handlebars + MySQL2)

## 🎯 Objetivo da Atividade

Esta atividade tem como objetivo preparar a **estrutura inicial** do projeto **Blog**, que será utilizado nas próximas aulas para implementar a **lógica do CRUD** (Create, Read, Update, Delete) com Node.js e MySQL.

> ⚠️ Nesta etapa **sera implementado**, apenas **a estrutura, pastas, arquivos e rotas** necessárias para o funcionamento futuro.

---

## 🗂️ 1) Estrutura de Pastas do Projeto

Cada aluno ou grupo deverá criar a seguinte estrutura de diretórios:

```
blog/
├─ app.js                  # arquivo principal do servidor Node.js
├─ package.json            # configuração do projeto Node
│
├─ models/                 # configuração e modelos do banco de dados
│  ├─ db.js                # conexão com o banco MySQL
│  └─ post.js              # modelo da tabela de postagens
│
├─ views/                  # páginas dinâmicas (renderizadas com Handlebars)
│  ├─ layouts/
│  │  └─ main.handlebars   # layout padrão
│  ├─ index.handlebars     # página inicial (listar postagens)
│  └─ form.handlebars      # página com formulário para criar postagens
│
├─ public/                 # arquivos estáticos (CSS, JS, imagens)
│  ├─ assets/
│  │  ├─ css/
│  │  └─ js/
│
└─ README.md
```

---

## ⚙️ 2) Dependências do Projeto

Dentro da pasta do projeto, execute:

```bash
npm init -y
npm install express body-parser sequelize mysql2 express-handlebars handlebars
```

**Função de cada dependência:**
- **express** → servidor web e rotas  
- **body-parser** → leitura de dados enviados por formulários  
- **sequelize** → ORM para comunicação com o MySQL  
- **mysql2** → driver do banco de dados  
- **express-handlebars** → mecanismo de visualização (views)

---

## 🧱 3) Arquivos que Devem Ser Criados

### 1. `app.js`
- Arquivo principal da aplicação.
- Configura o servidor Express.
- Configura o uso do **body-parser**.
- Configura o **Handlebars** como mecanismo de visualização (`view engine`).
- Define as **rotas principais** (ainda sem lógica CRUD).

Exemplo de configuração do Handlebars:

```bash
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
```
---

### 2. Arquivo .env

- Crie um arquivo chamado .env na raiz do projeto e adicione as variáveis globais:
```bash
PORT=8081
DB_NAME=blog
DB_USER=root
DB_PASS=sua_senha
DB_HOST=localhost
```
`Essas informações serão usadas no db.js e no app.js.`

---

### 3. `models/db.js`
- Responsável pela **conexão com o banco de dados MySQL**, usando Sequelize.
- Deve conter uma **função de teste de conexão**.

---

### 4. `models/post.js`
- Define o **modelo da tabela de postagens**, com os campos:
  - título
  - conteúdo
  - autor
  - data de criação e atualização

---

### 5. `views/`
Contém as páginas que o servidor vai renderizar com o Handlebars.

- **`layouts/main.handlebars`** → layout base do site (cabeçalho, rodapé, etc.)
- **`index.handlebars`** → página inicial, onde as postagens serão exibidas.
- **`form.handlebars`** → página com o formulário para criar um novo post.

---

### 6. `public/assets/`
- Contém os arquivos estáticos do projeto (CSS, JS, imagens, etc).
- Será utilizado para estilização e scripts simples.

---

### 7. Rotas que Devem Ser Criadas (apenas declaradas)

No arquivo `app.js`, criar **as rotas básicas** (sem implementar CRUD):

| Rota         | Método | Função                                                            |
|--------------|--------|-------------------------------------------------------------------|
| `/`          | GET    | Exibir a página inicial (`index.handlebars`)                      |
| `/postagens` | GET    | Exibir lista de postagens (por enquanto, texto de teste)          |
| `/nova`      | GET    | Exibir o formulário de nova postagem (`form.handlebars`)          |
| `/add`       | POST   | Receber os dados do formulário (a lógica será implementada depois)|
| `/testdb`    | GET    | Testar a conexão com o banco de dados (chamar função do db.js)    |

> ⚠️ As rotas devem **responder com mensagens simples** ou **renderizar as páginas**,  
> sem salvar dados ou fazer consultas ainda.

---

### 8. Teste de Conexão com o Banco

No arquivo `models/db.js`, criar uma função para testar se a conexão com o MySQL está funcionando.  
Depois, no `app.js`, criar uma rota `/testdb` que executa essa função e mostra no navegador se deu certo ou não.

---

### 9. Criar Repositório no GitHub

- Criar o arquivo .gitignore e adicionar as restrições abaixo:

```js
**/node_modules
.env
```

- Criar um repositório específico apenas para o projeto Blog no GitHub.
- Nome do repositório: blog-nodejs
- Deixe como público

### 10. Checklist Final da Etapa

Antes de finalizar, verifique se:

- [ ] Todas as pastas e arquivos foram criados conforme o modelo.  
- [ ] O arquivo `app.js` inicializa o servidor sem erros.  
- [ ] O Handlebars foi configurado corretamente e renderiza uma página de teste.  
- [ ] O banco de dados MySQL foi configurado no `db.js`.  
- [ ] A função de teste do banco retorna sucesso.  
- [ ] As rotas básicas (`/`, `/nova`, `/postagens`, `/testdb`) estão criadas.  
- [ ] As páginas Handlebars estão na pasta `views/`.  

