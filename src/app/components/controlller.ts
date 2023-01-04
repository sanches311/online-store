import { render } from './view';
import MainPage from './pages/mainPage';
import notFoundPage from './pages/notFoundPage';
import Cart from './pages/cartPage';
import BookPage from './pages/bookPage';

const cartPage = new Cart();
const mainPage = new MainPage();

export default {
    async startRoute(): Promise<void> {
        const mainPageHtml = await mainPage.getMainPageHtml();
        render(mainPageHtml);
    },
    async bookRoute(props: { id: number }) {
        const bookPage = new BookPage(props.id);
        const bookPageHtml = await bookPage.getBookPageHtml();
        render(bookPageHtml);
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
