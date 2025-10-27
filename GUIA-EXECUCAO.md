# Guia de Execução - Testes Cypress

**Autor:** Lilian  
**Data:** 21/10/2025

## Comandos Principais

### Executar Todos os Testes
```bash
npm run test:all
```

### Executar Por Exercício
```bash
# Exercício 1 - API Tests
npm run test:exercicio1

# Exercício 2 - Web Tests  
npm run test:exercicio2
```

### Executar Teste Específico
```bash
# API específica
npx cypress run --spec "cypress/e2e/exercicio1/get-posts.cy.js"

# Web específico
npx cypress run --spec "cypress/e2e/exercicio2/tela-login.cy.js"
```

### Interface Gráfica
```bash
npm run cypress:open
```

## Estrutura dos Testes

### Exercício 1 - API (JSONPlaceholder)
Cada arquivo possui 4 testes:
1. Validar status code
2. Validar tempo de resposta < 500ms  
3. Validar schema JSON
4. Cenário negativo (falha intencional)

### Exercício 2 - Web (CommitQuality)
- **tela-login.cy.js**: 9 cenários de login
- **tela-learn.cy.js**: 1 cenário de navegação

## Resultados Esperados
- **21 testes passando** (validações principais)
- **7 testes falhando** (cenários negativos intencionais)
- **9 testes web passando** (interface)

## Arquivos de Documentação
Cada endpoint possui arquivo `.txt` em formato Gherkin com os cenários documentados na pasta `exercicio1/`.