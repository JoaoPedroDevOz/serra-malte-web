# Backend API

API REST desenvolvida com **Node.js**, **TypeScript**, **Prisma ORM** e **PostgreSQL**, seguindo uma arquitetura organizada por responsabilidades para facilitar manutenção, escalabilidade e legibilidade do código.

---

# 🚀 Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL
- Zod
- Dotenv
- CORS

---

# 📂 Estrutura do Projeto

```text
backend/
├── dist/                 # Arquivos compilados
├── doc/                  # Documentação da API
├── prisma/               # Schema e migrations do Prisma
│
├── src/
│   ├── apis/             # Integrações externas
│   ├── controllers/      # Controladores das rotas
│   ├── datasource/       # Configuração de acesso aos dados
│   ├── generated/        # Arquivos gerados automaticamente
│   ├── models/           # Interfaces e tipos
│   ├── utils/            # Funções utilitárias
│   ├── validators/       # Validações
│   ├── index.ts          # Inicialização da aplicação
│   └── routes.ts         # Rotas da API
│
├── package.json
├── tsconfig.json
└── README.md
```

---

# ⚙️ Configuração do Ambiente

## Clonar o repositório

```bash
git clone <url-do-repositorio>
cd backend
```

## Instalar dependências

```bash
npm install
```

## Configurar variáveis de ambiente

Crie um arquivo `.env`:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/database"
PORT=3000
```

---

# 🏗️ Criação do Projeto (Referência)

Caso seja necessário recriar o projeto do zero.

## Inicializar projeto

```bash
npm init -y
```

## Dependências de produção

```bash
npm install express cors dotenv @prisma/client
```

## Dependências de desenvolvimento

```bash
npm install -D typescript ts-node ts-node-dev @types/node @types/express prisma
```

## Inicializar TypeScript

```bash
npx tsc --init
```

## Inicializar Prisma

```bash
npx prisma init
```

---

# 🗄️ Configuração do Prisma

## Banco já existente

### Atualizar schema a partir do banco

```bash
npx prisma db pull
```

### Criar diretório da migration

```bash
mkdir prisma/migrations/<migration_folder_name>
```

### Gerar script SQL da migration

```bash
npx prisma migrate diff \
  --from-empty \
  --to-schema-datamodel prisma/schema.prisma \
  --script > prisma/migrations/<migration_folder_name>/migration.sql
```

### Exemplo

```bash
npx prisma migrate diff \
  --from-empty \
  --to-schema prisma/schema.prisma \
  --script > prisma/migrations/20260523002219_init/migration.sql
```

### Gerar Prisma Client

```bash
npx prisma generate
```

---

## Banco novo

### Criar migration

```bash
npx prisma migrate dev --name init
```

### Gerar Prisma Client

```bash
npx prisma generate
```

### Abrir Prisma Studio

```bash
npx prisma studio
```

---

# ▶️ Executando o Projeto

## Desenvolvimento

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Produção

```bash
npm start
```

---

# 📌 Scripts

```json
{
  "dev": "ts-node-dev --respawn src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}
```

---

# 🏛️ Arquitetura

Fluxo da aplicação:

```text
Request
   ↓
Routes
   ↓
API
   ↓
Controllers
   ↓
Validators
   ↓
Prisma
   ↓
PostgreSQL
   ↓
Response
```

---

# 🌐 Endpoints

As rotas são centralizadas em:

```text
src/routes.ts
```

A documentação completa da API encontra-se na pasta:

```text
doc/
```

---

# 👨‍💻 Boas Práticas

- Utilizar TypeScript em todos os módulos.
- Validar entradas utilizando validators.
- Centralizar regras de negócio nos controllers.
- Utilizar Prisma para acesso ao banco.
- Manter funções reutilizáveis em `utils`.
- Não acessar o banco diretamente pelas rotas.

---

# 📄 Licença

Licenciado sob a licença MIT.
