# App Conversor

Um aplicativo mobile simples para conversão de moedas, desenvolvido com **React Native** e **Expo**.

## Visão Geral

O projeto permite que o usuário selecione uma moeda de origem e uma moeda de destino, informe um valor e converta o valor usando a taxa de câmbio atual obtida de uma API.

## Tecnologias

- Expo SDK `~53.0.22`
- React `19.0.0`
- React Native `0.79.6`
- JavaScript

## Estrutura do Projeto

```
app-conversor/
├── App.js
├── app.json
├── app.styles.js
├── index.js
├── package.json
├── README.md
└── src/
    ├── components/
    │   ├── Buttom/
    │   │   ├── index.js
    │   │   └── styles.js
    │   ├── Input/
    │   │   ├── index.js
    │   │   └── styles.js
    │   └── ResultCrad/
    │       ├── index.js
    │       └── styles.js
    ├── constants/
    │   └── currencies.js
    ├── services/
    │   └── Api.js
    ├── styles/
    │   └── colors.js
    └── utils/
        └── convertCurrency.js
```

## Principais Arquivos

- `App.js` - Componente principal que gerencia estado, lógica de conversão e layout.
- `app.styles.js` - Estilos globais da aplicação.
- `src/components/Buttom/index.js` - Botão personalizado para seleção de moedas.
- `src/components/Input/index.js` - Componente de entrada numérica.
- `src/components/ResultCrad/index.js` - Exibe o resultado da conversão.
- `src/constants/currencies.js` - Lista de moedas suportadas.
- `src/services/Api.js` - Função para buscar taxas de câmbio da API pública.
- `src/utils/convertCurrency.js` - Utilitário para calcular o valor convertido.
- `src/styles/colors.js` - Paleta de cores reutilizável.

## Como Usar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o projeto com Expo:

```bash
npm start
```

3. Execute em plataforma desejada:

```bash
npm run android
npm run ios
npm run web
```

## Funcionalidades

- Seleção de moeda de origem e de destino.
- Entrada de valor numérico.
- Busca de taxa de câmbio em tempo real.
- Conversão e exibição do resultado formatado.
- Botão para trocar as moedas de origem e destino.

## Como Funciona

1. O usuário seleciona as moedas de origem (`fromCurrency`) e destino (`toCurrency`).
2. O usuário insere o valor a ser convertido.
3. Ao tocar em **Converter**, o app chama a API de câmbio em `src/services/Api.js`.
4. A taxa de câmbio é usada por `src/utils/convertCurrency.js` para calcular o valor final.
5. O resultado é exibido em `src/components/ResultCrad/index.js`.

## API de Câmbio

A aplicação consome a API pública:

```js
https://api.exchangerate-api.com/v4/latest/{fromCurrency}
```

A resposta contém taxas de câmbio para a moeda base informada.

## Melhorias Sugeridas

- Validar seleções de moeda antes de buscar a API.
- Tratar estados de erro e exibir mensagens amigáveis na UI.
- Corrigir a propriedade de `ResultCard` para evitar inconsistência de nomes (`fromCurrencyy` e `toCurrency`).
- Adicionar suporte a histórico de conversão.
- Adicionar testes unitários e de componente.
- Melhorar acessibilidade e responsividade.

## Observações

- A interface usa temas escuros com cores definidas em `src/styles/colors.js`.
- O botão de conversão fica desabilitado quando não há valor ou enquanto a requisição está em andamento.
- A lógica de troca entre as moedas está implementada em `App.js` no método `swap()`.

## Scripts Disponíveis

- `npm start` - Inicia o Metro bundler do Expo.
- `npm run android` - Abre o app no Android via Expo Go.
- `npm run ios` - Abre o app no iOS via Expo Go.
- `npm run web` - Executa a versão web no navegador.

## Contato

Este projeto é uma aplicação de demonstração para conversão de moedas com React Native e Expo.
