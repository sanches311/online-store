import MainPage from './pages/mainPage';
import { renderProduct, render, renderBooksCount, renderBooksFilterCount } from './view';
import Filter from './pages/filter';
import store from '../store/store';

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
            const mainPage = new MainPage();
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
                const mainPage = new MainPage();
                const html = mainPage.getBooksHtml();
                renderProduct(html!);
                mainPage.stateOptions.currentOptions = sortOpt;
            }
        });
    },
    listenBack() {
        addEventListener('popstate', function (e) {
                const mainPage = new MainPage();
                const html = mainPage.getMainPageHtml();
                render(html!);
                renderBooksCount();
                renderBooksFilterCount();
            },
            false
        );
    },
    listenLiveSearch() {
        document.addEventListener('input', (event) => {
            const target = event.target as HTMLElement;
            if (target.closest('#live-search')) {
                const target = event.target as HTMLInputElement;
                const url = new URL(window.location.href);
                url.searchParams.set('search', target.value);
                window.history.pushState({}, '', url);
                if (!target.value) {
                    url.searchParams.delete('search');
                    window.history.pushState({}, '', url);
                }
                const filter = new Filter(store.books);
                filter.liveSearch();
                const mainPage = new MainPage();
                const html = mainPage.getBooksHtml();
                renderProduct(html!);
                renderBooksCount();
                renderBooksFilterCount();
            }
        });
    },
    listenFilterCategory() {
        document.addEventListener('click', async (event) => {
            const target = event.target as HTMLElement;
            const url = new URL(window.location.href);
            if (target.closest('.category-book')) {
                url.searchParams.delete('category');
                window.history.pushState({}, '', url);
                const categories = document.querySelectorAll('.category-book');
                for (let i = 0; i < categories.length; i += 1) {
                    const query = categories[i].getAttribute('name');
                    if (categories[i].closest('input:checked')) {
                        if (query) {
                            url.searchParams.append('category', query);
                            window.history.pushState({}, '', url);
                        }
                    }
                }
            }
            const filter = new Filter(store.books);
            filter.filterCategory();
            const mainPage = new MainPage();
            const html = mainPage.getBooksHtml();
            renderProduct(html!);
            renderBooksCount();
            renderBooksFilterCount();
        });
    },
    listenFilterQuantity() {
        document.addEventListener('click', async (event) => {
            const target = event.target as HTMLElement;
            const url = new URL(window.location.href);

            if (target.closest('.quantity-book')) {
                url.searchParams.delete('quantity');
                window.history.pushState({}, '', url);
                const categories = document.querySelectorAll('.quantity-book');
                for (let i = 0; i < categories.length; i += 1) {
                    const query = categories[i].getAttribute('name');
                    if (categories[i].closest('input:checked')) {
                        if (query) {
                            url.searchParams.append('quantity', query);
                            window.history.pushState({}, '', url);
                        }
                    }
                }
            }
            const filter = new Filter(store.books);
            filter.filterQuantity();
            const mainPage = new MainPage();
            const html = mainPage.getBooksHtml();
            renderProduct(html!);
            renderBooksCount();
            renderBooksFilterCount();
        });
    },
    listenFilterType() {
        document.addEventListener('click', async (event) => {
            const target = event.target as HTMLElement;
            const url = new URL(window.location.href);

            if (target.closest('.type-book')) {
                url.searchParams.delete('type');
                window.history.pushState({}, '', url);
                const categories = document.querySelectorAll('.type-book');
                for (let i = 0; i < categories.length; i += 1) {
                    const query = categories[i].getAttribute('name');
                    if (categories[i].closest('input:checked')) {
                        if (query) {
                            url.searchParams.append('type', query);
                            window.history.pushState({}, '', url);
                        }
                    }
                }
            }
            const filter = new Filter(store.books);
            filter.filterType();
            const mainPage = new MainPage();
            const html = mainPage.getBooksHtml();
            renderProduct(html!);
            renderBooksCount();
            renderBooksFilterCount();
        });
    },
};
