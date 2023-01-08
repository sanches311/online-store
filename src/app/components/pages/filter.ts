import { Product } from '../../interfaces/Product';
import store from '../../store/store';
import { PRODUCTS } from '../../db/products.db';

export default class Filter {
    constructor(private books: Array<Product>) {}

    sort() {
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
    liveSearch() {
        const url = new URL(window.location.href);
        const search = url.searchParams.get('search');
        if (search) {
            store.books = this.books.filter(function (book) {
                return (
                    book.author.indexOf(search) > 0 || book.title.indexOf(search) > 0 || book.type.indexOf(search) > 0
                );
            });
        } else store.books = PRODUCTS;
    }
}
