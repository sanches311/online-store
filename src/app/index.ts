import '../style/app.scss';
import '../style/page/_modalPage.scss';
import { initRoute } from './components/router';
import Listen from './components/listen';
import { loadLogo } from './components/utils';
import listen from './components/listen';

initRoute();
loadLogo();
Listen.listenselectBook();
Listen.listenView();
listen.listenSort();
listen.listenBack();
listen.listenLiveSearch();
listen.listenFilterCategory();
listen.listenFilterQuantity();
Listen.listenFilterType();
