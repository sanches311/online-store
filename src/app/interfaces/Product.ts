export interface Product {
  id: number;
  title: string;
  author: string;
  year: number;
  type: string;
  category: {
    artistic: boolean;
    belorussian: boolean;
    business: boolean;
    children: boolean;
    computer: boolean;
    foreign: boolean;
    scientific: boolean;
  };
  description: string;
  price: number;
  quantity: number | string;
  imageUrl: [string, string];
}
