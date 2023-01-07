import { Product } from "../../interfaces/Product";
import { PRODUCTS } from "../../db/products.db";
import { ProductItem } from "./productItem/productItem";
import localStorageState from "../../store/state";
import modalWindow, { ModalWindow } from "./modalPage";
import header from "./componentsClasses/header";
import cartSummary from "./componentsClasses/cartSummary";
import promoCode from "./componentsClasses/promoCode";

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
      changePage();
      updateItems();
    })
     
    function updateItems() {
      let allItemsOnPage = Array.from(document.querySelectorAll('.products-container__item'));
      let inputValue = (<HTMLInputElement>document.getElementById('cart-select')).value;
      let pageNum = document.getElementById('page-clicked')?.textContent;
        if(!pageNum) {
          throw new Error('Number is undefined')
        }
      let startFrom = parseInt(pageNum) * parseInt(inputValue);
      let data = allItemsOnPage.slice(startFrom - parseInt(inputValue), startFrom);
      allItemsOnPage.forEach((elem) => {
        if (!elem.classList.contains('pagination-items')) {
          elem.classList.add('pagination-items');
        }
       
      })
      
      data.forEach((elem) => {
        elem.classList.remove('pagination-items')
      
      })
    }

    function changePage() {
      let count: number = 1;
      
      let input = (<HTMLInputElement>document.getElementById('cart-select')).value;
      let countPages = Math.ceil(allProducts.length / parseInt(input));
      let buttonAdd = document.getElementById('pagination-add');
      let buttonRemove = document.getElementById('pagination-remove');
      if(!buttonAdd) {
        throw new Error('Button is undefined')
      }
      if(!buttonRemove) {
        throw new Error('Button is undefined')
      }
      buttonAdd.addEventListener('click', function(e) {
    
       ++count;
   
       if (count >= countPages) {
        count = countPages;
   
       }

        let pageNum = document.getElementById('page-clicked')?.textContent;
        
        if(!pageNum) {
          throw new Error('Number is undefined')
        }
        let num = parseInt(pageNum);

        
        if (num === countPages) {
          return;
        }
        
        let numContainer = document.getElementById('page-clicked');
        if(!numContainer) {
          throw new Error('Number is undefined')
        }

        numContainer.innerHTML = `${count}`;
       
        updateItems();
      })
      buttonRemove.addEventListener('click', function(e) {
        --count;
          if (count == 0) {
            count = 1;
          }
        let pageNum = document.getElementById('page-clicked')?.textContent;
        if(!pageNum) {
          throw new Error('Number is undefined')
        }
        let num = parseInt(pageNum);
       if (num == 1) {
        return;
       }
       
        let numContainer = document.getElementById('page-clicked');
        if(!numContainer) {
          throw new Error('Number is undefined')
        }
        numContainer.innerHTML = `${count}`;
      
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

    })
    document.addEventListener("DOMContentLoaded", function () {
      promoCode.checkInputPromoCode();

    });
    this.createComponentRender();

  };
}