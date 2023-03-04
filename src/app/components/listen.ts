import MainPage from './pages/mainPage';
import { renderProduct, render, renderBooksCount, renderBooksFilterCount } from './view';
import Filter from './pages/filter';
import store from '../store/store';

export default {
  listenselectBook(): void {
    document.addEventListener('click', (event): void => {
      const target = event.target as HTMLElement;
      if (target.closest('.details-button')) {
        const idBook = target.getAttribute('id');
        window.location.hash = `book/${idBook}`;
      }
    });
  },

  listenView(): void {
    document.addEventListener('click', (event): void => {
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
        renderProduct(html);
      }
    });
  },

  listenSort(): void {
    document.addEventListener('change', (event): void => {
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
        renderProduct(html);
        mainPage.stateOptions.currentOptions = sortOpt;
      }
    });
  },

  listenBack(): void {
    window.addEventListener(
      'popstate',
      (): void => {
        const mainPage = new MainPage();
        const html = mainPage.getMainPageHtml();
        render(html);
        renderBooksCount();
        renderBooksFilterCount();
      },
      false
    );
  },

  listenLiveSearch(): void {
    document.addEventListener('input', (event): void => {
      const target = event.target as HTMLElement;
      if (target.closest('#live-search')) {
        const targetClosed = event.target as HTMLInputElement;
        const url = new URL(window.location.href);
        url.searchParams.set('search', targetClosed.value);
        window.history.pushState({}, '', url);
        if (!targetClosed.value) {
          url.searchParams.delete('search');
          window.history.pushState({}, '', url);
        }
        const filter = new Filter(store.books);
        filter.liveSearch();
        const mainPage = new MainPage();
        const html = mainPage.getBooksHtml();
        renderProduct(html);
        renderBooksCount();
        renderBooksFilterCount();
      }
    });
  },

  listenFilterCategory(): void {
    document.addEventListener('click', async (event): Promise<void> => {
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
      renderProduct(html);
      renderBooksCount();
      renderBooksFilterCount();
    });
  },

  listenFilterQuantity(): void {
    document.addEventListener('click', async (event): Promise<void> => {
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
      renderProduct(html);
      renderBooksCount();
      renderBooksFilterCount();
    });
  },

  listenFilterType(): void {
    document.addEventListener('click', async (event): Promise<void> => {
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
      renderProduct(html);
      renderBooksCount();
      renderBooksFilterCount();
    });
  },
};
