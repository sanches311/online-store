import { Product } from "../../../interfaces/Product";

export class MainProductItem3 {
 constructor(private item: Product) {
  console.log(item)
 }

  render() {
    return `
    <div class="products-container-3">
                <h3>${this.item.title}</h3>
                <div class="products-container-img-3">
                  <img src="${this.item.imageUrl[0]}" alt="Product image">
                </div>
                <div class="products-container-buttons">
                  <button class="main-page-item-button">add to cart</button>
                  <button class="main-page-item-button">details</button>
                </div>
              </div>
    `;
  }
}