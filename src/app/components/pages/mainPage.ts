import { PRODUCTS } from '../../db/products.db';
import { Product } from '../../interfaces/Product';
import { MainProductItem } from './productItem/mainProductItem';
import store from '../../store/store';
import Filter from './filter';

interface Ioptions {
    options: Array<{ value: string; label: string }>;
    currentOptions: string;
}

export default class MainPage {
    private products: Product[] = store.books;
    public stateOptions: Ioptions = {
        options: [
            { value: 'default', label: 'Сортировать по' },
            { value: 'price-inc', label: 'Сначала дешевые' },
            { value: 'price-dec', label: 'Сначала дорогие' },
            { value: 'year-inc', label: 'Сначала старые' },
            { value: 'year-dec', label: 'Сначала новые' },
        ],
        currentOptions: 'default',
    };

    getSelectOption() {
        const curr = (value: string) => {
            const url = new URL(window.location.href);
            const sort = url.searchParams.get('sort');
            if (sort) {
                this.stateOptions.currentOptions = sort;
            }
            if (value === this.stateOptions.currentOptions) {
                return 'selected';
            } else return;
        };
        const filter = new Filter(PRODUCTS);
        filter.sort();
        return `
      <select id="sort">
      ${this.stateOptions.options
          .map((option) => {
              return `<option ${curr(option.value)} value='${option.value}'>${option.label}</option>`;
          })
          .join('')}
      </select>`;
    }
    getBooksHtml() {
        const url = new URL(window.location.href);
        const view = url.searchParams.get('big');
        const filter = new Filter(store.books);

        filter.sort();
        filter.liveSearch();

        if (view === 'true' || view === null)
            return store.books
                .map((item: Product) => new MainProductItem(item))
                .map((product: MainProductItem) => product.books2Column())
                .join('');
        if (view === 'false')
            return store.books
                .map((item: Product) => new MainProductItem(item))
                .map((product: MainProductItem) => product.books3Column())
                .join('');
    }
    getBooksCount() {
        const belAll = PRODUCTS.filter(function (book) {
            if (book.category.belorussian) return book;
        }).length;
        const belCurr = store.books.filter(function (book) {
            if (book.category.belorussian) return book;
        }).length;
        const forAll = PRODUCTS.filter(function (book) {
            if (book.category.foreign) return book;
        }).length;
        const forCurr = store.books.filter(function (book) {
            if (book.category.foreign) return book;
        }).length;
        const compAll = PRODUCTS.filter(function (book) {
            if (book.category.computer) return book;
        }).length;
        const compCurr = store.books.filter(function (book) {
            if (book.category.computer) return book;
        }).length;
        const sciAll = PRODUCTS.filter(function (book) {
            if (book.category.scientific) return book;
        }).length;
        const sciCurr = store.books.filter(function (book) {
            if (book.category.scientific) return book;
        }).length;
        const artAll = PRODUCTS.filter(function (book) {
            if (book.category.artistic) return book;
        }).length;
        const artCurr = store.books.filter(function (book) {
            if (book.category.artistic) return book;
        }).length;
        const busAll = PRODUCTS.filter(function (book) {
            if (book.category.business) return book;
        }).length;
        const busCurr = store.books.filter(function (book) {
            if (book.category.business) return book;
        }).length;
        const chilAll = PRODUCTS.filter(function (book) {
            if (book.category.children) return book;
        }).length;
        const chilCurr = store.books.filter(function (book) {
            if (book.category.children) return book;
        }).length;
        const stokAll = PRODUCTS.filter(function (book) {
            if (typeof book.quantity === 'number') return book;
        }).length;
        const stokCurr = store.books.filter(function (book) {
            if (typeof book.quantity === 'number') return book;
        }).length;
        const stokOrderAll = PRODUCTS.filter(function (book) {
            if (book.quantity === 'Под заказ') return book;
        }).length;
        const stokOrderCurr = store.books.filter(function (book) {
            if (book.quantity === 'Под заказ') return book;
        }).length;
        const stokNoAll = PRODUCTS.filter(function (book) {
            if (book.quantity === 'Под заказ') return book;
        }).length;
        const stokNoCurr = store.books.filter(function (book) {
            if (book.quantity === 'Под заказ') return book;
        }).length;
        const countSoftAll = PRODUCTS.filter(function (book) {
            if (book.type === 'Мягкий переплёт') return book;
        }).length;
        const countSoftCurr = store.books.filter(function (book) {
            if (book.type === 'Мягкий переплёт') return book;
        }).length;
        const countHardAll = PRODUCTS.filter(function (book) {
            if (book.type === 'Твердый переплёт') return book;
        }).length;
        const countHardCurr = store.books.filter(function (book) {
            if (book.type === 'Твердый переплёт') return book;
        }).length;
        const countIntAll = PRODUCTS.filter(function (book) {
            if (book.type === 'Интегральный переплёт') return book;
        }).length;
        const countIntCurr = store.books.filter(function (book) {
            if (book.type === 'Интегральный переплёт') return book;
        }).length;

        return {
            belorussian: {
                countAll: belAll,
                countCurr: belCurr,
            },
            foreign: {
                countAll: forAll,
                countCurr: forCurr,
            },
            computer: {
                countAll: compAll,
                countCurr: compCurr,
            },
            scientific: {
                countAll: sciAll,
                countCurr: sciCurr,
            },
            artistic: {
                countAll: artAll,
                countCurr: artCurr,
            },
            business: {
                countAll: busAll,
                countCurr: busCurr,
            },
            children: {
                countAll: chilAll,
                countCurr: chilCurr,
            },
            stok: {
                countAll: stokAll,
                countCurr: stokCurr,
                countOrderAll: stokOrderAll,
                countOrderCurr: stokOrderCurr,
                countNoAll: stokNoAll,
                countNoCurr: stokNoCurr,
            },
            type: {
                countSoftAll: countSoftAll,
                countSoftCurr: countSoftCurr,
                countHardAll: countHardAll,
                countHardCurr: countHardCurr,
                countIntAll: countIntAll,
                countIntCurr: countIntCurr,
            },
        };
    }

    getMainPageHtml() {
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
                  <div id='filter-bel-count'class="filter-matching">${this.getBooksCount().belorussian.countAll}/ ${
            this.getBooksCount().belorussian.countCurr
        }</div>
                </li>
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>Иностранная литература</p>
                  <div id='filter-for-count' class="filter-matching">${this.getBooksCount().foreign.countAll}/ ${
            this.getBooksCount().foreign.countCurr
        } </div>
                </li>
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>Компьютерная литература</p>
                  <div id='filter-comp-count' class="filter-matching">${this.getBooksCount().computer.countAll}/ ${
            this.getBooksCount().computer.countCurr
        }</div>
                </li>
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>Научная литература</p>
                  <div id='filter-sci-count' class="filter-matching">${this.getBooksCount().scientific.countAll}/ ${
            this.getBooksCount().scientific.countCurr
        }</div>
                </li>
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>Художественная литература</p>
                  <div id='filter-art-count' class="filter-matching">${this.getBooksCount().artistic.countAll}/ ${
            this.getBooksCount().artistic.countCurr
        }</div>
                </li>
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>Бизнес литература</p>
                  <div id='filter-bus-count' class="filter-matching">${this.getBooksCount().business.countAll}/ ${
            this.getBooksCount().business.countCurr
        }</div>
                </li>
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>Детская литература</p>
                  <div id='filter-chil-count' class="filter-matching">${this.getBooksCount().children.countAll}/ ${
            this.getBooksCount().children.countCurr
        }</div>                
              </ul>
            </div>
            <div class="all-filters__category">
              <h3 class="category__title">Наличие</h3>
              <ul class="category">
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>На складе</p>
                  <div id='filter-stok-count' class="filter-matching">${this.getBooksCount().stok.countAll}/ ${
            this.getBooksCount().stok.countCurr
        }</div>
                </li>
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>Под заказ</p>
                  <div id='filter-stokOrd-count' class="filter-matching">${this.getBooksCount().stok.countOrderAll}/ ${
            this.getBooksCount().stok.countOrderCurr
        }</div>
                </li>
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>Нет в наличии</p>
                  <div id='filter-stokNoOrd-count' class="filter-matching">${this.getBooksCount().stok.countNoAll}/ ${
            this.getBooksCount().stok.countNoCurr
        }</div>
                </li>
              </ul>
            </div>
            <div class="all-filters__category">
              <h3 class="category__title">Обложка</h3>
              <ul class="category">
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>Мягкая обложка</p>
                  <div id='filter-soft-count' class="filter-matching">${this.getBooksCount().type.countSoftAll}/ ${
            this.getBooksCount().type.countSoftCurr
        }</div>
                </li>
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>Твёрдый переплёт</p>
                  <div id='filter-hard-count' class="filter-matching">${this.getBooksCount().type.countHardAll}/ ${
            this.getBooksCount().type.countHardCurr
        }</div>
                </li>
                <li class="categoty__item">
                  <input type="checkbox">
                  <p>Интегральный переплёт</p>
                  <div id='filter-int-count' class="filter-matching">${this.getBooksCount().type.countIntAll}/ ${
            this.getBooksCount().type.countIntCurr
        }</div>
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
                ${this.getSelectOption()}
              </div>
              <h3>Found: <span class="found">${store.books.length}</span></h3>
              <div class="search">
                <input id='live-search' type="text">
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
            ${this.getBooksHtml()}
              </div> 
            </div>
          </section>
        </div>
      </main>`;
    }
}
