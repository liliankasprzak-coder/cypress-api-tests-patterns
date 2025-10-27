// Strategy Pattern: Validador de eventos de data layer
// Autora: Lilian Kasprzak

class DataLayerValidator {
  constructor() {
    this.validations = [];
  }

  // Validar nome do evento
  validateEventName(expectedEvent) {
    this.validations.push((dataLayerEvent) => {
      expect(dataLayerEvent.event).to.equal(expectedEvent);
    });
    return this;
  }

  // Validar campos obrigatórios
  validateRequiredFields(fields) {
    this.validations.push((dataLayerEvent) => {
      fields.forEach(field => {
        const keys = field.split('.');
        let value = dataLayerEvent;
        
        keys.forEach(key => {
          expect(value).to.have.property(key);
          value = value[key];
        });
      });
    });
    return this;
  }

  // Validar estrutura de items
  validateItemsStructure(requiredItemFields = ['item_id', 'item_name', 'price']) {
    this.validations.push((dataLayerEvent) => {
      expect(dataLayerEvent.ecommerce).to.have.property('items');
      expect(dataLayerEvent.ecommerce.items).to.be.an('array');
      
      dataLayerEvent.ecommerce.items.forEach(item => {
        requiredItemFields.forEach(field => {
          expect(item).to.have.property(field);
        });
      });
    });
    return this;
  }

  // Validar valor específico de um campo
  validateFieldValue(fieldPath, expectedValue) {
    this.validations.push((dataLayerEvent) => {
      const keys = fieldPath.split('.');
      let value = dataLayerEvent;
      
      keys.forEach(key => {
        // Suportar acesso a arrays como items[0]
        const arrayMatch = key.match(/^(\w+)\[(\d+)\]$/);
        if (arrayMatch) {
          const arrayName = arrayMatch[1];
          const index = parseInt(arrayMatch[2], 10);
          value = value[arrayName][index];
        } else {
          value = value[key];
        }
      });
      
      expect(value).to.equal(expectedValue);
    });
    return this;
  }

  // Validar quantidade de items
  validateItemsCount(expectedCount) {
    this.validations.push((dataLayerEvent) => {
      expect(dataLayerEvent.ecommerce.items).to.have.length(expectedCount);
    });
    return this;
  }

  // Validar valor total calculado
  validateCalculatedTotal() {
    this.validations.push((dataLayerEvent) => {
      const items = dataLayerEvent.ecommerce.items;
      const calculatedTotal = items.reduce((sum, item) => {
        return sum + (item.price * (item.quantity || 1));
      }, 0);
      
      expect(dataLayerEvent.ecommerce.value).to.equal(calculatedTotal);
    });
    return this;
  }

  // Validar moeda
  validateCurrency(expectedCurrency = 'BRL') {
    this.validations.push((dataLayerEvent) => {
      expect(dataLayerEvent.ecommerce.currency).to.equal(expectedCurrency);
    });
    return this;
  }

  // Validar evento de compra completo
  validatePurchaseEvent() {
    return this
      .validateEventName('purchase')
      .validateRequiredFields([
        'event',
        'ecommerce.transaction_id',
        'ecommerce.value',
        'ecommerce.currency',
        'ecommerce.items'
      ])
      .validateItemsStructure();
  }

  // Validar evento add_to_cart completo
  validateAddToCartEvent() {
    return this
      .validateEventName('add_to_cart')
      .validateRequiredFields([
        'event',
        'ecommerce.currency',
        'ecommerce.value',
        'ecommerce.items'
      ])
      .validateItemsStructure();
  }

  // Validar evento view_item completo
  validateViewItemEvent() {
    return this
      .validateEventName('view_item')
      .validateRequiredFields([
        'event',
        'ecommerce.currency',
        'ecommerce.value',
        'ecommerce.items'
      ])
      .validateItemsStructure();
  }

  // Executar todas as validações
  validate(dataLayerEvent) {
    this.validations.forEach(validation => {
      validation(dataLayerEvent);
    });
  }
}

function createDataLayerValidator() {
  return new DataLayerValidator();
}

module.exports = { DataLayerValidator, createDataLayerValidator };
