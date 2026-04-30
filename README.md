# BMTech Brasil

_Website_ institucional da BMTech Brasil, desenvolvido com Angular e Tailwind CSS.

## Stack

- TypeScript
- Angular 21
- Tailwind CSS
- EmailJS


## Requisitos

- Node.js (LTS)
- npm

## Local

Na raiz do projeto, instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

Acesse:

```text
http://localhost:4200
```

## Build

Para gerar a `build`:

```bash
npm run build
```

Os arquivos finais sÃ£o gerados em `dist/`.

## NPM Scripts 

- `npm start`: inicia o servidor local com recarregamento
- `npm run build`: gera a `build`
- `npm run watch`: gera `build` em modo `watch`
- `npm test`: executa os testes configurados no projeto - **## TODO ##**

## Estrutura

- `src/app/core`: componentes compartilhados, como `navbar` e `footer`
- `src/app/features`: páginas e funcionalidades principais do _site_
- `public`: imagens e arquivos estáticos

## Rotas

- `/`: Página Inicial
- `/solutions/sectigo`: Página -  Sectigo
- `/solutions/scm`: Página - SCM
- `/solutions/vmc`: Página VMC
- `/solutions/portal-flex`: Página Portal Flex
- `/solutions/monitoramento`: Página de Serviços de Monitoramento
- `/tools/csr-decoder`: CSR Decoder

## CSR Decoder

A pÃ¡gina ` /tools/csr-decoder ` permite analisar uma Certificate Signing Request (CSR) diretamente no navegador.

Atualmente, utiliza o [`Forge`](https://www.npmjs.com/package/node-forge) via CDN.

## Certificate Decoder - ## TODO ##

Ferramenta para decodificação dos certificados, também codificados no padrão PEM.
