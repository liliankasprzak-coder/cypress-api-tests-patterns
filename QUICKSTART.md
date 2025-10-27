# Guia Rápido - Cypress API Tests Patterns

**Autora:** Lilian Kasprzak  
**Status:** 250 testes passando (100%)

## Início Rápido (3 passos)

### 1. Clone o Repositório
```bash
git clone https://github.com/liliankasprzak-coder/cypress-api-tests-patterns.git
cd cypress-api-tests-patterns
```

### 2. Instale as Dependências
```bash
npm install
```

### 3. Execute os Testes
```bash
# Executar TODOS os 250 testes
npx cypress run --config specPattern="cypress/e2e/**/*.cy.js"
```

**Pronto!** Os testes devem executar e todos devem passar.

---

## Resultados Esperados

```
  27 testes de API (exercicio1_APIs_patterns)
  9 testes de Data Layer (loja-shopping)
  20 testes com Design Patterns (loja-shopping-patterns)
  194 testes de UI (exercicio2_commitquality_tests)
  
  250 passing (10m)
```

---

## Executar Testes Específicos

### Apenas APIs (27 testes)
```bash
npm run test:patterns
```

### Apenas Data Layer com Patterns (20 testes)
```bash
npx cypress run --spec "cypress/e2e/loja-shopping-patterns/**/*.cy.js" --config specPattern="cypress/e2e/**/*.cy.js"
```

### Apenas UI (194 testes)
```bash
npx cypress run --spec "cypress/e2e/exercicio2_commitquality_tests/**/*.cy.js" --config specPattern="cypress/e2e/**/*.cy.js"
```

### Modo Interativo
```bash
npm run cypress:open
```

---

## Verificar se Está Funcionando

### Teste Rápido (1 arquivo)
```bash
npx cypress run --spec "cypress/e2e/loja-shopping-patterns/data-layer-cart-purchase-patterns.cy.js" --config specPattern="cypress/e2e/**/*.cy.js"
```

**Resultado esperado:** 10 passing

---

## Troubleshooting

### Problema: "Cannot find module"
**Solução:**
```bash
npm install
```

### Problema: Testes não encontrados
**Solução:** Use o parâmetro `--config specPattern`:
```bash
npx cypress run --config specPattern="cypress/e2e/**/*.cy.js"
```

---

## Design Patterns Implementados

### Builder Pattern
```javascript
const product = createProduct()
  .withId('PROD-001')
  .withName('Notebook')
  .withPrice(299.90)
  .build();
```

### Factory Pattern
```javascript
const eventFactory = createDataLayerEventFactory();
const event = eventFactory.createPurchaseEvent(transactionData);
```

### Strategy Pattern
```javascript
const validator = createDataLayerValidator()
  .validateEventName('purchase')
  .validateCurrency('BRL')
  .validate(dataLayerEvent);
```

---

**Data:** 27/10/2025  
**Versão:** 1.0.0  
**Licença:** MIT
