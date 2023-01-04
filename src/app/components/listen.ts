import { PRODUCTS } from '../db/products.db';
import MainPage from './pages/mainPage';
import { renderProduct } from './view';

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
};
