import store from '../store/store';
import MainPage from './pages/mainPage';

export const render = (html: string) => {
    const container = document.getElementById('container') as HTMLDivElement;
    container.innerHTML = html;
};

export const renderProduct = (html: string) => {
    const container = document.querySelector('.all-products__container') as HTMLDivElement;
    container.innerHTML = html;
};

export const renderBooksCount = () => {
    const container = document.querySelector('.found') as HTMLSpanElement;
    const count = String(store.books.length);
    container.textContent = count;
};

export const renderBooksFilterCount = () => {
    const bell = document.getElementById('filter-bel-count') as HTMLDivElement;
    const mainPge = new MainPage();
    bell.textContent = `${mainPge.getBooksCount().belorussian.countAll} /${
        mainPge.getBooksCount().belorussian.countCurr
    }`;
};
