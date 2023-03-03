import { Product } from '../../../interfaces/Product';
import localStorageState from '../../../store/state';
import header from '../componentsClasses/header';

export default class ProductItem {
  constructor(public item: Product, private index: number) {}

  private order = 1;

  private itemPrice: number = this.item.price;

  private getHtmlIdAdd = () => `add-button_${this.item.id}`;

  private getHtmlIdRemove = () => `remove-button_${this.item.id}`;

  private getHtmlOrderId = () => `order_${this.item.id}`;

  private getHtmlProductId = () => `product_${this.item.id}`;

  private getHtmlPrice = () => `price_${this.item.id}`;

  addOrder() {
    const buttonAdd = document.getElementById(this.getHtmlIdAdd());
    if (!buttonAdd) {
      throw new Error('Button is undefined');
    }
    buttonAdd.addEventListener('click', () => {
      if (this.order === this.item.quantity) {
        return;
      }
      this.order += 1;
      if (this.order === this.item.quantity) {
        buttonAdd.setAttribute('disabled', 'disabled');
      }
      const orderHtml = document.getElementById(this.getHtmlOrderId());
      if (!orderHtml) {
        throw new Error('Order is undefined');
      }
      orderHtml.innerHTML = `${this.order}`;
      this.addItemPrice();
      header.chandeAddCartHeader();
      header.chandeAddResultHeader(this.item.price);
    });
  }

  addItemPrice() {
    const priceHtml = document.getElementById(this.getHtmlPrice());
    if (!priceHtml) {
      throw new Error('Price is undefined');
    }
    this.itemPrice += this.item.price;
    priceHtml.innerHTML = `${this.itemPrice}`;
  }

  changeNumeration() {
    const allItemProducts = document.querySelectorAll('.item__num');
    allItemProducts.forEach((elem, index: number) => {
      let itemIndex = index;
      elem.innerHTML = `${(itemIndex += 1)}`;
    });
  }

  removeOrder() {
    const buttonRemove = document.getElementById(this.getHtmlIdRemove());
    const buttonAdd = document.getElementById(this.getHtmlIdAdd());
    if (!buttonRemove || !buttonAdd) {
      throw new Error('Button is undefined');
    }
    buttonRemove.addEventListener('click', () => {
      if (this.order === 1) {
        localStorageState.deleteProducts(this.item.id);
        document.getElementById(this.getHtmlProductId())?.remove();
        this.changeNumeration();
        header.chandeRemoveCartHeader();
        header.chandeRemoveResultHeader(this.item.price);
        return;
      }

      this.order -= 1;
      if (this.order !== this.item.quantity) {
        buttonAdd.removeAttribute('disabled');
      }
      const orderHtml = document.getElementById(this.getHtmlOrderId());
      if (!orderHtml) {
        throw new Error('Order is undefined');
      }
      orderHtml.innerHTML = `${this.order}`;
      this.removeItemPrice();
      header.chandeRemoveCartHeader();
      header.chandeRemoveResultHeader(this.item.price);
    });
  }

  removeItemPrice() {
    const priceHtml = document.getElementById(this.getHtmlPrice());
    if (!priceHtml) {
      throw new Error('Price is undefined');
    }
    this.itemPrice -= this.item.price;
    priceHtml.innerHTML = `${this.itemPrice.toFixed(2)}`;
  }

  render() {
    return `
    <div class="products-container__item" id='${this.getHtmlProductId()}'>
    <div class="item__num">${this.index + 1}</div>
    <div class="item__img">
      <img src="${this.item.imageUrl[0]}" alt="Product image.">
    </div>
    <div class="item-description">
      <h4 class="item__title">${this.item.title}</h4>
      <h4 class="item__title">${this.item.author}</h4>
      <p class="item__info"></p>
      <div class="item__data">
        <div class="data-container">
          <p class="title-data">Год издания:</p>
          <p class="text-data">${this.item.year}</p>
        </div>
        <div class="data-container">
          <p class="title-data">Обложка:</p>
          <p class="text-data">${this.item.type}</p>
        </div>
      </div>
    </div>
    <div class="item-add">
      <div class="item__stock">
        Stock: <span class="cart-stock">${this.item.quantity}</span>
      </div>
      <div class="item__add">
        <button class="add-button" id='${this.getHtmlIdAdd()}'>+</button>
        <p class="cart-item" id='${this.getHtmlOrderId()}'>${this.order}</p>
        <button class="remove-button" id='${this.getHtmlIdRemove()}'>-</button>
      </div>
      <div class="item__price">
        <span class="cart-item-price" id='${this.getHtmlPrice()}'>${this.item.price}</span> USD
      </div>
    </div>
  </div>
    `;
  }

  addEvents() {
    this.addOrder();
    this.removeOrder();
  }
}
