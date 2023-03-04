import { PRODUCTS } from '../../../db/products.db';
import { Product } from '../../../interfaces/Product';
import localStorageState from '../../../store/state';
import cartSummary from './cartSummary';
import promoCode from './promoCode';

export class Header {
  private sum = 0;

  private amount = 0;

  updateCartHeader(products: Product[]): void {
    const cartHeaderHtml = document.getElementById('header-cart');
    if (!cartHeaderHtml) {
      throw new Error('Result is undefined');
    }
    if (products.length === 0) {
      cartHeaderHtml.innerHTML = `${this.amount}`;
    }
    this.amount = Object.keys(products).length;
    cartHeaderHtml.innerHTML = `${this.amount}`;
    const { amount } = this;

    document.addEventListener('DOMContentLoaded', () => {
      cartSummary.updateProducts(amount);
    });
  }

  chandeAddCartHeader(): void {
    const cartHeaderHtml = document.getElementById('header-cart');
    if (!cartHeaderHtml) {
      throw new Error('Result is undefined');
    }
    this.amount += 1;
    cartHeaderHtml.innerHTML = `${this.amount}`;
    cartSummary.chandeProducts(this.amount);
  }

  changeMainHeader(): void {
    const productStore = localStorageState.getProducts();
    const products: Product[] = [];
    const resultHeaderHtml = document.getElementById('header-result');
    const cartHeaderHtml = document.getElementById('header-cart');

    PRODUCTS.forEach(({ id }) => {
      if (productStore.indexOf(id) !== -1) {
        products.push(PRODUCTS[id]);
      }
    });
    this.sum = Object.values(products).reduce((sum, item) => sum + item.price, 0);
    if (resultHeaderHtml) {
      resultHeaderHtml.innerHTML = `$${this.sum.toFixed(2)}`;
    }

    this.amount = Object.keys(products).length;
    if (cartHeaderHtml) {
      cartHeaderHtml.innerHTML = `${this.amount}`;
    }
  }

  chandeRemoveCartHeader(): void {
    const cartHeaderHtml = document.getElementById('header-cart');
    if (!cartHeaderHtml) {
      throw new Error('Result is undefined');
    }
    this.amount -= 1;
    cartHeaderHtml.innerHTML = `${this.amount}`;
    cartSummary.chandeProducts(this.amount);
  }

  updateResultHeader(products: Product[]): void {
    const resultHeaderHtml = document.getElementById('header-result');
    if (!resultHeaderHtml) {
      throw new Error('Result is undefined');
    }
    if (products.length === 0) {
      resultHeaderHtml.innerHTML = `$${this.sum}`;
    }
    this.sum = Object.values(products).reduce((sum, item) => sum + item.price, 0);
    resultHeaderHtml.innerHTML = `$${this.sum.toFixed(2)}`;

    const sum = +this.sum.toFixed(2);
    document.addEventListener('DOMContentLoaded', () => cartSummary.updatePrice(sum));
  }

  chandeAddResultHeader(price: number): void {
    const resultHeaderHtml = document.getElementById('header-result');
    if (!resultHeaderHtml) {
      throw new Error('Result is undefined');
    }
    this.sum += price;
    resultHeaderHtml.innerHTML = `${this.sum.toFixed(2)}`;
    const sum = +this.sum.toFixed(2);
    cartSummary.chandePrice(sum);
    promoCode.updatePrice(sum);
  }

  chandeRemoveResultHeader(price: number): void {
    const resultHeaderHtml = document.getElementById('header-result');
    if (!resultHeaderHtml) {
      throw new Error('Result is undefined');
    }
    this.sum -= price;
    resultHeaderHtml.innerHTML = `${this.sum.toFixed(2)}`;
    const sum = +this.sum.toFixed(2);
    cartSummary.chandePrice(sum);
    promoCode.updatePrice(sum);
  }
}

const header = new Header();
export default header;
