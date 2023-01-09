import logoImg from '../../assets/img/logo.png';

export const loadLogo = () => {
    const logo = document.querySelector('.logo-img') as HTMLImageElement;
    logo!.src = logoImg;

    let logoContainer = document.getElementById('logo-container');
    logoContainer?.addEventListener('click', function(e) {
       window.location.href = '/'
    })

};


