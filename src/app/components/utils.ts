import logoImg from '../../assets/img/logo.png';

const loadLogo = (): void => {
  const logo = document.querySelector('.logo-img') as HTMLImageElement;
  logo.src = logoImg;

  function navigateLogo(): void {
    window.location.href = '/';
  }
  const logoContainer = document.getElementById('logo-container');
  logoContainer?.addEventListener('click', navigateLogo);
};

export default loadLogo;
