import img404 from '../../../assets/img/page-404/page-404.png';

export default {
  getNotFounPage(): string {
    const html = `<main class="main-page-not-found">
        <div class="container">
            <div class="reading">
                <img src=${img404} alt="A woman who reading a book." class="reading__picture">
                <div class="reading__border"></div>
            </div>
            <div class="sorry">
                <h2>Sorry <br> Page not found (404)</h2>
            </div>
        </div>
    </main>`;
    return html;
  },
};
