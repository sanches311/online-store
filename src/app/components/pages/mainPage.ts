import { Product } from "../../interfaces/Product";
import { PRODUCTS} from "../../db/products.db";
import { MainProductItem2 } from "./productItem/mainProductItem2";
import { MainProductItem3 } from "./productItem/mainProductItem3";

export default class MainPage{
  private products: Product[] = PRODUCTS;
    render() {
      return `<main class="main-page">
        <div class="container">
          <section class="all-filters">
            <div class="all-filters__tasks-button">
              <button class="reset">Reset filters</button>
              <button class="copy">Copy link</button>
            </div>
            <div class="all-filters__category">
              <h3 class="category__title">Разделы</h3>
              <ul class="category">
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>Книги на белорусском языке</p>
                  <div class="filter-matching">5/5</div>
                </li>
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>Иностранная литература</p>
                  <div class="filter-matching">5/5</div>
                </li>
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>Компьютерная литература</p>
                  <div class="filter-matching">5/5</div>
                </li>
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>Научная литература</p>
                  <div class="filter-matching">5/5</div>
                </li>
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>Художественная литература</p>
                  <div class="filter-matching">5/5</div>
                </li>
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>Бизнес литература</p>
                  <div class="filter-matching">5/5</div>
                </li>
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>Детская литература</p>
                  <div class="filter-matching">5/5</div>
                </li>
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>Искусство</p>
                  <div class="filter-matching">5/5</div>
                </li>
              </ul>
            </div>
            <div class="all-filters__category">
              <h3 class="category__title">Наличие</h3>
              <ul class="category">
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>На складе</p>
                  <div class="filter-matching">5/5</div>
                </li>
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>Под заказ</p>
                  <div class="filter-matching">5/5</div>
                </li>
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>Нет в наличии</p>
                  <div class="filter-matching">5/5</div>
                </li>
              </ul>
            </div>
            <div class="all-filters__category">
              <h3 class="category__title">Обложка</h3>
              <ul class="category">
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>Мягкая обложка</p>
                  <div class="filter-matching">5/5</div>
                </li>
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>Твёрдый переплёт</p>
                  <div class="filter-matching">5/5</div>
                </li>
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>Интегральный переплёт</p>
                  <div class="filter-matching">5/5</div>
                </li>
              </ul>
            </div>
            <div class="all-filters__category">
              <h3 class="category__title">Год издания</h3>
              <div class="min-max">
                <span class="min">2018</span>
                <p>-</p>
                <span class="max">2022</span>
              </div>
              <div class="slider">
                <input type="range" min="0" max="5" step="1" value="0">
              </div>
            </div>
            <div class="all-filters__category">
              <h3 class="category__title">Цена</h3>
              <div class="min-max">
                <span class="min">0</span>
                <p>-</p>
                <span class="max">1000</span>
              </div>
              <div class="slider">
                <input type="range" min="0" max="1000" step="10" value="0">
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
            ${this.products.map((item: Product) => new MainProductItem2(item)).map((product: MainProductItem2) => product.render()).join('')}
            ${this.products.map((item: Product) => new MainProductItem3(item)).map((product: MainProductItem3) => product.render()).join('')}
               
              </div> 
            </div>
          </section>
        </div>
      </main>`;
    }
};
