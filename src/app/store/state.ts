import { Product } from '../interfaces/Product';

export interface CartProducts {
  
    amount: number;
    product: Product;

};
export class LocalStorageState {
  static getProducts() {
    throw new Error("Method not implemented.");
  }
  constructor() {
    
  }
  private keyName = 'products';
  getProducts() {
    const productsLocalStorage = localStorage.getItem(this.keyName);
    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage);
    }
    return [];
  }
  putProducts(id: number) {
    let products = this.getProducts();
    const index = products.indexOf(id);
    if (index === -1) {
      products.push(id);
    } else {
      products.splice(index, 1);
    }
    
    localStorage.setItem(this.keyName, JSON.stringify(products));
  }
}
let localStorageState = new LocalStorageState();
export default localStorageState;
