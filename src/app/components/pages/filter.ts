import { Product } from '../../interfaces/Product';
import store from '../../store/store';
import { PRODUCTS } from '../../db/products.db';

export default class Filter {
  constructor(private books: Array<Product>) {}

  sort(): void {
    const url = new URL(window.location.href);
    const sortOpt = url.searchParams.get('sort');
    if (sortOpt) {
      const pos = sortOpt.indexOf('-');
      const sortItem = sortOpt.slice(0, pos);
      const sortBy = sortOpt.slice(pos + 1);

      if (sortItem === 'year' || sortItem === 'price') {
        if (sortBy === 'dec') {
          store.books = this.books.sort((a, b) => a[sortItem] - b[sortItem]).reverse();
        }
        if (sortBy === 'inc') {
          store.books = this.books.sort((a, b) => a[sortItem] - b[sortItem]);
        }
      }
    }
  }

  liveSearch(): void {
    const url = new URL(window.location.href);
    const search = url.searchParams.get('search');
    if (search) {
      store.books = this.books.filter(
        (book) => book.author.indexOf(search) > 0 || book.title.indexOf(search) > 0 || book.type.indexOf(search) > 0
      );
    } else store.books = PRODUCTS;
  }

  filterCategory(): void {
    const url = new URL(window.location.href);
    const category = url.searchParams.getAll('category');
    if (category.length) {
      category.forEach((value) => {
        store.books = this.books.filter((item: Product) => {
          if (
            value === 'artistic' ||
            value === 'belorussian' ||
            value === 'business' ||
            value === 'children' ||
            value === 'computer' ||
            value === 'foreign' ||
            value === 'scientific'
          ) {
            return item.category[value] === true;
          }
          return false;
        });
      });
    } else store.books = PRODUCTS;
  }

  filterQuantity(): void {
    const url = new URL(window.location.href);
    const category = url.searchParams.getAll('quantity');
    if (category.length) {
      category.forEach((value) => {
        store.books = this.books.filter((item: Product) => {
          if (value === 'stok') return item.quantity > 0;
          if (value === 'stokNo') return item.quantity === 0;
          if (value === 'order') return item.quantity === 'Под заказ';
          return item.quantity;
        });
      });
    }
  }

  filterType(): void {
    const url = new URL(window.location.href);
    const category = url.searchParams.getAll('type');
    if (category.length) {
      category.forEach((value) => {
        store.books = this.books.filter((item: Product) => {
          if (value === 'soft') return item.type === 'Мягкая обложка';
          if (value === 'hard') return item.type === 'Твердый переплет';
          if (value === 'integral') return item.type === 'Интегральный переплёт';
          return item.type;
        });
      });
    }
  }
}
