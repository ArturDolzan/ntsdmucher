# Backend teste ntsdmucher

Este é um pequeno projeto de amostra da aplicação de técnicas e ferramentas para a construção de um backend NodeJS. 
Obs: A criação de chave de api na plataforma giphy estava retornando erro 500, impossibilitando a execução da tarefa de retornar a URL da gif.

Abaixo o que foi aplicado para o setup:

  - Servidor http express
  - Eslint aplicando standard guidelines
  - Prettier
  - Typescript
  - ts-node-dev para transpilar typescript para js durante dev
  - babel para transpilar typescript para js durante build
  - docker compose para orquestrar containers (app e database)
  - ambiente de testes automatizados funcionais utilizando jest

# Executar ambiente de desenvolvimento

 Para executar o ambiente de dev, apenas é necessário rodar no terminal os comandos yarn (instala as dependências) e docker-compose up. Este comando irá orquestrar um container: 
  1 - Aplicação nodeJS
  
 Mas também é possível executar por "yarn dev" (eu prefiro sempre executar o node no terminal do VS e o docker executar tudo o que é necessário de infra (bancos SQL, NOSQL, Redis, etc))
    
# Rota
 
    Get: /recipes?i=onions,tomato
    
# Testes funcionais automatizados (Jest)

 Para executar os testes funcionais, é necessário rodar no terminal o comando yarn test.
 
    Testes executados
  - Chamar o serviço que consome a api recipe puppy, verificando se houve um retorno satisfatório
  
  # Build
  
   Para fazer um deploy, basta executar yarn build. O babel irá gerar uma pasta dist no diretório raiz da aplicação =D
 