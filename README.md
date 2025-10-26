# Cypress API Tests - Design Patterns

> Testes de API com Cypress aplicando Design Patterns (Exercício 1 - refatorado)

**Autora:** Lilian Kasprzak  
**Função:** Analista de QA  
**Data:** Outubro 2025

---

## Sobre o Projeto

Este repositório contém a refatoração dos testes de API do Exercício 1, aplicando Design Patterns como:
- **Builder Pattern** - Para construção de payloads de teste
- **Page Object Pattern** - Organização dos helpers de API
- **Command Pattern** - Comandos customizados reutilizáveis

Os testes utilizam o serviço público JSONPlaceholder (POST/PUT/PATCH) e seguem boas práticas de organização e reutilização de código.

### Objetivos
- Demonstrar aplicação de Design Patterns em testes de API
- Melhorar manutenibilidade e legibilidade do código
- Facilitar extensão e reutilização de componentes

---

## Tecnologias Utilizadas

- **Cypress** - Framework de testes de API
- **JavaScript** - Linguagem de programação
- **Node.js** - Ambiente de execução
- **Design Patterns** - Builder, Page Object, Command

---

## Estrutura do Projeto

```
cypress-api-tests-patterns/
├── cypress/
│   ├── e2e/
│   │   ├── exercicio1_APIs_cenarios_patterns/   # Cenários refatorados
│   │   └── exercicio1_APIs_patterns/            # Testes com patterns (.cy.js)
│   ├── fixtures/
│   │   └── schemas/                             # JSON Schemas para validação
│   └── support/
│       ├── builders/                            # Builder Pattern (TestDataBuilder, etc.)
│       ├── pages/                               # Page Objects para APIs
│       ├── commands/                            # Custom commands
│       ├── config/                              # Configurações compartilhadas
│       └── schema.js                            # Helpers de validação (AJV)
├── cypress.config.js
├── package.json
└── README.md
```

---

## Instalação

### Pré-requisitos
- Node.js 18+ (recomendado)
- npm ou yarn

### Passos

```bash
# 1. Clone o repositório
git clone <url-do-repositorio>

# 2. Entre na pasta do projeto
cd cypress-api-tests-patterns

# 3. Instale as dependências
npm install
```

---

## Execução

### Modo Interativo (UI do Cypress)
```bash
npm run cypress:open
```

### Modo Headless (CLI)
```bash
# Executar os testes de API com patterns
npm run test:patterns

# Executar um arquivo específico (exemplo)
npx cypress run --spec "cypress/e2e/exercicio1_APIs_patterns/1-post-posts.cy.js"
```

---

## Padrões Aplicados

### Builder Pattern
Construção fluente de payloads de teste:
```javascript
const payload = createTestData()
  .asValidPost()
  .build();
```

### Page Object Pattern
Organização de helpers de API em objetos reutilizáveis.

### Command Pattern
Comandos Cypress customizados para operações comuns.

---

## Contato

**Lilian Kasprzak**  
Analista de QA

---

## Licença

Uso educacional e demonstração de automação de testes.

---

**Última atualização:** 26/10/2025