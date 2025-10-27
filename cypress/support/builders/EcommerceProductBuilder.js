// Builder Pattern: Construtor fluente para produtos de e-commerce
// Autora: Lilian Kasprzak

class EcommerceProductBuilder {
  constructor() {
    this.product = {};
  }

  withId(itemId) {
    this.product.item_id = itemId;
    return this;
  }

  withName(itemName) {
    this.product.item_name = itemName;
    return this;
  }

  withPrice(price) {
    this.product.price = price;
    return this;
  }

  withQuantity(quantity) {
    this.product.quantity = quantity;
    return this;
  }

  withCategory(category) {
    this.product.item_category = category;
    return this;
  }

  withCategory2(category2) {
    this.product.item_category2 = category2;
    return this;
  }

  withBrand(brand) {
    this.product.item_brand = brand;
    return this;
  }

  // Presets de produtos comuns
  asSmartphone() {
    this.product = {
      item_id: 'PROD-010',
      item_name: 'Smartphone Samsung',
      item_category: 'Eletrônicos',
      item_brand: 'Samsung',
      price: 499.90,
      quantity: 1
    };
    return this;
  }

  asNotebook() {
    this.product = {
      item_id: 'PROD-001',
      item_name: 'Notebook Dell',
      item_category: 'Eletrônicos',
      item_category2: 'Computadores',
      item_brand: 'Dell',
      price: 299.90,
      quantity: 1
    };
    return this;
  }

  asMouse() {
    this.product = {
      item_id: 'PROD-002',
      item_name: 'Mouse Gamer',
      item_category: 'Periféricos',
      price: 150.00,
      quantity: 1
    };
    return this;
  }

  asKeyboard() {
    this.product = {
      item_id: 'PROD-003',
      item_name: 'Teclado Mecânico',
      item_category: 'Periféricos',
      price: 350.00,
      quantity: 1
    };
    return this;
  }

  asHeadset() {
    this.product = {
      item_id: 'PROD-004',
      item_name: 'Headset Gamer',
      item_category: 'Periféricos',
      price: 280.00,
      quantity: 1
    };
    return this;
  }

  asWebcam() {
    this.product = {
      item_id: 'PROD-005',
      item_name: 'Webcam HD',
      item_category: 'Periféricos',
      price: 180.00,
      quantity: 1
    };
    return this;
  }

  build() {
    return { ...this.product };
  }
}

function createProduct() {
  return new EcommerceProductBuilder();
}

module.exports = { EcommerceProductBuilder, createProduct };
