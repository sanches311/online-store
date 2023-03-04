import { render } from './view';
import MainPage from './pages/mainPage';
import notFoundPage from './pages/notFoundPage';
import Cart from './pages/cartPage';
import BookPage from './pages/bookPage';

const cartPage = new Cart();

export default {
  async startRoute(): Promise<void> {
    const mainPage = new MainPage();
    const mainPageHtml = await mainPage.getMainPageHtml();
    render(mainPageHtml);
    mainPage.addEvents();
  },
  async bookRoute(props: { id: number }): Promise<void> {
    const bookPage = new BookPage(props.id);
    const bookPageHtml = await bookPage.getBookPageHtml();
    render(bookPageHtml);
    bookPage.addEvents();
  },
  async cartRoute(): Promise<void> {
    document.title = 'online-store cart';
    const cart = await cartPage.render();
    render(cart);
    cartPage.addEvents();
  },
  notFoundRoute(): void {
    document.title = 'Not found page';
    render(notFoundPage.getNotFounPage());
  },
};
