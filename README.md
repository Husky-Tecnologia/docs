# Documentação Husky - Mintlify

Este repositório concentra a documentação pública da Husky construída com Mintlify. Aqui estão organizadas páginas de guia, referências de API e descrições dos componentes OpenAPI utilizados para gerar a experiência interativa na web.

## Estrutura do projeto

**IMPORTANTE:** não atualizar diretamente o arquivo openapi.json, pois é um arquivo autogerado.

- `docs.json`: arquivo principal que define navegação, temas e agrupamento das páginas.
- `index.mdx`, `quickstart.mdx`, `development.mdx`: páginas base da documentação principal.
- `api-reference/`: documentação da API pública, incluindo arquivos `.mdx` e o `openapi.json` consumido pelos componentes Mintlify.
- `api-open-delivery/`: documentação específica da integração Open Delivery, com guias, webhooks e o respectivo `openapi.json`.
- `src/api/` e `src/open-delivery/`: fontes dos componentes e bundlers utilizados para gerar os esquemas OpenAPI e blocos reutilizáveis nas páginas.
- `images/` e `logo/`: ativos estáticos (imagens e logotipos) referenciados nas páginas.

## Pré-requisitos

- Node.js 16+ (recomendado 18 ou 20).
- [Mintlify CLI](https://www.npmjs.com/package/mint) instalado globalmente:

```
npm install -g mint
```

## Ambiente de desenvolvimento

1. Instale dependências compartilhadas (se houver) conforme sua stack local.
2. Na raiz do repositório (`docs.json`), execute:

```
mint dev
```

3. Acesse `http://localhost:3000` para visualizar as alterações. O servidor recarrega automaticamente quando arquivos `.mdx`, `.json` ou assets mudam.

### Dicas úteis

- Arquivos em `src/**` alimentam os componentes usados nos `.mdx`. Ajustes nesses JSONs refletem nas tabelas, endpoints e exemplos renderizados.
- Rode o script `build-openapi.js` para atualizar o arquivo openapi.json.
- Utilize `mint update` para manter o CLI atualizado caso encontre erros de build ou visualização.

## Publicação

A publicação automática está integrada via Mintlify. Faça push das alterações na branch principal para disparar a sincronização com o painel Mintlify. Confirme no [dashboard da Mintlify](https://dashboard.mintlify.com/) se o repositório está conectado ao app do GitHub/Husky.

## Referências

- [Mintlify Docs](https://mintlify.com/docs)
- [Guia de componentes Mintlify](https://mintlify.com/docs/components)
- [Suporte Husky](https://www.gohusky.net/)
