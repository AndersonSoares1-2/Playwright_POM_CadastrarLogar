# Playwright_POM_CadastrarLogar

Projeto de exemplo usando Playwright com padrão Page Object Model (POM) para automatizar cenários de cadastro e login.

## Sobre

Este repositório contém uma estrutura simples para testar fluxos de cadastro e autenticação usando Playwright Test e o padrão POM. O objetivo é manter testes legíveis, reutilizáveis e fáceis de manter separando a lógica das páginas (page objects) dos próprios testes.

## Tecnologias

- Node.js
- Playwright Test (@playwright/test)

> Observação: este projeto usa `@playwright/test` conforme indicado no `package.json`.

## Pré-requisitos

- Node.js (recomenda-se v14+; v18+ é preferível)
- npm (ou pnpm/yarn)

## Instalação

Abra um terminal na pasta do projeto e execute:

```powershell
npm install
```

Instale os navegadores que o Playwright usa para executar os testes:

```powershell
npx playwright install
```

Se quiser instalar apenas navegadores específicos (chromium, firefox, webkit):

```powershell
npx playwright install chromium firefox webkit
```

## Como rodar os testes

Sem alterar `package.json`:

```powershell
npx playwright test
```

Rodar um ficheiro de teste específico:

```powershell
npx playwright test tests/example.spec.ts
```

Rodar em modo visível (headed) para depuração:

```powershell
npx playwright test --headed
```

Gerar/abrir o relatório HTML após a execução:

```powershell
npx playwright show-report
```

Sugestão: adicione um script útil ao `package.json` para facilitar a execução:

```json
"scripts": {
	"test": "playwright test"
}
```

Então você pode usar `npm test`.

## Estrutura do projeto

- `playwright.config.ts` - Configurações do Playwright (timezones, baseURL, retries, projetos, etc.).
- `package.json` - Dependências de desenvolvimento e scripts.
- `pages/` - Page Objects (POM). Ex.: `logica.ts` contém seletores e métodos da(s) página(s).
- `tests/` - Especificações / testes. Ex.: `example.spec.ts` mostra um caso de exemplo.

Arquivos principais atuais:

- `pages/logica.ts` — contém a abstração das ações (preencher formulários, clicar em botões).
- `tests/example.spec.ts` — teste de exemplo que consome os page objects.

## Como adicionar novos testes (guia rápido)

1. Crie ou atualize um page object em `pages/` com seletores e métodos que representem ações da página.
2. No `tests/`, importe o page object e escreva o fluxo como um teste Playwright usando fixtures (`test`, `expect`).
3. Execute `npx playwright test` e verifique o relatório com `npx playwright show-report`.

Exemplo mínimo de uso em um teste:

```ts
import { test, expect } from "@playwright/test";
import { LogicaPage } from "../pages/logica";

test("exemplo de cadastro", async ({ page }) => {
  const logica = new LogicaPage(page);
  await logica.goto();
  await logica.preencherFormulario({
    nome: "Teste",
    email: "teste@example.com",
  });
  await logica.submit();
  await expect(page).toHaveURL(/success/);
});
```

## Contribuindo

1. Abra uma issue descrevendo o problema ou a melhoria.
2. Crie um branch, implemente a alteração e envie um pull request com descrição clara.

# Playwright_POM_CadastrarLogar
