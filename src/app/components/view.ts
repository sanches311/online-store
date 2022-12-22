export const render = (html: string) => {
    const container = document.getElementById('container') as HTMLDivElement;
    container.innerHTML = html;
};
