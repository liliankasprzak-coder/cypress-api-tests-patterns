// Factory Pattern: Fábrica de eventos de data layer
// Autora: Lilian Kasprzak

const { createDataLayerEvent } = require('../builders/DataLayerEventBuilder');

class DataLayerEventFactory {
  // Evento: Visualização de produto
  createViewItemEvent(product) {
    return createDataLayerEvent()
      .withEventName('view_item')
      .withCurrency('BRL')
      .withValue(product.price)
      .withItems([product])
      .build();
  }

  // Evento: Visualização de lista de produtos
  createViewItemListEvent(products) {
    return createDataLayerEvent()
      .withEventName('view_item_list')
      .withItems(products)
      .build();
  }

  // Evento: Adicionar ao carrinho
  createAddToCartEvent(product) {
    return createDataLayerEvent()
      .withEventName('add_to_cart')
      .withCurrency('BRL')
      .withValue(product.price * (product.quantity || 1))
      .withItems([product])
      .build();
  }

  // Evento: Remover do carrinho
  createRemoveFromCartEvent(product) {
    return createDataLayerEvent()
      .withEventName('remove_from_cart')
      .withCurrency('BRL')
      .withValue(product.price * (product.quantity || 1))
      .withItems([product])
      .build();
  }

  // Evento: Iniciar checkout
  createBeginCheckoutEvent(items) {
    return createDataLayerEvent()
      .withEventName('begin_checkout')
      .withCurrency('BRL')
      .withItems(items)
      .calculateTotalValue()
      .build();
  }

  // Evento: Compra finalizada
  createPurchaseEvent(transactionData) {
    const { transactionId, items, tax, shipping, affiliation } = transactionData;
    
    return createDataLayerEvent()
      .withEventName('purchase')
      .withTransactionId(transactionId)
      .withAffiliation(affiliation || 'Loja Online')
      .withCurrency('BRL')
      .withItems(items)
      .withTax(tax || 0)
      .withShipping(shipping || 0)
      .calculateTotalValue()
      .build();
  }
}

function createDataLayerEventFactory() {
  return new DataLayerEventFactory();
}

module.exports = { DataLayerEventFactory, createDataLayerEventFactory };
