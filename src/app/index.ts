import '../style/app.scss';
import '../style/page/_modalPage.scss';
import { initRoute } from './components/router';
import Listen from './components/listen';
import { loadLogo } from './components/utils';

initRoute();
Listen.listenselectBook();
Listen.listenView();
loadLogo();
