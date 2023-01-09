import logoImg from '../../assets/img/logo.png';
import belCard from '../../assets/img/modal-window/bel.png';
import masterCard from '../../assets/img/modal-window/mastercard.png';
import visaCard from '../../assets/img/modal-window/visa.png';

export const loadLogo = () => {
    const logo = document.querySelector('.logo-img') as HTMLImageElement;
    logo!.src = logoImg;
};
