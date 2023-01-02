import { Product } from "../../../interfaces/Product";

export class MainProductItem3 {
 constructor(private item: Product) {

 }
 private getHtmlId = () => `product_${this.item.id}`;

  render() {
    return `
    <div class="products-container-3">
                <h3>${this.item.title}</h3>
                <div class="products-container-img-3">
                  <img src="${this.item.imageUrl[0]}" alt="Product image">
                </div>
                <div class="products-container-buttons">
                  <button class="main-page-item-button" id='${this.getHtmlId()}'>add to cart</button>
                  <button class="main-page-item-button">details</button>
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
    console.log(event)
   });
   
 }
}