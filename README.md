# Backend - Facilita Jurídico

Esse repositório contém a API do teste.

Acesse o repositório frontend [aqui](https://github.com/brunompe/sparclean-frontend).

## Instalação Backend

```bash
$ npm install
```

## Setando o DB

```bash
$ npm run db:generate
```

## Rodando a aplicação

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## DDl

```bash
CREATE TABLE IF NOT EXISTS "User" (
  "id" SERIAL PRIMARY KEY,
  "email" VARCHAR(255) UNIQUE NOT NULL,
  "password" VARCHAR(255) NOT NULL,
  "name" VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS "Customer" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(255) UNIQUE NOT NULL,
  "email" VARCHAR(255),
  "phone" VARCHAR(255),
  "userId" INTEGER REFERENCES "User" ("id"),
  "x" INTEGER DEFAULT 0,
  "y" INTEGER DEFAULT 0
);

CREATE INDEX IF NOT EXISTS "Customer_userId_idx" ON "Customer" ("userId");

```

## Dados login

```bash
email: admin@facilitajuridico.com
senha: FacilitaJuridico.2024
```

## Stacks

- Nest.js
- Typescript
- PostgreSQL
- Prisma

## Parte 1

Uma empresa que realiza limpeza em residências enfrenta desafios no gerenciamento de seus clientes e busca uma solução eficiente para cadastrar e visualizar as informações que hoje são controladas em planilhas. Para centralizar as informações e ajudar na expansão da empresa, ela deseja uma plataforma onde seja possível gerenciar os seus clientes.

#### Requisitos

- [x] Listar os seus clientes e filtrar com base nas informações cadastradas
- [x] Cadastrar clientes novos

## Parte 2

Suponha que, além de cadastrar e visualizar clientes, a empresa deseja otimizar as rotas de atendimento para maximizar a eficiência na visitação dos clientes. Considere um mapa bidimensional representando a localização dos clientes, onde cada ponto cartesiano possui um cliente. Cada cliente cadastrado possui uma coordenada X e uma coordenada Y nesse mapa.

O objetivo é calcular a rota partindo da empresa (0,0) e que passe pela localização de todos os clientes cadastrados no banco de dados e retorne à empresa no final. A rota deve ser calculada para ter a menor distância possível.

O algoritmo para calcular essa rota deve estar disponibilizado via rota da api para ser chamado pelo front quando necessário.

Implemente um botão na tela de clientes que, ao ser clicado, abre uma modal e mostra a ordem de visitação dos clientes na rota calculada. A visualização pode ser a mais simples possível mostrando uma lista dos clientes na ordem que devem ser visitados do primeiro ao último cliente da rota.

Ao desenvolver essa segunda parte, altere a rota de cadastro e visualização para que seja possível cadastrar e visualizar as coordenadas X e Y dos clientes da empresa.

#### Requisitos

- [x] O algoritmo para calcular as rota deve estar disponibilizado via rota da api
- [x] Implementar botão para visualizar modal com a lista de clientes a serem visitados

## Documentação da API

### Usuários

#### Cria um Usuário

```http
  POST /user
```

##### Exemplo

```
{
    "email": "<email do usuário>",
    "password": "<senha escolhida>",
    "name": "<Nome do Usuário>"
}
```

#### Retorna todos os Usuários

```http
  GET /user
```

#### Retorna um Usuário por Id

```http
  GET /user/id/:id
```

#### Retorna um Usuário por Email

```http
  GET /user/email/:email
```

#### Atualiza um Usuário

```http
  PATCH /user/:id
```

##### Exemplo

```
{
    "email": "<email do usuário>",
    "password": "<senha escolhida>",
    "name": "<Nome do Usuário>"
}
```

### Clientes

#### Cria um Usuário

```http
  POST /customer
```

##### Exemplo

```
{
    "email": "<email do cliente>",
    "phone": "<telefone do cliente>",
    "name": "<nome do cliente>",
    "userId": <id do usuário>
}
```

#### Retorna todos os Clientes de um Usuário

```http
  GET /customer
```

#### Retorna todos a distancia dos Clientes de um Usuário

```http
  GET /customer/distance
```

#### Retorna um Cliente de um Usuário por Id

```http
  GET /customer/:id
```

#### Atualiza um Cliente de um Usuário

```http
  PATCH /customer/:id
```

##### Exemplo

```
{
    "email": "<email do cliente>",
    "phone": "<telefone do cliente>",
    "name": "<nome do cliente>",
    "userId": <id do usuário>
}
```
