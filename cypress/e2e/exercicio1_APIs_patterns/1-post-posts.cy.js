// Testes de API - POST /posts (Builder Pattern aplicado)
// Autora: Lilian Kasprzak
const { createTestData } = require('../../support/builders/TestDataBuilder');

describe('API - POST /posts', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const endpoint = '/posts';
  const payload = createTestData().asValidPost().build();

  it('Valida o status code 201 para POST /posts', () => {
    cy.request('POST', baseUrl + endpoint, payload).then((response) => {
      expect(response.status).to.eq(201);
    });
  });

  it('Valida o tempo de resposta menor que 500ms', () => {
    const start = Date.now();
    cy.request('POST', baseUrl + endpoint, payload).then(() => {
      const duration = Date.now() - start;
      expect(duration).to.be.lessThan(500);
    });
  });

  it('Valida o corpo de resposta a nível de schema', () => {
    cy.request('POST', baseUrl + endpoint, payload).then((response) => {
      expect(response.body).to.be.an('object');
      expect(response.body).to.include.all.keys('id', 'title', 'body', 'userId');
      expect(response.body.title).to.eq(payload.title);
      expect(response.body.body).to.eq(payload.body);
      expect(response.body.userId).to.eq(payload.userId);
    });
  });
});
