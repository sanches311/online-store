import { cart } from '../store';

export default {
    getCartPageHtml(): string {
        let html = `<main class="cart-page">
        <div class="container">
          <section class="products">
            <div class="products-header">
              <h3 class="products__title">Products in cart</h3>
              <div class="products__items">
                items: <span class="cart-items">3</span>
              </div>
              <div class="products__pagination">
                page:
                <div class="pagination">
                  <span class="material-symbols-outlined">arrow_back_ios</span>
                  <span class="cart-pagination">1</span>
                  <span class="material-symbols-outlined">arrow_forward_ios</span>
                </div>
              </div>
            </div>
            <div class="products-container">
              <div class="products-container__item">
                <div class="item__num">1</div>
                <div class="item__img">
                  <img src="https://klike.net/uploads/posts/2021-11/1636537556_2.jpg" alt="Product image.">
                </div>
                <div class="item-description">
                  <h4 class="item__title">Наименование товара</h4>
                  <p class="item__info">Какой-то текст, описывающий товар одним предложением!</p>
                  <div class="item__data">
                    <div class="data-container">
                      <p class="title-data">Delivery</p>
                      <p class="text-data">Europe</p>
                    </div>
                    <div class="data-container">
                      <p class="title-data">Delivery</p>
                      <p class="text-data">Europe</p>
                    </div>
                  </div>
                </div>
                <div class="item-add">
                  <div class="item__stock">
                    Stock: <span class="cart-stock">94</span>
                  </div>
                  <div class="item__add">
                    <button class="add-button">+</button>
                    <p class="cart-item">1</p>
                    <button class="remove-button">-</button>
                  </div>
                  <div class="item__price">
                    <span class="cart-item-price">36.99</span> USD
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="summary">
            <div class="summary-header">
              <h3 class="summary__title">Summary</h3>
            </div>
            <div class="summary-container">
              <div class="summary__products">
                Products: <span class="total-products">8</span>
              </div>
              <div class="summary__price">
                Total: <span class="total-price">256.25</span> USD
              </div>
              <div class="summary__promo">
                <div class="promo__input">
                  <input type="text">
                </div>
                <div class="promo__add">
                  <p class="promo-code">Какой-то текст прококода - 10%</p>
                  <button class="promo-code-button">add</button>
                </div>
                <div class="promo__help">
                  Promo for test: 'html', 'css', 'js'
                </div>
              </div>
              <div class="summary__button">
                <button>buy now</button>
              </div>
            </div>
          </section>
        </div>
      </main>`;
        return html;
    },
};
