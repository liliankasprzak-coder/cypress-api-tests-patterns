// Builder Pattern: Construtor fluente para eventos de data layer
// Autora: Lilian Kasprzak

class DataLayerEventBuilder {
  constructor() {
    this.event = {
      ecommerce: {}
    };
  }

  withEventName(eventName) {
    this.event.event = eventName;
    return this;
  }

  withCurrency(currency = 'BRL') {
    this.event.ecommerce.currency = currency;
    return this;
  }

  withValue(value) {
    this.event.ecommerce.value = value;
    return this;
  }

  withTransactionId(transactionId) {
    this.event.ecommerce.transaction_id = transactionId;
    return this;
  }

  withAffiliation(affiliation) {
    this.event.ecommerce.affiliation = affiliation;
    return this;
  }

  withTax(tax) {
    this.event.ecommerce.tax = tax;
    return this;
  }

  withShipping(shipping) {
    this.event.ecommerce.shipping = shipping;
    return this;
  }

  withItems(items) {
    this.event.ecommerce.items = Array.isArray(items) ? items : [items];
    return this;
  }

  addItem(item) {
    if (!this.event.ecommerce.items) {
      this.event.ecommerce.items = [];
    }
    this.event.ecommerce.items.push(item);
    return this;
  }

  // Calcula valor total baseado nos items
  calculateTotalValue() {
    if (this.event.ecommerce.items && this.event.ecommerce.items.length > 0) {
      const total = this.event.ecommerce.items.reduce((sum, item) => {
        return sum + (item.price * (item.quantity || 1));
      }, 0);
      this.event.ecommerce.value = total;
    }
    return this;
  }

  build() {
    return JSON.parse(JSON.stringify(this.event));
  }
}

function createDataLayerEvent() {
  return new DataLayerEventBuilder();
}

module.exports = { DataLayerEventBuilder, createDataLayerEvent };
