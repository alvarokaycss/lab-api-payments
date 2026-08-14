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

Durante a execução do desafio prático, vivenciei um pouco de como realmente funciona o ciclo de vida do desenvolvimento de entrega de software.

**O que acertei:**
- Estruturação da API com Node.js, Express e TypeScript.
- Criação das rotas com validações e respostas HTTP adequadas.
- Criação de tags de versão e configuração de proteção na branch main.
- Implementação de testes automatizados de integração usando o test runner nativo do Node e Supertest.
- Execução impecável do fluxo de Pull Requests (feature -> dev -> stage -> main) na etapa final (case de testes).

**O que aprendi errando:**
- Na primeira tentativa de integração de código, pulei a branch `dev` e fiz o merge do PR direto na `stage`. Isso dessincronizou os ambientes locais e remotos. A lição tirada foi a extrema importância de sempre conferir a branch de destino (Base branch) ao abrir um Pull Request, garantindo que o código passe por todas as esteiras na ordem correta.
