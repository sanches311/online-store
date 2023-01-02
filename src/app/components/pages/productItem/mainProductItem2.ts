import { Product } from "../../../interfaces/Product";
import localStorageState, { CartProducts, LocalStorageState } from "../../../store/state";
import { PRODUCTS } from "../../../db/products.db";

export class MainProductItem2 {
 constructor(private item: Product) {

 }
 
 private getHtmlId = () => `product_${this.item.id}`;
  


  render() {
    return `
    <div class="products-container-2">
    <div class="products-container-img">
      <img src="${this.item.imageUrl[0]}" alt="Product image">
    </div>
    <div>
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
      <button class="main-page-item-button" id='${this.getHtmlId()}'>add to cart</button>
      <button class="main-page-item-button">details</button>
    </div>
    </div>
  </div>
    `;
  }
  addEvents() {
     const button = document.getElementById(this.getHtmlId());
    if (!button) {
      throw new Error('Button is undefined');
    }
    button.addEventListener('click', (event) => {
      event.preventDefault();
      let book: CartProducts = {
        amount: 1,
        product: PRODUCTS[this.item.id],
      }
     
      console.log(localStorageState.getProducts());
      localStorageState.putProducts(this.item.id)
      console.log(localStorageState.getProducts());
    });
    
  }
}