import logoImg from '../../assets/img/logo.png';
import controlller from './controlller';
import listen from './listen';
import MainPage from './pages/mainPage';
import { renderProduct } from './view';


export const loadLogo = () => {
    const logo = document.querySelector('.logo-img') as HTMLImageElement;
    logo!.src = logoImg;

    let logoContainer = document.getElementById('logo-container');
    logoContainer?.addEventListener('click', function(e) {
       window.location.href = '/'
    })

};


