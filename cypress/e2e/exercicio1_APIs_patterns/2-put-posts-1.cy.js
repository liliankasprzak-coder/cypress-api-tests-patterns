// Testes de API - PUT /posts/1 (Builder Pattern aplicado)
// Autora: Lilian Kasprzak
const { createTestData } = require('../../support/builders/TestDataBuilder');

describe('API - PUT /posts/1', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const endpoint = '/posts/1';
  const payload = createTestData().asValidPost().build();
  payload.id = 1;
  payload.title = 'Título atualizado';
  payload.body = 'Conteúdo atualizado';

  it('Valida o status code 200 para PUT /posts/1', () => {
    cy.request('PUT', baseUrl + endpoint, payload).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Valida o tempo de resposta menor que 500ms', () => {
    const start = Date.now();
    cy.request('PUT', baseUrl + endpoint, payload).then(() => {
      const duration = Date.now() - start;
      expect(duration).to.be.lessThan(500);
    });
  });

  it('Valida o corpo de resposta a nível de schema', () => {
    cy.request('PUT', baseUrl + endpoint, payload).then((response) => {
      expect(response.body).to.be.an('object');
      expect(response.body).to.include.all.keys('id', 'title', 'body', 'userId');
      expect(response.body.id).to.eq(1);
      expect(response.body.title).to.eq('Título atualizado');
      expect(response.body.body).to.eq('Conteúdo atualizado');
      expect(response.body.userId).to.eq(payload.userId);
    });
  });
});
