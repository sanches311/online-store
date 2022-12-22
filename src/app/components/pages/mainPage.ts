import { products } from '../store';

export default {
    getMainPageHtml(): string {
        let booksHtml = '';
        for (let i = 0; i < products.length; i += 1) {
            booksHtml += `            
        <div id=${products[i].id} class="product">
          <span id=${products[i].id} class="book">${products[i].name}</span>
          <span id=${products[i].id} class="book">${products[i].author}</span>
          <span id=${products[i].id} class="book">${products[i].country}</span>
          <span id=${products[i].id} class="book">${products[i].price}</span>
        </div>
         `;
        }
        const html = `
        <div class="main-content">
        <div class="filter">
          <div class="filter-country">
            <fieldset>
                <legend>Страна автора</legend>
                  <input class='filter-country-name' type="checkbox" name="Англия">Англия</input>
                  <input class='filter-country-name' type="checkbox" name="Россия">Россия</input>
                  <input class='filter-country-name' type="checkbox" name="США">США</input>
                  <input class='filter-country-name' type="checkbox" name="Швейцария">Швейцария</input>
                  <input class='filter-country-name' type="checkbox" name="Канада">Канада</input>
            </fieldset>
          </div>
          <div class="filter-author">
            <fieldset>
                <legend>Автор</legend>
                  <input class='filter-author-name' type="checkbox" name="Бестселлер">Бестселлер</input>
                  <input class='filter-author-name' type="checkbox" name="Художественная литература">Художественная литература</input>
                  <input class='filter-author-name' type="checkbox" name="Учебная литература">Учебная литература</input>
                  <input class='filter-author-name' type="checkbox" name="Книги для детей">Книги для детей</input>
            </fieldset>
            </div>
            <div class="filter-cover">
            <fieldset>
                <legend>Переплет</legend>
                  <input class='filter-cover-book' type="checkbox" name="Мягкий">Мягкий</input>
                  <input class='filter-cover-book' type="checkbox" name="Твердый">Твердый</input>
            </fieldset>
          </div>
          <div class="filter-price">          
              <legend>Цена</legend>
                <input class='filter-price-book'  placeholder="от"></input>
                <input class='price-book'  placeholder="до"></input>          
          </div>
        </div>
        <div class="books-box">
          ${booksHtml}
        </div>
        </div>
        `;

        return html;
    },
};
