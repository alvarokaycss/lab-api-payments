# Desafio prático - Git, Ambientes e Pull Requests

**Agentic Payments · Hands-on de versionamento**

O objetivo deste desafio é praticar o ciclo completo de uma mudança de código, do ambiente de desenvolvimento até a produção, usando branches, commits e Pull Requests. Ao final, cada pessoa deve entender na prática como uma alteração percorre o caminho `dev → stage → prod` de forma controlada.

## Sobre o Projeto

Uma API simples de pagamentos construída em Node.js com Express e TypeScript. Os dados são armazenados em memória durante a execução da aplicação.

## Funcionalidades Implementadas

- `POST /payments`: Cria um novo pagamento e valida os dados de entrada (moeda, pagador, recebedor e valor positivo).
- `GET /payments`: Lista todos os pagamentos armazenados em memória.

## Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor em modo de desenvolvimento:
```bash
npm run dev
```

O servidor iniciará na porta 3000.

## Estrutura de Versionamento

O repositório utiliza três ambientes distintos simulados através de branches:
- `dev`: Ambiente principal de desenvolvimento.
- `stage`: Ambiente de homologação.
- `main`: Ambiente de produção, configurado com proteção de branch.

Novas implementações seguem o fluxo de integração através de Pull Requests, originando-se em branches de feature e subindo até a produção.

## Nota do Autor

Durante a execução deste desafio prático, pude colocar em prática o ciclo de versionamento. 

**O que acertei:**
- Estruturação da API com Node.js e TypeScript.
- Criação das rotas com validações e retorno de status HTTP adequados.
- Criação inicial das três branches obrigatórias e sincronização com o repositório remoto.
- Criação de tags de versão e adição da regra de proteção na branch main.

**Onde me confundi:**
- Durante o fluxo de aprovação da minha nova funcionalidade, acabei fazendo o merge do Pull Request diretamente na branch `stage` (e de lá para a `main`), pulando a integração na branch `dev`. Como resultado, a `dev` acabou ficando desatualizada em relação à produção. Lição aprendida..
