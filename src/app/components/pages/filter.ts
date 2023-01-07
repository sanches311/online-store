import { Product } from '../../interfaces/Product';
import store from '../../store/store';

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
}
