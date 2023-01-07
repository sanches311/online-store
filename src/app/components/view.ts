export const render = (html: string) => {
    const container = document.getElementById('container') as HTMLDivElement;
    container.innerHTML = html;
};

export const renderProduct = (html: string) => {
    const container = document.querySelector('.all-products__container') as HTMLDivElement;
    container.innerHTML = html;
};
