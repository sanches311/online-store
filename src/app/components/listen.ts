import { PRODUCTS } from '../db/products.db';
import MainPage from './pages/mainPage';
import { renderProduct } from './view';
import store from '../store/store';
import Filter from './pages/filter';

const mainPage = new MainPage();

export default {
    listenselectBook() {
        document.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
            if (target.closest('.main-page-item-button')) {
                const idBook = target.getAttribute('id');
                location.hash = `book/${idBook}`;
            }
        });
    },

    listenView() {
        document.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
            const url = new URL(window.location.href);
            const html = mainPage.getBooksHtml();
            if (target.closest('.material-symbols-outlined')) {
                if (target.textContent === 'apps') {
                    url.searchParams.set('big', 'false');
                    window.history.pushState({}, '', url);
                }
                if (target.textContent === 'drag_indicator') {
                    url.searchParams.set('big', 'true');
                    window.history.pushState({}, '', url);
                }
                renderProduct(html!);
            }
        });
    },
    listenSort() {
        document.addEventListener('change', (event) => {
            const target = event.target as HTMLSelectElement;
            if (target.closest('#sort')) {
                const sortOpt = target.options[target.selectedIndex].value;
                const url = new URL(window.location.href);
                url.searchParams.set('sort', sortOpt);
                window.history.pushState({}, '', url);
                const filter = new Filter(store.books);
                filter.sort();
                const html = mainPage.getBooksHtml();
                renderProduct(html!);
                localStorage.setItem('sort', sortOpt);
                mainPage.stateOptions.currentOptions = sortOpt;
            }
        });
    },
};
