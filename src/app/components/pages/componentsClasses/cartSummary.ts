import { Product } from "../../../interfaces/Product";

class CartSummary {

  updateProducts(amount: number) {
    const summaryProducts = document.getElementById('summary-products');
    if (!summaryProducts) {
      throw new Error('Summary products is undefined');
    }
    summaryProducts.innerHTML = `${amount}`;
  }
  chandeProducts(amount: number) {
    const summaryProducts = document.getElementById('summary-products');
    if (!summaryProducts) {
      throw new Error('Summary products is undefined');
    }
    summaryProducts.innerHTML = `${amount}`;
  }
  updatePrice(price: number) {
    const summaryPrice = document.getElementById('summary-price');
    if (!summaryPrice) {
      throw new Error('Summary prise is undefined');
    }
    summaryPrice.innerHTML = `${price.toFixed(2)}`;
  }
  chandePrice(price: number) {
    const summaryPrice = document.getElementById('summary-price');
    if (!summaryPrice) {
      throw new Error('Summary prise is undefined');
    }
    summaryPrice.innerHTML = `${price.toFixed(2)}`;
  }
}
const cartSummary = new CartSummary();
export default cartSummary;