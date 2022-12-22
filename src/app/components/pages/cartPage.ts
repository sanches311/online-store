import { cart } from '../store';

export default {
    getCartPageHtml(): string {
        let html = '<h1>This is cart</h1>';
        for (let i = 0; i < cart.length; i += 1) {
            html += `
            <div id=${cart[i].id} class="product">
            <span id=${cart[i].id}>${cart[i].name}</span>
            <span id=${cart[i].id}>${cart[i].author}</span>
            <span id=${cart[i].id}>${cart[i].country}</span>
            <span id=${cart[i].id}>${cart[i].price}</span>
            </div> `;
        }
        return html;
    },
};
