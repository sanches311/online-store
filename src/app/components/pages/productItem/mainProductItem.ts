import { Product } from '../../../interfaces/Product';

export default class MainProductItem {
  constructor(private item: Product) {}

  private getHtmlId = (): string => `product_${this.item.id}`;

  books2Column(): string {
    return `
    <div id='${this.item.id}'class="products-container-2">
    <div class="products-container-img">
      <img src="${this.item.imageUrl[0]}" alt="Product image">
    </div>
    <div class="product-container-column">
      <div class="products-container-description">
      <h3>${this.item.title}</h3>
      <div class="description-item">
        <p class="description-item__category">Автор:</p>
        <p class="description-item__info">${this.item.author}</p>
      </div>
      <div class="description-item">
        <p class="description-item__category">Год издания:</p>
        <p class="description-item__info">${this.item.year}</p>
      </div>
      <div class="description-item">
        <p class="description-item__category">Обложка:</p>
        <p class="description-item__info">${this.item.type}</p>
      </div>
    </div>
    <div class="products-container-price">
      <span class="main-page-item-price">${this.item.price}</span> USD
    </div>
    <div class="products-container-buttons">
      <button class="main-page-item-button main-add-button" id='${this.getHtmlId()}'>add to cart</button>
      <button id='${this.item.id}' class="main-page-item-button details-button">details</button>
    </div>
    </div>
  </div>
    `;
  }

  books3Column(): string {
    return `
      <div id='${this.item.id}' class="products-container-3">
        <h3>${this.item.title}</h3>
        <div class="products-container-img-3">
          <img src="${this.item.imageUrl[0]}" alt="Product image">
        </div>
        <div class="products-container-buttons">
          <button class="main-page-item-button">add to cart</button>
          <button id='${this.item.id}' class="main-page-item-button">details</button>
        </div>
      </div>
      `;
  }
}
