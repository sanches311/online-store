import { products } from '../store';

export default {
    getBookPageHtml(id: number): string {
        let html: string = `<main class="product-details-page">
        <div class="container">
            <div class="breadcrumbs">
                <ul>
                    <li class="breadcrumbs__item">Store</li>
                    <li class="breadcrumbs__item">Laptops</li>
                    <li class="breadcrumbs__item">Apple</li>
                    <li class="breadcrumbs__item breadcrumbs__item_active">Macbook pro</li>
                </ul>
            </div>
            <section class="product-info">
                <div class="carousel">
                    <div class="show-img">
                        <img src="https://img.freepik.com/free-photo/wide-angle-shot-of-a-single-tree-growing-under-a-clouded-sky-during-a-sunset-surrounded-by-grass_181624-22807.jpg?w=2000"
                            alt="An image of the selected book.">
                    </div>
                    <div class="carousel-img">
                        <div class="carousel-img__item">
                            <img class="item-img"
                                src="https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469601_nature_gora.jpg"
                                alt="Another picture of the book.">
                        </div>
                        <div class="carousel-img__item">
                            <img class="item-img"
                                src="https://img.freepik.com/free-photo/mountains-lake_1398-1150.jpg?w=2000"
                                alt="Another picture of the book.">
                        </div>
                        <div class="carousel-img__item">
                            <img class="item-img"
                                src="https://upload.wikimedia.org/wikipedia/commons/9/94/Desert_Electric.jpg"
                                alt="Another picture of the book.">
                        </div>
                    </div>
                </div>
                <div class="description">
                    <h2 class="description__title">Название книги</h2>
                    <div class="description__info">Carrots from Tomissy Farm are one of the best on the market.
                        Tomisso and his family are giving a full love to his Bio products. Tomisso’s carrots are
                        growing on the fields naturally.</div>
                    <div class="description__category">
                        <div class="column">
                            <div class="category-item">
                                <p class="category-item__name">Stock:</p>
                                <p class="category-item__description">In Stock</p>
                            </div>
                            <div class="category-item">
                                <p class="category-item__name">Stock:</p>
                                <p class="category-item__description">In Stockmm</p>
                            </div>
                            <div class="category-item">
                                <p class="category-item__name">Stock:</p>
                                <p class="category-item__description">In Stock</p>
                            </div>
                        </div>
                        <div class="column">
                            <div class="category-item">
                                <p class="category-item__name">Stock:</p>
                                <p class="category-item__description">In Stock</p>
                            </div>
                            <div class="category-item">
                                <p class="category-item__name">Stock:</p>
                                <p class="category-item__description">In Stock</p>
                            </div>
                            <div class="category-item">
                                <p class="category-item__name">Stock:</p>
                                <p class="category-item__description">In Stock</p>
                            </div>
                        </div>
                    </div>
                    <div class="column-3">
                        <div class="description__price">
                            <p class="price">36.23</p>
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
        return html;
    },
};
