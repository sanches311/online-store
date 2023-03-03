import '../style/app.scss';
import '../style/page/_modalPage.scss';
import initRoute from './components/router';
import loadLogo from './components/utils';
import listen from './components/listen';
import header from './components/pages/componentsClasses/header';

header.changeMainHeader();
initRoute();
loadLogo();
listen.listenselectBook();
listen.listenView();
listen.listenSort();
listen.listenBack();
listen.listenLiveSearch();
listen.listenFilterCategory();
listen.listenFilterQuantity();
listen.listenFilterType();
