import '../style/app.scss';
import '../style/page/_modalPage.scss';
import { initRoute } from './components/router';
import Listen from './components/listen';
import { loadLogo } from './components/utils';
import listen from './components/listen';
import MainPage from './components/pages/mainPage';
import { render } from './components/view';

const mainPage = new MainPage();
initRoute();
Listen.listenselectBook();
Listen.listenView();
listen.listenSort();
loadLogo();
addEventListener("popstate",function(e){
const html = mainPage.getMainPageHtml();
render(html!);
},false);