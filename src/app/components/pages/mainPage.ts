import { PRODUCTS } from '../../db/products.db';
import { Product } from '../../interfaces/Product';
import { Sort } from '../../interfaces/Sort';
import MainProductItem from './productItem/mainProductItem';
import store from '../../store/store';
import Filter from './filter';
import localStorageState from '../../store/state';
import header from './componentsClasses/header';

interface Ioptions {
  options: Array<{ value: string; label: string }>;
  currentOptions: string;
}

export default class MainPage {
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

  addEvents(): void {
    const addButtons = Array.from(document.querySelectorAll('.main-add-button'));
    addButtons.forEach((elem) => {
      elem.addEventListener('click', (e): void => {
        const target = e.target as HTMLElement;
        localStorageState.putProducts(Number(target.id.substring(8)));
        header.changeMainHeader();
      });
    });
  }

  getSelectOption(): string {
    const curr = (value: string): string | boolean => {
      const url = new URL(window.location.href);
      const sort = url.searchParams.get('sort');
      if (sort) {
        this.stateOptions.currentOptions = sort;
      }
      if (value === this.stateOptions.currentOptions) {
        return 'selected';
      }
      return false;
    };
    const filter = new Filter(PRODUCTS);
    filter.sort();
    return `
      <select id="sort" class="main-select">
      ${this.stateOptions.options
        .map((option) => `<option ${curr(option.value)} value='${option.value}'>${option.label}</option>`)
        .join('')}
      </select>`;
  }

  getBooksHtml(): string {
    const url = new URL(window.location.href);
    const view = url.searchParams.get('big');
    const filter = new Filter(store.books);

    filter.sort();
    filter.liveSearch();
    filter.filterCategory();
    filter.filterQuantity();
    filter.filterType();

    return store.books
      .map((item: Product) => new MainProductItem(item))
      .map((product: MainProductItem) => (view === 'false' ? product.books3Column() : product.books2Column()))
      .join('');
  }

  getBooksCount(): Sort {
    const belAll = PRODUCTS.filter((book) => (book.category.belorussian ? book : false)).length;
    const belCurr = store.books.filter((book) => (book.category.belorussian ? book : false)).length;
    const forAll = PRODUCTS.filter((book) => (book.category.foreign ? book : false)).length;
    const forCurr = store.books.filter((book) => (book.category.foreign ? book : false)).length;
    const compAll = PRODUCTS.filter((book) => (book.category.computer ? book : false)).length;
    const compCurr = store.books.filter((book) => (book.category.computer ? book : false)).length;
    const sciAll = PRODUCTS.filter((book) => (book.category.scientific ? book : false)).length;
    const sciCurr = store.books.filter((book) => (book.category.scientific ? book : false)).length;
    const artAll = PRODUCTS.filter((book) => (book.category.artistic ? book : false)).length;
    const artCurr = store.books.filter((book) => (book.category.artistic ? book : false)).length;
    const busAll = PRODUCTS.filter((book) => (book.category.business ? book : false)).length;
    const busCurr = store.books.filter((book) => (book.category.business ? book : false)).length;
    const chilAll = PRODUCTS.filter((book) => (book.category.children ? book : false)).length;
    const chilCurr = store.books.filter((book) => (book.category.children ? book : false)).length;
    const stokAll = PRODUCTS.filter((book) => (typeof book.quantity === 'number' ? book : false)).length;
    const stokCurr = store.books.filter((book) => (typeof book.quantity === 'number' ? book : false)).length;
    const stokOrderAll = PRODUCTS.filter((book) => (book.quantity === 'Под заказ' ? book : false)).length;
    const stokOrderCurr = store.books.filter((book) => (book.quantity === 'Под заказ' ? book : false)).length;
    const stokNoAll = PRODUCTS.filter((book) => (book.quantity === 'Под заказ' ? book : false)).length;
    const stokNoCurr = store.books.filter((book) => (book.quantity === 'Под заказ' ? book : false)).length;
    const countSoftAll = PRODUCTS.filter((book) => (book.type === 'Мягкий переплёт' ? book : false)).length;
    const countSoftCurr = store.books.filter((book) => (book.type === 'Мягкий переплёт' ? book : false)).length;
    const countHardAll = PRODUCTS.filter((book) => (book.type === 'Твердый переплёт' ? book : false)).length;
    const countHardCurr = store.books.filter((book) => (book.type === 'Твердый переплёт' ? book : false)).length;
    const countIntAll = PRODUCTS.filter((book) => (book.type === 'Интегральный переплёт' ? book : false)).length;
    const countIntCurr = store.books.filter((book) => (book.type === 'Интегральный переплёт' ? book : false)).length;

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
        countSoftAll,
        countSoftCurr,
        countHardAll,
        countHardCurr,
        countIntAll,
        countIntCurr,
      },
    };
  }

  getMainPageHtml(): string {
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
                <input name='belorussian' class='category-book' type="checkbox">
                <p>Книги на белорусском языке</p>
                <div id='filter-bel-count'class="filter-matching">${this.getBooksCount().belorussian.countAll}/ ${
      this.getBooksCount().belorussian.countCurr
    }</div>
              </li>
              <li class="categoty__item">
                <input name='foreign' class='category-book' type="checkbox">
                <p>Иностранная литература</p>
                <div id='filter-for-count' class="filter-matching">${this.getBooksCount().foreign.countAll}/ ${
      this.getBooksCount().foreign.countCurr
    } </div>
              </li>
              <li class="categoty__item">
                <input name='computer' class='category-book' type="checkbox">
                <p>Компьютерная литература</p>
                <div id='filter-comp-count' class="filter-matching">${this.getBooksCount().computer.countAll}/ ${
      this.getBooksCount().computer.countCurr
    }</div>
              </li>
              <li class="categoty__item">
                <input name='scientific' class='category-book' type="checkbox">
                <p>Научная литература</p>
                <div id='filter-sci-count' class="filter-matching">${this.getBooksCount().scientific.countAll}/ ${
      this.getBooksCount().scientific.countCurr
    }</div>
              </li>
              <li class="categoty__item">
                <input name='artistic' class='category-book' type="checkbox">
                <p>Художественная литература</p>
                <div id='filter-art-count' class="filter-matching">${this.getBooksCount().artistic.countAll}/ ${
      this.getBooksCount().artistic.countCurr
    }</div>
              </li>
              <li class="categoty__item">
                <input name='business' class='category-book' type="checkbox">
                <p>Бизнес литература</p>
                <div id='filter-bus-count' class="filter-matching">${this.getBooksCount().business.countAll}/ ${
      this.getBooksCount().business.countCurr
    }</div>
              </li>
              <li class="categoty__item">
                <input name='children' class='category-book' type="checkbox">
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
                <input  name='stok' class='quantity-book' type="checkbox">
                <p>На складе</p>
                <div id='filter-stok-count' class="filter-matching">${this.getBooksCount().stok.countAll}/ ${
      this.getBooksCount().stok.countCurr
    }</div>
              </li>
              <li class="categoty__item">
                <input name='order' class='quantity-book' type="checkbox">
                <p>Под заказ</p>
                <div id='filter-stokOrd-count' class="filter-matching">${this.getBooksCount().stok.countOrderAll}/ ${
      this.getBooksCount().stok.countOrderCurr
    }</div>
              </li>
              <li class="categoty__item">
                <input name='stokNo' class='quantity-book' type="checkbox">
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
                <input name='soft' class='type-book' type="checkbox">
                <p>Мягкая обложка</p>
                <div id='filter-soft-count' class="filter-matching">${this.getBooksCount().type.countSoftAll}/ ${
      this.getBooksCount().type.countSoftCurr
    }</div>
              </li>
              <li class="categoty__item">
                <input name='hard' class='type-book' type="checkbox">
                <p>Твёрдый переплёт</p>
                <div id='filter-hard-count' class="filter-matching">${this.getBooksCount().type.countHardAll}/ ${
      this.getBooksCount().type.countHardCurr
    }</div>
              </li>
              <li class="categoty__item">
                <input name='integral' class='type-book' type="checkbox">
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
