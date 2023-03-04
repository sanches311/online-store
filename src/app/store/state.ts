export class LocalStorageState {
  static getProducts() {
    throw new Error('Method not implemented.');
  }

  private keyName = 'products';

  getProducts() {
    const productsLocalStorage = localStorage.getItem(this.keyName);
    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage);
    }
    return [];
  }

  putProducts(id: number): void {
    const products = this.getProducts();
    const index = products.indexOf(id);
    if (index === -1) {
      products.push(id);
    } else {
      products.splice(index, 1);
    }
    localStorage.setItem(this.keyName, JSON.stringify(products));
  }

  addProducts(id: number): void {
    const products = this.getProducts();
    products.push(id);
    localStorage.setItem(this.keyName, JSON.stringify(products));
  }

  deleteProducts(id: number): void {
    const products = this.getProducts();
    const index = products.indexOf(id);
    products.splice(index, 1);
    localStorage.setItem(this.keyName, JSON.stringify(products));
  }
}
const localStorageState = new LocalStorageState();
export default localStorageState;
