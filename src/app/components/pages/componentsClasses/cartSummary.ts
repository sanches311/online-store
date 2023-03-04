class CartSummary {
  updateProducts(amount: number): void {
    const summaryProducts = document.getElementById('summary-products');
    if (!summaryProducts) {
      throw new Error('Summary products is undefined');
    }
    summaryProducts.innerHTML = `${amount}`;
  }

  chandeProducts(amount: number): void {
    const summaryProducts = document.getElementById('summary-products');
    if (!summaryProducts) {
      throw new Error('Summary products is undefined');
    }
    summaryProducts.innerHTML = `${amount}`;
  }

  updatePrice(price: number): void {
    const summaryPrice = document.getElementById('summary-price');
    if (!summaryPrice) {
      throw new Error('Summary prise is undefined');
    }
    summaryPrice.innerHTML = `${price.toFixed(2)}`;
  }

  chandePrice(price: number): void {
    const summaryPrice = document.getElementById('summary-price');
    if (!summaryPrice) {
      throw new Error('Summary prise is undefined');
    }
    summaryPrice.innerHTML = `${price.toFixed(2)}`;
  }
}

const cartSummary = new CartSummary();
export default cartSummary;
