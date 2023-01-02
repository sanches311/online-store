import { Product } from "../../../interfaces/Product";

export class ProductItem {
 constructor(private item: Product) {
  console.log(item)
 }

  render() {
    return `
    <div class="products-container__item">
    <div class="item__num">${this.item.id}</div>
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
        <button class="add-button">+</button>
        <p class="cart-item">1</p>
        <button class="remove-button">-</button>
      </div>
      <div class="item__price">
        <span class="cart-item-price">${this.item.price}</span> USD
      </div>
    </div>
  </div>
    `;
  }
}