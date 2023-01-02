import { render } from './view';
import MainPage from './pages/mainPage';
import notFoundPage from './pages/notFoundPage';
import Cart from './pages/cartPage';
import bookPage from './pages/bookPage';

let cartPage = new Cart();
let mainPage = new MainPage();

export default {
    async startRoute(): Promise<void> {
        const products = await mainPage.render();
        render(products);
        mainPage.addEvents();
    },
    async bookRoute(props: { id: number }) {
        const product = await bookPage.getBookPageHtml(props.id);
        render(product);
    },
    async cartRoute(): Promise<void> {
        document.title = 'online-store cart';
        const cart = await cartPage.render();
        render(cart);
    },
    notFoundRoute() {
        document.title = 'Not found page';
        render(notFoundPage.getNotFounPage());
    },
};
