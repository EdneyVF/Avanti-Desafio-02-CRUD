# Desafio 02 Avanti Bootcamp - Operações CRUD com foco em Backend

Criação de uma plataforma de gerenciamento de eventos culturais com foco no desenvolvimento do backend. A plataforma permite aos organizadores de eventos criar e listar eventos, e aos participantes explorar, pesquisar e filtrar eventos com base em categorias, locais e datas.

Ferramentas para execução:

1. `PostgreSQL`
2. `DBeaver` (Visualização dos dados)
3. `Postman` ou ferramenta similar para execução do métodos

How to execute:

1. Clonar repositório

   ```
   git clone https://github.com/EdneyVF/Avanti-Desafio-02-CRUD
   ```

2. Instalar dependências

   ```
   npm install
   ```

3. Configurar arquivo `.env` na raiz do projeto

   ```
   DATABASE_URL="postgresql://user:password@localhost:db_port/db_name?schema=public"

   SECRET_KEY_JWT=key_name
   ```

4. Realizar migração do banco PostgreSQL

   Comando deve ser executado na pasta `/src`

   ```
   npx prisma migrate dev
   ```

5. Executar o servidor

   ```
   npm run dev
   ```

How to use:

1. Acessar servidor

   ```
   http://localhost:3000/
   ```

2. Realizar criação de usuario Admin

   ```
   http://localhost:3000/admin/signup
   ```

   ```json
   {
     "email": "example@example.com",
     "passwaord": "password"
   }
   ```

3. Realizar login Admin

   ```json
   {
     "email": "example@example.com",
     "passwaord": "password"
   }
   ```

   Copiar seu token gerado:

   ```json
   "token": "seu_token"
   ```

4. Usar token para autenticar seus métodos de Admin

   Usar opção de autenticação `Bearer Token`

   Exemplo:

   ```
   http://localhost:3000/organizer/get-events
   ```

5. Opcional

   ```
   Testar outros métodos, use o sistema e seja feliz :)
   ```
