import { PRODUCTS } from '../../db/products.db';

export default class BookPage {
    constructor(private id: number) {
        this.addEvents();
    }
    getBook() {
        return PRODUCTS.filter((item) => item.id === this.id)[0];
    }
    getBreadCrumbs() {
        let html = '';
        const category = this.getBook().category;

        for (const key in category) {
            if (category[key as keyof typeof category]) {
                html += `<li class="breadcrumbs__item">${key}</li>`;
            }
        }
        return html;
    }

    getBookPageHtml(): string {
        const item = this.getBook();
        
        return `<main class="product-details-page">
        <div class="container">
            <div class="breadcrumbs">
                <ul>
                <a href="/"><li class="breadcrumbs__item">store</li></a>
                ${this.getBreadCrumbs()}
                </ul>
            </div>
            <section class="product-info">
                <div class="carousel">
                    <div class="show-img">
                        <img id="main-product-img" src="${item.imageUrl[0]}"
                            alt="An image of the selected book.">
                    </div>
                    <div class="carousel-img">
                        <div class="carousel-img__item">
                            <img class="item-img"
                                src="${item.imageUrl[0]}"
                                alt="Another picture of the book.">
                        </div>
                        <div class="carousel-img__item">
                            <img class="item-img"
                                src="${item.imageUrl[1]}"
                                alt="Another picture of the book.">
                        </div>
                    </div>
                </div>
                <div class="description">
                    <h2 class="description__title">${item.title}</h2>
                    <div class="description__info">${item.description}</div>
                    <div class="description__category">
                        <div class="column">
                            <div class="category-item">
                                <p class="category-item__name">Автор:</p>
                                <p class="category-item__description">${item.author}</p>
                            </div>
                            <div class="category-item">
                                <p class="category-item__name">Год издания:</p>
                                <p class="category-item__description">${item.year}</p>
                            </div>
                        </div>
                        <div class="column">
                            <div class="category-item">
                                <p class="category-item__name">В наличии:</p>
                                <p class="category-item__description">${item.quantity}</p>
                            </div>
                            <div class="category-item">
                            <p class="category-item__name">Обложка:</p>
                            <p class="category-item__description">${item.type}</p>
                        </div>
                        </div>
                    </div>
                    <div class="column-3">
                        <div class="description__price">
                            <p class="price">${item.price}</p>
                            <p class="currency"> USD</p>
                        </div>
                        <div class="description__button">
                            <button class="description-add">Add to cart</button>
                            <button class="description-buy">Buy now</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>`;
    }
    addEvents() {
        const imgItems = Array.from(document.querySelectorAll('.item-img'));
        const mainImg = document.getElementById('main-product-img');

        for(let x = 0; x < imgItems.length; x++) {
            let img = imgItems[x];
            img.addEventListener('click', function(e) {
                const target = e.target as Element
                if (mainImg?.getAttribute('src') !== target.getAttribute('src')) {
                    mainImg?.setAttribute('src', `${target.getAttribute('src')}`)
                }
            })
        }


    }
}
