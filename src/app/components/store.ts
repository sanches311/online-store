export interface IProducts {
    id: number;
    name: string;
    author: string;
    country: string;
    price: number;
    image: string;
}

export const products: Array<IProducts> = [
    { id: 1, name: 'ABC', author: 'Shekspir', country: 'British', price: 100, image: '' },
    { id: 2, name: 'ABCD', author: 'dsvsd', country: 'Spain', price: 100, image: '' },
    { id: 3, name: 'add', author: 'Толстой', country: 'Russia', price: 100, image: '' },
    { id: 4, name: 'dsvsdv', author: 'ы', country: 'Italy', price: 100, image: '' },
    { id: 5, name: 'dvsd', author: 'fvfd', country: 'Belarus', price: 100, image: '' },
];

export const cart: Array<IProducts> = [
    { id: 3, name: 'add', author: 'Толстой', country: 'Russia', price: 100, image: '' },
    { id: 4, name: 'dsvsdv', author: 'ы', country: 'Italy', price: 100, image: '' },
];
