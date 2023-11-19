# Desafio 02 Avanti Bootcamp - Operações CRUD com foco em Backend

Criação de uma plataforma de gerenciamento de eventos culturais com foco no desenvolvimento do backend. A plataforma permite aos organizadores de eventos criar e listar eventos, e aos participantes explorar, pesquisar e filtrar eventos com base em categorias, locais e datas.

Documentação do Código: Plataforma de Gerenciamento de Eventos Culturais
Introdução
Esta documentação abrange o código-fonte do backend de uma plataforma de gerenciamento de eventos culturais, escrito em TypeScript usando o framework Express. A plataforma permite que organizadores criem e listem eventos, enquanto participantes podem explorar, pesquisar e filtrar eventos com base em categorias, locais e datas. O código utiliza o Prisma como ORM para interação com o banco de dados.

Estrutura do Projeto
O projeto é dividido em duas classes principais: AdminController e ParticipantController. Cada classe corresponde a um conjunto específico de funcionalidades, sendo AdminController responsável por operações CRUD relacionadas a eventos, categorias e locais, enquanto ParticipantController oferece funcionalidades específicas para os participantes da plataforma.

Dependências
O código utiliza as seguintes dependências:

express: Framework web para Node.js.
prismaClient: ORM para interação com o banco de dados.
typescript: Linguagem de programação.
Outras dependências listadas no arquivo de configuração package.json.
Métodos Comuns
Ambas as classes compartilham alguns métodos comuns para obtenção de informações gerais.

getAllEvents
Descrição: Obtém todos os eventos cadastrados.

Rota (Admin): GET /events

Rota (Participant): GET /participant/events

Parâmetros: Nenhum.

getAllCategories
Descrição: Obtém todas as categorias cadastradas.

Rota (Admin): GET /categories

Rota (Participant): Não aplicável.

Parâmetros: Nenhum.

getAllLocals
Descrição: Obtém todos os locais cadastrados.

Rota (Admin): GET /locals

Rota (Participant): Não aplicável.

Parâmetros: Nenhum.

Métodos - AdminController
A classe AdminController fornece operações CRUD relacionadas a eventos, categorias e locais.

Métodos de Eventos
createEvent
Descrição: Cria um novo evento.

Rota: POST /events

Parâmetros:

name: Nome do evento.
date: Data do evento.
categoryId: ID da categoria do evento.
locationId: ID do local do evento.
updateEvent
Descrição: Atualiza um evento existente.

Rota: PUT /events/:id

Parâmetros:

id: ID do evento a ser atualizado.
name: Novo nome do evento.
date: Nova data do evento.
categoryId: Novo ID da categoria do evento.
locationId: Novo ID do local do evento.
deleteEvent
Descrição: Exclui um evento.

Rota: DELETE /events/:id

Parâmetros:

id: ID do evento a ser excluído.
Métodos de Categorias
createCategory
Descrição: Cria uma nova categoria.

Rota: POST /categories

Parâmetros:

name: Nome da categoria.
updateCategory
Descrição: Atualiza uma categoria existente.

Rota: PUT /categories/:id

Parâmetros:

id: ID da categoria a ser atualizada.
name: Novo nome da categoria.
deleteCategory
Descrição: Exclui uma categoria.

Rota: DELETE /categories/:id

Parâmetros:

id: ID da categoria a ser excluída.
Métodos de Locais
createLocal
Descrição: Cria um novo local.

Rota: POST /locals

Parâmetros:

name: Nome do local.
updateLocal
Descrição: Atualiza um local existente.

Rota: PUT /locals/:id

Parâmetros:

id: ID do local a ser atualizado.
name: Novo nome do local.
deleteLocal
Descrição: Exclui um local.

Rota: DELETE /locals/:id

Parâmetros:

id: ID do local a ser excluído.
Métodos - ParticipantController
A classe ParticipantController fornece funcionalidades específicas para os participantes da plataforma.

Métodos de Eventos para Participantes
getEventByLocal
Descrição: Obtém eventos com base no local solicitado pelo participante.

Rota: GET /participant/events/local/:local

Parâmetros:

local: ID do local desejado.
getEventByDate
Descrição: Obtém eventos com base na data solicitada pelo participante.

Rota: GET /participant/events/date/:date

Parâmetros:

date: Data desejada (no formato 'YYYY-MM-DD').
getEventByCategory
Descrição: Obtém eventos com base na categoria solicitada pelo participante.

Rota: GET /participant/events/category/:category

Parâmetros:

category: ID da categoria desejada.
Tratamento de Erros
Em caso de erro durante a execução de qualquer operação, as rotas respondem com um código de status 500 e um objeto JSON contendo a mensagem de erro correspondente.

Conclusão
Esta documentação fornece uma visão abrangente do código-fonte do backend da plataforma de gerenciamento de eventos culturais. As classes AdminController e ParticipantController oferecem funcionalidades específicas para organizadores e participantes, respectivamente, proporcionando uma experiência completa e personalizada na exploração e gestão de eventos culturais.