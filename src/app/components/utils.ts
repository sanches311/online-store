import logoImg from '../../assets/img/logo.png';

export const loadLogo = () => {
    const logo = document.querySelector('.logo-img') as HTMLImageElement;
    logo!.src = logoImg;
};
