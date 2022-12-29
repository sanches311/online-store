import '../style/app.scss';
import { initRoute } from './components/router';
import Listen from './components/listen';
import logoImg from '../assets/img/logo.png';

initRoute();
Listen.listenselectBook();

const logo = document.querySelector('.logo-img') as HTMLImageElement;
logo!.src = logoImg;
