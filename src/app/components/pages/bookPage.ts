import { products } from '../store';

export default {
    getBookPageHtml(id: number): string {
        const product = products.filter((item) => item.id === id);
        let html = '';
        if (product.length) {
            html += `
            <div id=${product[0].id} class="product">
            <span id=${product[0].id}>${product[0].name}</span>
            <span id=${product[0].id}>${product[0].author}</span>
            <span id=${product[0].id}>${product[0].country}</span>
            <span id=${product[0].id}>${product[0].price}</span>
            </div> `;
        }
        return html;
    },
};
