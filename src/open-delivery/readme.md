# Documentação API Open Delivery
Este diretório contém os arquivos da API Open Delivery em OpenAPI. 

**Atenção:** não atualize diretamente o arquivo em api-open-delivery/openapi.json. Este arquivo é gerado automaticamente ao executar o script `build-openapi.js`.

## Estrutura
A estrutura da documentação está separada em arquivos json na raiz e em diretórios.

- `main.json`: contém informações principais do OpenAPI, como titulo, descrição, etc...
- `componenets.json`: contém a seção components do OpenAPI.
- `/paths/**.json`: Contém em cada arquivo o endpoint da API.
- `/webhooks/**.json`: Contém em cada arquivo os eventos webhook.

