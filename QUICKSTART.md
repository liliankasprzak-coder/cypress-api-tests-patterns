# Guia Rápido - Cypress API Tests Patterns

**Autora:** Lilian Kasprzak  
**Status:** ✅ 250 testes passando (100%)

## 🚀 Início Rápido (3 passos)

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

**Pronto!** Os testes devem executar e todos devem passar ✅

---

## 📊 Resultados Esperados

```
  ✓ 27 testes de API (exercicio1_APIs_patterns)
  ✓ 9 testes de Data Layer (loja-shopping)
  ✓ 20 testes com Design Patterns (loja-shopping-patterns)
  ✓ 194 testes de UI (exercicio2_commitquality_tests)
  
  250 passing (10m)
```

---

## 🎯 Executar Testes Específicos

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

## 🔍 Verificar se Está Funcionando

### Teste Rápido (1 arquivo)
```bash
npx cypress run --spec "cypress/e2e/loja-shopping-patterns/data-layer-cart-purchase-patterns.cy.js" --config specPattern="cypress/e2e/**/*.cy.js"
```

**Resultado esperado:** 10 passing ✅

---

## 📦 Dependências Necessárias

Tudo será instalado automaticamente com `npm install`:

- `cypress@^15.5.0` - Framework de testes
- `@faker-js/faker@^10.1.0` - Geração de dados fake
- `ajv@^8.17.1` - Validação de JSON Schema

---

## 🛠️ Troubleshooting

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

### Problema: Erro do Faker
**Solução:** O projeto já está configurado corretamente. Se houver erro:
```bash
npm install @faker-js/faker --save-dev
```

---

## 📂 Estrutura Principal

```
cypress-api-tests-patterns/
├── cypress/
│   ├── e2e/
│   │   ├── exercicio1_APIs_patterns/         ← Testes de API
│   │   ├── loja-shopping-patterns/           ← Design Patterns aplicados
│   │   └── exercicio2_commitquality_tests/   ← Testes de UI
│   └── support/
│       ├── builders/                          ← Builder Pattern
│       ├── factories/                         ← Factory Pattern
│       └── validators/                        ← Strategy Pattern
├── package.json
└── README.md                                  ← Documentação completa
```

---

## 🎓 Design Patterns Implementados

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

## ✅ Checklist de Verificação

- [ ] Node.js instalado (v18+)
- [ ] Repositório clonado
- [ ] `npm install` executado
- [ ] Testes executados com sucesso
- [ ] 250 testes passando

---

## 📞 Suporte

Se encontrar problemas:

1. Verifique se o Node.js está instalado: `node --version`
2. Reinstale as dependências: `npm install`
3. Execute os testes novamente

---

**Data:** 27/10/2025  
**Versão:** 1.0.0  
**Licença:** MIT
