const theList = document.getElementsById("the-list");
const total = document.getElementById("total");
const cards = document.getElementsByClassName("card");
for (let card of cards) {
  const add = document.querySelector("add-button");
  const minus = document.querySelector("minus-button");
  const name = document.querySelector("title");
  const price = document.querySelector("price");
  const quantity = document.querySelector("quantity");
}
  class product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  class shoppingCartItem {
    constructor(name, quantity) {
      this.name = name;
      this.quantity = quantity;
    }
    calculate(price, quantity) {
      return price * quantity;
    }
  }
  class ShoppingCart {
    constructor() {
        this.items = [];
    }
    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity; // Increase quantity if already in cart
        } else {
            this.items.push(new ShoppingCartItem(product, quantity)); // Add new item
        }
    }
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }
    getTotal() {
        return this.items.reduce((total, item) => total + item.totalPrice(), 0);
    }
    displayItems() {
        return this.items.map(item => ({
            product: item.product.name,
            quantity: item.quantity,
            total: item.totalPrice()
        }));
    }
}



