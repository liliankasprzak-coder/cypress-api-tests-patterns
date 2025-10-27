# Design Patterns Implementados

**Autor:** Lilian  
**Data:** 21/10/2025  

Este projeto implementa vários **Design Patterns** para tornar os testes mais organizados, reutilizáveis e seguir boas práticas de desenvolvimento.

## Patterns Implementados

### 1. **Page Object Model (POM)**
`cypress/support/pages/LoginPage.js`

**Propósito:** Encapsular elementos e ações da página em uma classe.

**Benefícios:**
- Manutenibilidade - mudanças de UI em um só lugar
- Reutilização - mesma página em vários testes
- Fluent Interface - métodos encadeados

**Uso:**
```javascript
const loginPage = new LoginPage();
loginPage.visit()
         .fillUsername('usuario')
         .fillPassword('senha')
         .clickLogin();
```

### 2. **Builder Pattern** 
`cypress/support/builders/TestDataBuilder.js`

**Propósito:** Construir objetos de teste complexos de forma fluente.

**Benefícios:**
- Flexibilidade - dados customizáveis
- Legibilidade - código mais claro
- Presets - dados pré-configurados

**Uso:**
```javascript
const userData = createTestData()
  .asValidUser()
  .withEmail('custom@email.com')
  .build();
```

### 3. **Strategy Pattern**
`cypress/support/validators/ApiValidator.js`

**Propósito:** Diferentes estratégias de validação intercambiáveis.

**Benefícios:**
- Extensibilidade - novas validações facilmente
- Separação - cada validação independente
- Combinação - múltiplas validações juntas

**Uso:**
```javascript
const validator = createValidator()
  .validateStatus(200)
  .validateResponseTime(500)
  .validateArray();
```

### 4. **Command Pattern**
`cypress/support/commands/ApiCommands.js`

**Propósito:** Encapsular requisições de API como objetos.

**Benefícios:**
- Consistência - mesma interface para todas APIs
- Composição - múltiplos comandos
- Medição - tempo de resposta automático

**Uso:**
```javascript
const apiExecutor = createApiExecutor()
  .get('/posts')
  .execute();
```

### 5. **Singleton Pattern**
`cypress/support/config/TestConfig.js`

**Propósito:** Configuração global única em toda aplicação.

**Benefícios:**
- Consistência - mesma config em todos testes
- Centralização - um ponto de configuração
- Flexibilidade - mudança de ambiente fácil

**Uso:**
```javascript
const config = getTestConfig()
  .setEnvironment('staging')
  .setResponseTimeout(1000);
```

## Como Usar

### Teste API com Patterns:
```javascript
// cypress/e2e/exercicio1/get-posts-patterns.cy.js
import { createValidator } from '../../support/validators/ApiValidator.js';
import { createApiExecutor } from '../../support/commands/ApiCommands.js';

const validator = createValidator()
  .validateStatus(200)
  .validateResponseTime(500);

const apiExecutor = createApiExecutor()
  .get('/posts');

apiExecutor.execute().then(({ response, startTime }) => {
  validator.validate(response, startTime);
});
```

### Teste Web com POM:
```javascript
// cypress/e2e/exercicio2/tela-login-patterns.cy.js
import LoginPage from '../../support/pages/LoginPage.js';
import { createTestData } from '../../support/builders/TestDataBuilder.js';

const loginPage = new LoginPage();
const userData = createTestData().asValidUser().build();

loginPage.visit()
         .login(userData.username, userData.password);
```

## Comparação: Antes vs Depois

### Antes (sem patterns):
```javascript
cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then((response) => {
  expect(response.status).to.equal(200);
  expect(response.body).to.be.an('array');
  const responseTime = Date.now() - startTime;
  expect(responseTime).to.be.lessThan(500);
});
```

### Depois (com patterns):
```javascript
const validator = createValidator()
  .validateStatus(200)
  .validateArray()
  .validateResponseTime(500);

createApiExecutor()
  .get('/posts')
  .execute()
  .then(({ response, startTime }) => {
    validator.validate(response, startTime);
  });
```

## Benefícios dos Patterns

1. **Manutenibilidade** - Código mais fácil de manter
2. **Reutilização** - Componentes reutilizáveis
3. **Legibilidade** - Código mais claro e expressivo
4. **Testabilidade** - Testes mais confiáveis
5. **Escalabilidade** - Fácil adicionar novos testes
6. **Padronização** - Estrutura consistente
7. **Separação de Responsabilidades** - Cada classe tem uma função

## Execução

```bash
# Testes com Design Patterns
npx cypress run --spec "cypress/e2e/**/*-patterns.cy.js"

# Teste API específico
npx cypress run --spec "cypress/e2e/exercicio1/get-posts-patterns.cy.js"

# Teste Web específico  
npx cypress run --spec "cypress/e2e/exercicio2/tela-login-patterns.cy.js"
```