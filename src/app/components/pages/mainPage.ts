import { products } from '../store';

export default {
    getMainPageHtml(): string {
        let booksHtml = '';
        for (let i = 0; i < products.length; i += 1) {
            booksHtml += `            
        <div id=${products[i].id} class="product">
          <span id=${products[i].id} class="book">${products[i].name}</span>
          <span id=${products[i].id} class="book">${products[i].author}</span>
          <span id=${products[i].id} class="book">${products[i].country}</span>
          <span id=${products[i].id} class="book">${products[i].price}</span>
        </div>
         `;
        }
        const html = `<main class="main-page">
        <div class="container">
          <section class="all-filters">
            <div class="all-filters__tasks-button">
              <button class="reset">Reset filters</button>
              <button class="copy">Copy link</button>
            </div>
            <div class="all-filters__category">
              <h3 class="category__title">Заголовок</h3>
              <ul class="category">
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>какой-то текст</p>
                  <div class="filter-matching">5/5</div>
                </li>
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>какой-то текст</p>
                  <div class="filter-matching">5/5</div>
                </li>
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>какой-то текст</p>
                  <div class="filter-matching">5/5</div>
                </li>
              </ul>
            </div>
            <div class="all-filters__category">
              <h3 class="category__title">Заголовок</h3>
              <ul class="category">
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>какой-то текст</p>
                  <div class="filter-matching">5/5</div>
                </li>
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>какой-то текст</p>
                  <div class="filter-matching">5/5</div>
                </li>
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>какой-то текст</p>
                  <div class="filter-matching">5/5</div>
                </li>
              </ul>
            </div>
            <div class="all-filters__category">
              <h3 class="category__title">Заголовок</h3>
              <div class="min-max">
                <span class="min">0</span>
                <p>-</p>
                <span class="max">99</span>
              </div>
              <div class="slider">
                <input type="range" min="0" max="50" step="1" value="0">
              </div>
            </div>
            <div class="all-filters__category">
              <h3 class="category__title">Заголовок</h3>
              <div class="min-max">
                <span class="min">0</span>
                <p>-</p>
                <span class="max">99</span>
              </div>
              <div class="slider">
                <input type="range" min="0" max="50" step="1" value="0">
              </div>
            </div>
          </section>
          <section class="all-products">
            <div class="all-products__header">
              <div class="select">
                <select name="" id="">
                  <option value="">select</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                </select>
              </div>
              <h3>Found: <span class="found">0</span></h3>
              <div class="search">
                <input type="text">
              </div>
              <div class="display">
                <div class="col-2">
                  <span class="material-symbols-outlined">drag_indicator</span>
                </div>
                <div class="col-3">
                  <span class="material-symbols-outlined">apps</span>
                </div>
              </div>
            </div>
            <div class="all-products__container">
              <div class="products-container-2">
                <div class="products-container-img">
                  <img src="https://i.pinimg.com/736x/88/65/c1/8865c1064113563a33ab6983026b139a.jpg" alt="Product image">
                </div>
                <div>
                              <div class="products-container-description">
                  <h3>Название продукта</h3>
                  <div class="description-item">
                    <p class="description-item__category">Farm</p>
                    <p class="description-item__info">Grocery Tarm Fields</p>
                  </div>
                  <div class="description-item">
                    <p class="description-item__category">Farm</p>
                    <p class="description-item__info">Grocery Tarm Fields</p>
                  </div>
                  <div class="description-item">
                    <p class="description-item__category">Farm</p>
                    <p class="description-item__info">Grocery Tarm Fields</p>
                  </div>
                </div>
                <div class="products-container-price">
                  <span class="main-page-item-price">36.99</span> USD
                </div>
                <div class="products-container-buttons">
                  <button class="main-page-item-button">add to cart</button>
                  <button class="main-page-item-button">details</button>
                </div>
                </div>
              </div>
              <div class="products-container-2">
                <div class="products-container-img">
                  <img src="https://i.pinimg.com/736x/88/65/c1/8865c1064113563a33ab6983026b139a.jpg" alt="Product image">
                </div>
                <div>
                  <div class="products-container-description">
                  <h3>Название продукта</h3>
                  <div class="description-item">
                    <p class="description-item__category">Farm</p>
                    <p class="description-item__info">Grocery Tarm Fields</p>
                  </div>
                  <div class="description-item">
                    <p class="description-item__category">Farm</p>
                    <p class="description-item__info">Grocery Tarm Fields</p>
                  </div>
                  <div class="description-item">
                    <p class="description-item__category">Farm</p>
                    <p class="description-item__info">Grocery Tarm Fields</p>
                  </div>
                </div>
                <div class="products-container-price">
                  <span class="main-page-item-price">36.99</span> USD
                </div>
                <div class="products-container-buttons">
                  <button class="main-page-item-button">add to cart</button>
                  <button class="main-page-item-button">details</button>
                </div>
                </div>
              </div>
              <div class="products-container-2">
                <div class="products-container-img">
                  <img src="https://i.pinimg.com/736x/88/65/c1/8865c1064113563a33ab6983026b139a.jpg" alt="Product image">
                </div>
                <div>
                              <div class="products-container-description">
                  <h3>Название продукта</h3>
                  <div class="description-item">
                    <p class="description-item__category">Farm</p>
                    <p class="description-item__info">Grocery Tarm Fields</p>
                  </div>
                  <div class="description-item">
                    <p class="description-item__category">Farm</p>
                    <p class="description-item__info">Grocery Tarm Fields</p>
                  </div>
                  <div class="description-item">
                    <p class="description-item__category">Farm</p>
                    <p class="description-item__info">Grocery Tarm Fields</p>
                  </div>
                </div>
                <div class="products-container-price">
                  <span class="main-page-item-price">36.99</span> USD
                </div>
                <div class="products-container-buttons">
                  <button class="main-page-item-button">add to cart</button>
                  <button class="main-page-item-button">details</button>
                </div>
                </div>
              </div>
              <div class="products-container-2">
                <div class="products-container-img">
                  <img src="https://i.pinimg.com/736x/88/65/c1/8865c1064113563a33ab6983026b139a.jpg" alt="Product image">
                </div>
                <div>
                  <div class="products-container-description">
                  <h3>Название продукта</h3>
                  <div class="description-item">
                    <p class="description-item__category">Farm</p>
                    <p class="description-item__info">Grocery Tarm Fields</p>
                  </div>
                  <div class="description-item">
                    <p class="description-item__category">Farm</p>
                    <p class="description-item__info">Grocery Tarm Fields</p>
                  </div>
                  <div class="description-item">
                    <p class="description-item__category">Farm</p>
                    <p class="description-item__info">Grocery Tarm Fields</p>
                  </div>
                </div>
                <div class="products-container-price">
                  <span class="main-page-item-price">36.99</span> USD
                </div>
                <div class="products-container-buttons">
                  <button class="main-page-item-button">add to cart</button>
                  <button class="main-page-item-button">details</button>
                </div>
                </div>
              </div>
             <!--  <div class="products-container-3">
                <h3>Название продукта</h3>
                <div class="products-container-img-3">
                  <img src="https://i.pinimg.com/736x/88/65/c1/8865c1064113563a33ab6983026b139a.jpg" alt="Product image">
                </div>
                <div class="products-container-buttons">
                  <button class="main-page-item-button">add to cart</button>
                  <button class="main-page-item-button">details</button>
                </div>
              </div>
              <div class="products-container-3">
                <h3>Название продукта</h3>
                <div class="products-container-img-3">
                  <img src="https://i.pinimg.com/736x/88/65/c1/8865c1064113563a33ab6983026b139a.jpg" alt="Product image">
                </div>
                <div class="products-container-buttons">
                  <button class="main-page-item-button">add to cart</button>
                  <button class="main-page-item-button">details</button>
                </div>
              </div>
              <div class="products-container-3">
                <h3>Название продукта</h3>
                <div class="products-container-img-3">
                  <img src="https://i.pinimg.com/736x/88/65/c1/8865c1064113563a33ab6983026b139a.jpg" alt="Product image">
                </div>
                <div class="products-container-buttons">
                  <button class="main-page-item-button">add to cart</button>
                  <button class="main-page-item-button">details</button>
                </div>
              </div>
              <div class="products-container-3">
                <h3>Название продукта</h3>
                <div class="products-container-img-3">
                  <img src="https://i.pinimg.com/736x/88/65/c1/8865c1064113563a33ab6983026b139a.jpg" alt="Product image">
                </div>
                <div class="products-container-buttons">
                  <button class="main-page-item-button">add to cart</button>
                  <button class="main-page-item-button">details</button>
                </div>
              </div>
              <div class="products-container-3">
                <h3>Название продукта</h3>
                <div class="products-container-img-3">
                  <img src="https://i.pinimg.com/736x/88/65/c1/8865c1064113563a33ab6983026b139a.jpg" alt="Product image">
                </div>
                <div class="products-container-buttons">
                  <button class="main-page-item-button">add to cart</button>
                  <button class="main-page-item-button">details</button>
                </div>
              </div>
               <div class="products-container-3">
                <h3>Название продукта</h3>
                <div class="products-container-img-3">
                  <img src="https://i.pinimg.com/736x/88/65/c1/8865c1064113563a33ab6983026b139a.jpg" alt="Product image">
                </div>
                <div class="products-container-buttons">
                  <button class="main-page-item-button">add to cart</button>
                  <button class="main-page-item-button">details</button>
                </div>
              </div> -->
            </div>
          </section>
        </div>
      </main>`;

        return html;
    },
};
