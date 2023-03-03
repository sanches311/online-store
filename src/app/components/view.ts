import store from '../store/store';
import MainPage from './pages/mainPage';

export const render = (html: string): void => {
  const container = document.getElementById('container') as HTMLDivElement;
  container.innerHTML = html;
};

export const renderProduct = (html: string): void => {
  const container = document.querySelector('.all-products__container') as HTMLDivElement;
  if (container) {
  container.innerHTML = html;
  }
};

export const renderBooksCount = (): void => {
  const container = document.querySelector('.found') as HTMLSpanElement;
  const count = String(store.books.length);
  if (container) {
  container.textContent = count;
  }
};

export const renderBooksFilterCount = (): void => {
  const bell = document.getElementById('filter-bel-count') as HTMLDivElement;
  const forr = document.getElementById('filter-for-count') as HTMLDivElement;
  const comp = document.getElementById('filter-comp-count') as HTMLDivElement;
  const sci = document.getElementById('filter-sci-count') as HTMLDivElement;
  const art = document.getElementById('filter-art-count') as HTMLDivElement;
  const bus = document.getElementById('filter-bus-count') as HTMLDivElement;
  const chil = document.getElementById('filter-chil-count') as HTMLDivElement;
  const stok = document.getElementById('filter-stok-count') as HTMLDivElement;
  const stokOrder = document.getElementById('filter-stokOrd-count') as HTMLDivElement;
  const stokNo = document.getElementById('filter-stokNoOrd-count') as HTMLDivElement;
  const countSoft = document.getElementById('filter-soft-count') as HTMLDivElement;
  const countHard = document.getElementById('filter-hard-count') as HTMLDivElement;
  const countInt = document.getElementById('filter-int-count') as HTMLDivElement;

  const mainPge = new MainPage();

  bell.textContent = `${mainPge.getBooksCount().belorussian.countAll} /${
    mainPge.getBooksCount().belorussian.countCurr
  }`;
  forr.textContent = `${mainPge.getBooksCount().foreign.countAll} /${mainPge.getBooksCount().foreign.countCurr}`;
  comp.textContent = `${mainPge.getBooksCount().computer.countAll} /${mainPge.getBooksCount().computer.countCurr}`;
  sci.textContent = `${mainPge.getBooksCount().scientific.countAll} /${mainPge.getBooksCount().scientific.countCurr}`;
  art.textContent = `${mainPge.getBooksCount().artistic.countAll} /${mainPge.getBooksCount().artistic.countCurr}`;
  bus.textContent = `${mainPge.getBooksCount().business.countAll} /${mainPge.getBooksCount().business.countCurr}`;
  chil.textContent = `${mainPge.getBooksCount().children.countAll} /${mainPge.getBooksCount().children.countCurr}`;
  stok.textContent = `${mainPge.getBooksCount().stok.countAll} /${mainPge.getBooksCount().stok.countCurr}`;
  stokOrder.textContent = `${mainPge.getBooksCount().stok.countOrderAll} /${
    mainPge.getBooksCount().stok.countOrderCurr
  }`;
  stokNo.textContent = `${mainPge.getBooksCount().stok.countNoAll} /${mainPge.getBooksCount().stok.countNoCurr}`;
  countSoft.textContent = `${mainPge.getBooksCount().type.countSoftAll} /${mainPge.getBooksCount().type.countSoftCurr}`;
  countHard.textContent = `${mainPge.getBooksCount().type.countHardAll} /${mainPge.getBooksCount().type.countHardCurr}`;
  countInt.textContent = `${mainPge.getBooksCount().type.countIntAll} /${mainPge.getBooksCount().type.countIntCurr}`;
};
