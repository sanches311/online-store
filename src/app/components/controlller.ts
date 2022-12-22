import { render } from './view';
import mainPage from './pages/mainPage';
import notFoundPage from './pages/notFoundPage';
import cartPage from './pages/cartPage';
import bookPage from './pages/bookPage';

export default {
    async startRoute(): Promise<void> {
        const products = await mainPage.getMainPageHtml();
        render(products);
    },
    async bookRoute(props: { id: number }) {
        const product = await bookPage.getBookPageHtml(props.id);
        render(product);
    },
    async cartRoute(): Promise<void> {
        document.title = 'online-store cart';
        const cart = await cartPage.getCartPageHtml();
        render(cart);
    },
    notFoundRoute() {
        document.title = 'Not found page';
        render(notFoundPage.getNotFounPage());
    },
};
