import { Product } from "../../interfaces/Product";
import { PRODUCTS } from "../../db/products.db";
import { ProductItem } from "./productItem/productItem";
import localStorageState from "../../store/state";
import modalWindow from "./modalPage";
import header from "./componentsClasses/header";
import promoCode from "./componentsClasses/promoCode";
import modal from "./componentsClasses/modal";

export default class Cart {
  private products: Product[] = [];
  private productStore = localStorageState.getProducts();
  private productsComponent: ProductItem[] = [];
  private productsPages: ProductItem[] = [];
  private amount: number = 0;
  private price: number = 0;
  private pageClicked: number = 1;
  private itemsOnPage: number = 0;

  constructor() {

  }
  createProductsComponent() {
    PRODUCTS.forEach(({ id }) => {
      if (this.productStore.indexOf(id) !== -1) {
        this.products.push(PRODUCTS[id]);
      }
    })
    this.productsComponent = this.products.map((item: Product, index: number) => new ProductItem(item, index));
    this.productsPages = this.productsComponent.slice(0, this.itemsOnPage);

  }

  updateSummary() {
    this.amount = Object.keys(this.productsComponent).length;
    this.price = Object.values(this.productsComponent).reduce((sum, item) => sum + item.item.price, 0);
  }


 

  createComponentRender() {
    
    let cartCelect = document.getElementById('cart-select');
    let allProducts = this.productsComponent;
    cartCelect?.addEventListener('change', function (e) {

      const target = e.target as HTMLInputElement;
      const url = new URL(window.location.href);

      const idBook = target.value;
      url.hash = `cart/?limit=${idBook}`;
      window.history.pushState({}, '', url);

      updateItems();

      let countPages = Math.ceil(allProducts.length / parseInt(idBook));
      let pageNum = document.getElementById('page-clicked')?.textContent;
      let numContainer = document.getElementById('page-clicked');
      let num = parseInt(pageNum!);
      if (countPages < num) {
        const url = new URL(window.location.href);
        url.hash = `cart/?limit=${idBook}&page=${countPages}`;
        window.history.pushState({}, '', url);
        numContainer!.innerHTML = `${countPages}`;
        updateItems();
       } 
    })

    changePage();
   

    function updateItems() {
      let inputValue = (<HTMLInputElement>document.getElementById('cart-select')).value
      let pageNum = document.getElementById('page-clicked')?.textContent;
      if (!pageNum) {
        throw new Error('Number is undefined')
      }
      let startFrom = parseInt(pageNum) * parseInt(inputValue!);
      let data = allProducts.slice(startFrom - parseInt(inputValue!), startFrom);
      document.querySelector('.products-container')!.innerHTML = `${data.map((product) => product.render()).join('')}`;

    }
   
    function changePage() {
      let count: number = 1;

      let buttonRemove = document.getElementById('pagination-remove');
      let buttonAdd = document.getElementById('pagination-add');

      buttonAdd!.addEventListener('click', function (e) {
        let inputValue = (<HTMLInputElement>document.getElementById('cart-select')).value;
        let countPages = Math.ceil(allProducts.length / parseInt(inputValue));

        let pageNum = document.getElementById('page-clicked')?.textContent;
        let numContainer = document.getElementById('page-clicked');
        let num = parseInt(pageNum!);

        if (num == countPages) {
          count = countPages;
          return;
        }
        count = count + 1;
        const url = new URL(window.location.href);
        url.hash = `cart/?limit=${inputValue}&page=${count}`;
        window.history.pushState({}, '', url);
        numContainer!.innerHTML = `${count}`;
        updateItems();
  
      })
      buttonRemove!.addEventListener('click', function (e) {
        let inputValue = (<HTMLInputElement>document.getElementById('cart-select')).value;
        let pageNum = document.getElementById('page-clicked')?.textContent;
        let numContainer = document.getElementById('page-clicked');
        let num = parseInt(pageNum!);

        if (count <= 0) {
          count = 1;
        }
        if (num == 1) {
          return;
        }

        count = count - 1;
        const url = new URL(window.location.href);
        url.hash = `cart/?limit=${inputValue}&page=${count}`;
        window.history.pushState({}, '', url);
    
        numContainer!.innerHTML = `${count}`;

        updateItems();
 
      })
    }
  }

  render() {
    this.createProductsComponent();
    header.updateCartHeader(this.products);
    header.updateResultHeader(this.products);
    this.updateSummary();

    return `
    <main class="cart-page">
        <div class="container">
          <section class="products">
            <div class="products-header">
              <h3 class="products__title">Products in cart</h3>
              <div class="products__items">
                items: <input id="cart-select" class="cart-items" type="number" min="1" max="${this.productsComponent.length}" value="${this.amount}">
              </div>
              <div class="products__pagination">
                page:
                <div class="pagination">
                  <span class="material-symbols-outlined" id="pagination-remove">arrow_back_ios</span>
                  <span class="cart-pagination" id="page-clicked">${this.pageClicked}</span>
                  <span class="material-symbols-outlined" id="pagination-add">arrow_forward_ios</span>
                </div>
              </div>
            </div>
            <div class="products-container">
            ${this.productsComponent.map((product: ProductItem) => product.render()).join('')}
            </div>
          </section>
          <section class="summary">
            <div class="summary-header">
              <h3 class="summary__title">Summary</h3>
            </div>
            <div class="summary-container">
              <div class="summary__products">
                Products: <span class="total-products" id='summary-products'>${this.amount}</span>
              </div>
              <div>
              <div class="summary__price">
                Total: <span class="total-price" id='summary-price'>${this.price}</span> USD
              </div>
              <div class="summary__price" id="total-price-sale"></div>
              </div>
              <div  id="summary_applied" class="summary_applied">
              <div class="applied-header">Applied codes</div>
                <div id="applied-code"></div>
              </div>
              <div class="summary__promo">
                <div class="promo__input">
                  <input type="text" id='promo-code' placeholder="ENTER PROMO CODE">
                </div>
                <div class="promo__add" id="promo-add"></div>
                <div class="promo__help">
                  Promo for test: 'html', 'css', 'js'
                </div>
              </div>
              <div class="summary__button">
                <button id='open-modal-window'>buy now</button>
              </div>
            </div>
          </section>
        </div>
      </main>`;
  }
  addEvents() {
    this.productsComponent.forEach((compotent) => compotent.addEvents());
    const button = document.getElementById('open-modal-window');
    if (!button) {
      throw new Error('Button is undefined');
    }
    button.addEventListener('click', function (e) {
      e.preventDefault();
      let elemModal = document.createElement('div');
      elemModal.classList.add('modal');
      elemModal.classList.add('modal-active');
      elemModal.id = 'modal-window';
      elemModal.innerHTML = modalWindow.render();
      const container = document.getElementById('container');
      if (!container) {
        throw new Error('Container is undefined');
      }

      container.append(elemModal);
      modalWindow.addEvents(elemModal);
      modal.addEvents();

    })
    document.addEventListener("DOMContentLoaded", function () {
      promoCode.checkInputPromoCode();

    });
    this.createComponentRender();

  };
}