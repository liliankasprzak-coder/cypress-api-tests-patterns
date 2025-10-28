<div align="center">

# 🎨 Cypress API Tests - Design Patterns

### Testes automatizados com Cypress aplicando Design Patterns profissionais

**Autora:** Lilian Kasprzak  
**Função:** Analista de QA  
**Data:** Outubro 2025

---

[![Cypress](https://img.shields.io/badge/Cypress-15.5.0-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://cypress.io)
[![Tests](https://img.shields.io/badge/tests-250%20passing-00C853?style=for-the-badge&logo=checkmarx&logoColor=white)](https://github.com/liliankasprzak-coder/cypress-api-tests-patterns)
[![Patterns](https://img.shields.io/badge/Design%20Patterns-5%2B-9C27B0?style=for-the-badge&logo=databricks&logoColor=white)](https://github.com/liliankasprzak-coder/cypress-api-tests-patterns)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CI](https://img.shields.io/badge/CI-GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/liliankasprzak-coder/cypress-api-tests-patterns/actions)

➡️ **[QUICKSTART - Guia Rápido de 3 Passos](QUICKSTART.md)** ⚡

</div>

---

## 🎯 Sobre o Projeto

Este repositório demonstra **aplicação profissional de Design Patterns** em testes automatizados com Cypress, contendo **250 testes** com 100% de aprovação.

<div align="center">

### 🏗️ Design Patterns Implementados

| Pattern | Uso | Benefício |
|:---|:---|:---|
| 🧱 **Builder** | Construção fluente de produtos e eventos | Código limpo e legível |
| 🏭 **Factory** | Criação padronizada de eventos | Reutilização e consistência |
| 🎯 **Strategy** | Validações customizáveis | Flexibilidade e manutenibilidade |
| 📄 **Page Object** | Organização de pages | Separação de responsabilidades |
| ⚡ **Command** | Comandos Cypress reutilizáveis | DRY (Don't Repeat Yourself) |

### 📊 Cobertura de Testes

</div>

```
┌─────────────────────┬────────┬──────────┐
│ Categoria           │ Testes │ Status   │
├─────────────────────┼────────┼──────────┤
│ 🔌 API Tests        │   27   │ ✅ 100%  │
│ 📦 Data Layer       │   29   │ ✅ 100%  │
│ 🖥️  UI Tests        │  194   │ ✅ 100%  │
│ 🎨 Design Patterns  │   20   │ ✅ 100%  │
├─────────────────────┼────────┼──────────┤
│ TOTAL               │  250   │ ✅ 100%  │
└─────────────────────┴────────┴──────────┘
```

### ✨ Recursos

- ✅ 27 testes de API (JSONPlaceholder - POST/PUT/PATCH)  
- ✅ 29 testes de Data Layer (E-commerce tracking)  
- ✅ 194 testes de UI (CommitQuality.com)  
- ✅ 20 testes com Design Patterns aplicados  
- ✅ Cenários Gherkin (BDD) documentados  
- ✅ Comandos customizados com Faker.js  
- ✅ CI/CD com GitHub Actions

---

## 🛠️ Tecnologias Utilizadas

<div align="center">

| Tecnologia | Versão | Descrição |
|:---:|:---:|:---|
| ![Cypress](https://img.shields.io/badge/Cypress-15.5.0-17202C?logo=cypress&logoColor=white) | `^15.5.0` | Framework de testes E2E |
| ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black) | ES6+ | Linguagem de programação |
| ![Faker](https://img.shields.io/badge/Faker.js-10.1.0-FF6B6B?logo=npm&logoColor=white) | `^10.1.0` | Geração de dados fake |
| ![AJV](https://img.shields.io/badge/AJV-8.17.1-23C4DD?logo=json&logoColor=white) | `^8.17.1` | Validação JSON Schema |
| ![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js&logoColor=white) | 18.x | Runtime JavaScript |

</div>

---

## Estrutura do Projeto

```
cypress-api-tests-patterns/
├── cypress/
│   ├── e2e/
│   │   ├── exercicio1_APIs_patterns/            # Testes de API com patterns
│   │   ├── exercicio2_commitquality_tests/      # Testes de UI
│   │   ├── loja-shopping/                       # Testes de Data Layer
│   │   └── loja-shopping-patterns/              # Testes com Design Patterns
│   ├── fixtures/
│   │   └── schemas/                             # JSON Schemas
│   └── support/
│       ├── builders/                            # EcommerceProductBuilder, DataLayerEventBuilder
│       ├── factories/                           # DataLayerEventFactory
│       ├── validators/                          # DataLayerValidator
│       ├── commands/                            # Exercicio2Commands (cy.navegarPara, etc)
│       ├── pages/                               # Page Objects
│       └── e2e.js                               # Setup global
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

## Execução dos Testes

### Modo Interativo (UI do Cypress)
```bash
npm run cypress:open
```

### Executar TODOS os testes (250 testes)
```bash
npx cypress run --config specPattern="cypress/e2e/**/*.cy.js"
```

### Executar testes específicos

#### Testes de API (27 testes)
```bash
npm run test:patterns
# ou
npx cypress run --spec "cypress/e2e/exercicio1_APIs_patterns/**/*.cy.js"
```

#### Testes de Data Layer com Patterns (20 testes)
```bash
npx cypress run --spec "cypress/e2e/loja-shopping-patterns/**/*.cy.js" --config specPattern="cypress/e2e/**/*.cy.js"
```

#### Testes de Data Layer (9 testes)
```bash
npx cypress run --spec "cypress/e2e/loja-shopping/**/*.cy.js" --config specPattern="cypress/e2e/**/*.cy.js"
```

#### Testes de UI (194 testes)
```bash
npx cypress run --spec "cypress/e2e/exercicio2_commitquality_tests/**/*.cy.js" --config specPattern="cypress/e2e/**/*.cy.js"
```

#### Executar um arquivo específico
```bash
npx cypress run --spec "cypress/e2e/exercicio1_APIs_patterns/1-post-posts.cy.js"
```

---

## Design Patterns Aplicados

### 1. Builder Pattern
**Construção fluente de produtos e eventos:**

```javascript
// Criar produto com preset
const smartphone = createProduct().asSmartphone().build();

// Criar produto customizado
const customProduct = createProduct()
  .withId('PROD-999')
  .withName('Monitor 4K')
  .withPrice(1299.90)
  .withBrand('LG')
  .build();

// Criar evento de data layer
const event = createDataLayerEvent()
  .withEventName('add_to_cart')
  .withCurrency('BRL')
  .withItems([smartphone])
  .calculateTotalValue()
  .build();
```

### 2. Factory Pattern
**Criação padronizada de eventos:**

```javascript
const eventFactory = createDataLayerEventFactory();

// Criar diferentes tipos de eventos
const viewEvent = eventFactory.createViewItemEvent(product);
const cartEvent = eventFactory.createAddToCartEvent(product);
const purchaseEvent = eventFactory.createPurchaseEvent(transactionData);
```

### 3. Strategy Pattern
**Validações customizáveis e encadeadas:**

```javascript
const validator = createDataLayerValidator()
  .validateEventName('purchase')
  .validateCurrency('BRL')
  .validateItemsCount(3)
  .validateCalculatedTotal()
  .validate(dataLayerEvent);
```

### 4. Comandos Customizados
**Comandos Cypress reutilizáveis:**

```javascript
// Navegação
cy.navegarPara('addproduct');

// Preenchimento com Faker
cy.preencherProdutoFaker($campo);
cy.preencherEmailFaker($campo);

// Validação de DataLayer
cy.validarDataLayer('purchase', { value: 299.90 });

// Responsividade
cy.testarResponsividade('body');
```

---

## Resultados dos Testes

### Status Atual: 250/250 testes passando (100%)

| Categoria | Testes | Status |
|-----------|--------|--------|
| APIs com Patterns | 27 | 100% |
| Data Layer | 9 | 100% |
| Data Layer + Patterns | 20 | 100% |
| UI (CommitQuality) | 194 | 100% |
| **TOTAL** | **250** | **100%** |

**Duração total:** ~10 minutos  
**Última execução:** 27/10/2025

---

## Estrutura de Arquivos Criados

### Builders
- `EcommerceProductBuilder.js` - 6 presets de produtos
- `DataLayerEventBuilder.js` - Construção de eventos
- `TestDataBuilder.js` - Dados de teste para APIs

### Factories
- `DataLayerEventFactory.js` - Criação de eventos (view_item, add_to_cart, purchase, etc)

### Validators
- `DataLayerValidator.js` - Validações estratégicas
- `ApiValidator.js` - Validações de API

### Commands
- `Exercicio2Commands.js` - 13 comandos customizados

---

## Contato

**Lilian Kasprzak**  
Analista de QA  

---

## Licença

MIT License - Uso educacional e demonstração de automação de testes.

---

**Última atualização:** 27/10/2025
