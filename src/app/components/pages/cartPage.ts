import { Product } from '../../interfaces/Product';
import { PRODUCTS } from '../../db/products.db';
import ProductItem from './productItem/productItem';
import localStorageState from '../../store/state';
import modalWindow from './modalPage';
import header from './componentsClasses/header';
import promoCode from './componentsClasses/promoCode';
import modal from './componentsClasses/modal';

export default class Cart {
  private products: Product[] = [];

  private productsComponent: ProductItem[] = [];

  private productsPages: ProductItem[] = [];

  private amount = 0;

  private price = 0;

  private pageClicked = 1;

  private itemsOnPage = 0;

  createProductsComponent(): void {
    const productStore = localStorageState.getProducts();
    PRODUCTS.forEach(({ id }) => {
      if (productStore.indexOf(id) !== -1) {
        this.products.push(PRODUCTS[id]);
      }
    });
    this.productsComponent = this.products.map((item: Product, index: number) => new ProductItem(item, index));
    this.productsPages = this.productsComponent.slice(0, this.itemsOnPage);
  }

  updateSummary(): void {
    this.amount = Object.keys(this.productsComponent).length;
    this.price = Object.values(this.productsComponent).reduce((sum, item) => sum + item.item.price, 0);
  }

  createComponentRender(): void {
    const cartCelect = document.getElementById('cart-select');
    const allProducts = this.productsComponent;
    
    function updateItems(): void {
      const inputValue = (<HTMLInputElement>document.getElementById('cart-select')).value;
      const pageNum = document.getElementById('page-clicked')?.textContent;
      if (!pageNum) {
        throw new Error('Number is undefined');
      }
      const startFrom = parseInt(pageNum, 10) * parseInt(inputValue, 10);
      const data = allProducts.slice(startFrom - parseInt(inputValue, 10), startFrom);
      const container = document.querySelector('.products-container');
      if (container) {
        container.innerHTML = `${data.map((product) => product.render()).join('')}`;
      }
    }

    cartCelect?.addEventListener('change', (e): void => {
      const target = e.target as HTMLInputElement;
      const url = new URL(window.location.href);
      const idBook = target.value;
      url.hash = `cart/?limit=${idBook}`;
      window.history.pushState({}, '', url);

      updateItems();

      const countPages = Math.ceil(allProducts.length / parseInt(idBook, 10));
      const pageNum = document.getElementById('page-clicked')?.textContent;
      const numContainer = document.getElementById('page-clicked');
      let num = 0;
      if (pageNum) {
        num = parseInt(pageNum, 10);
      }
      if (countPages < num) {
        const urlLocation = new URL(window.location.href);
        urlLocation.hash = `cart/?limit=${idBook}&page=${countPages}`;
        window.history.pushState({}, '', urlLocation);
        if (numContainer) {
          numContainer.innerHTML = `${countPages}`;
        }
        updateItems();
      }
    });

    function changePage(): void {
      let count = 1;
      const buttonRemove = document.getElementById('pagination-remove');
      const buttonAdd = document.getElementById('pagination-add');

      buttonAdd?.addEventListener('click', (): void => {
        const inputValue = (<HTMLInputElement>document.getElementById('cart-select')).value;
        const countPages = Math.ceil(allProducts.length / parseInt(inputValue, 10));
        const pageNum = document.getElementById('page-clicked')?.textContent;
        const numContainer = document.getElementById('page-clicked');
        let num = 0;
        if (pageNum) {
          num = parseInt(pageNum, 10);
        }

        if (num === countPages) {
          count = countPages;
          return;
        }
        count += 1;
        const url = new URL(window.location.href);
        url.hash = `cart/?limit=${inputValue}&page=${count}`;
        window.history.pushState({}, '', url);
        if (numContainer) {
          numContainer.innerHTML = `${count}`;
        }
        updateItems();
      });

      buttonRemove?.addEventListener('click', (): void => {
        const inputValue = (<HTMLInputElement>document.getElementById('cart-select')).value;
        const pageNum = document.getElementById('page-clicked')?.textContent;
        const numContainer = document.getElementById('page-clicked');
        let num = 0;
        if (pageNum) {
          num = parseInt(pageNum, 10);
        }
        if (count <= 0) {
          count = 1;
        }
        if (num === 1) {
          return;
        }
        count -= 1;
        const url = new URL(window.location.href);
        url.hash = `cart/?limit=${inputValue}&page=${count}`;
        window.history.pushState({}, '', url);
        if (numContainer) {
          numContainer.innerHTML = `${count}`;
        }
        updateItems();
      });
    }
    changePage();
  }

  render(): string {
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
                items: <input id="cart-select" class="cart-items" type="number" min="1" max="${
                  this.productsComponent.length
                }" value="${this.amount}">
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
            ${
              this.productsComponent.length > 0
                ? this.productsComponent.map((product: ProductItem) => product.render()).join('')
                : `<h3 class="products__title">Cart is empty</h3>`
            }
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

  showModal(windowHash: string): void {
    if (window.location.hash === windowHash) {
      setTimeout(() => {
        const elemModal = document.createElement('div');
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
      }, 10);
    }
  }

  addEvents(): void {
    this.productsComponent.forEach((compotent) => compotent.addEvents());
    const button = document.getElementById('open-modal-window');
    if (!button) {
      throw new Error('Button is undefined');
    }

    button.addEventListener('click', (e): void => {
      e.preventDefault();
      const elemModal = document.createElement('div');
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
    });

    document.addEventListener('DOMContentLoaded', (): void => {
      promoCode.checkInputPromoCode();
    });
    this.createComponentRender();
  }
}
