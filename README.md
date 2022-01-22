### SCHIAVONI POKER HOUSE ###

# SOBRE O PROJETO

Esta a api do projeto Schiavoni Poker House, uma casa para a prática do jogo de Poker e 
fortalecimento de amizades.

# TECNOLOGIAS UTILIZADAS 

## BACKEND

Typescript, NodeJs, Express, JWT, Multer, Docker, Swagger.

## FRONTEND 

Typescrip, React-Native, Styled-Components, Expo.

# COMO EXECUTAR O PROJETO

## Clonar o repositório


## Entrar na pasta do projeto
schiavoni-backend

## Executar o projeto no terminal
yarn typeorm migration:run
docker-compose up

# CADASTRO DE USUÁRIOS

**REQUISITOS FUNCIONAIS**

Deve ser possível cadastrar um novo usuário.
Deve ser possível buscar um usuário por email ou id.

**REQUISITOS NÃO FUNCIONAIS**

A senha do usuário deve ser criptografada com a lib bcryptjs.
Salvar todos os dados da aplicação em uma database "Postgres".

**REGRAS DE NEGÓCIO**

O usuário não deve poder cadastrar um email repetido.
A senha do usuário deve ser criptografada.


# AUTENTICAÇÃO DE USUÁRIOS

**REQUISITOS FUNCIONAIS**

Deve ser possível autenticar um novo usuário.
Ao ser autenticado deve ser gerado um token de autenticação.

**REQUISITOS NÃO FUNCIONAIS**

O token deve ser gerado com a lib JWT.
Utilizar o Jest para realização de testes automatizados.

**REGRAS DE NEGÓCIO**

Não deve ser possível autenticar um usuário com email ou senha incorretos.
O token deve ter expiração máxima em 1 dia.


# CADASTRO DE NOVA PARTIDA

**REQUISITOS FUNCIONAIS**



**REQUISITOS NÃO FUNCIONAIS**



**REGRAS DE NEGÓCIO**




# AUTOR

Luís Henrique Pereira

https://www.linkedin.com/in/luis-h-pereira-nodejs-react-native/

lh.p@hotmail.com
