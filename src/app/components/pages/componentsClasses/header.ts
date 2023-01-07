import { Product } from "../../../interfaces/Product";
import cartSummary from "./cartSummary";
import promoCode from "./promoCode";

export class Header {
  private sum: number = 0;
  private amount: number = 0;
  constructor() {

  }
  updateCartHeader(products: Product[]) {
    const cartHeaderHtml = document.getElementById('header-cart');
    if (!cartHeaderHtml) {
      throw new Error('Result is undefined');
    }
    if (products.length === 0) {
      cartHeaderHtml.innerHTML = `${this.amount}`;
    }
    this.amount = Object.keys(products).length;
    cartHeaderHtml.innerHTML = `${this.amount}`;
    let amount = this.amount;
    document.addEventListener("DOMContentLoaded", function() {
      cartSummary.updateProducts(amount);
    });

  }
  chandeAddCartHeader() {
    const cartHeaderHtml = document.getElementById('header-cart');
    if (!cartHeaderHtml) {
      throw new Error('Result is undefined');
    }
    this.amount++;
    cartHeaderHtml.innerHTML = `${this.amount}`;
    cartSummary.chandeProducts(this.amount);
  }
  chandeRemoveCartHeader() {
    const cartHeaderHtml = document.getElementById('header-cart');
    if (!cartHeaderHtml) {
      throw new Error('Result is undefined');
    }
    this.amount--;
    cartHeaderHtml.innerHTML = `${this.amount}`;
    cartSummary.chandeProducts(this.amount);
  }

  updateResultHeader(products: Product[]) {
    const resultHeaderHtml = document.getElementById('header-result');
    if (!resultHeaderHtml) {
      throw new Error('Result is undefined');
    }
    if (products.length === 0) {
      resultHeaderHtml.innerHTML = `$${this.sum}`;
    }
    this.sum = Object.values(products).reduce((sum, item) => sum + item.price, 0);
    resultHeaderHtml.innerHTML = `$${this.sum.toFixed(2)}`;

    let sum = +(this.sum.toFixed(2));
    document.addEventListener("DOMContentLoaded", function() {
      return cartSummary.updatePrice(sum);
    });
  }
  chandeAddResultHeader(price: number) {
    const resultHeaderHtml = document.getElementById('header-result');
    if (!resultHeaderHtml) {
      throw new Error('Result is undefined');
    }
    this.sum += price;
    resultHeaderHtml.innerHTML = `${this.sum.toFixed(2)}`;
    let sum = +(this.sum.toFixed(2));
    cartSummary.chandePrice(sum);
    promoCode.updatePrice(sum);
  }
  chandeRemoveResultHeader(price: number) {
    const resultHeaderHtml = document.getElementById('header-result');
    if (!resultHeaderHtml) {
      throw new Error('Result is undefined');
    }
    this.sum -= price;
    resultHeaderHtml.innerHTML = `${this.sum.toFixed(2)}`;
    let sum = +(this.sum.toFixed(2));
    cartSummary.chandePrice(sum);
    promoCode.updatePrice(sum);
  }
  
}
const header = new Header();
export default header;