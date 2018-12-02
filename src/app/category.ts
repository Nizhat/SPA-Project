import { Product } from './product';

export class Category {
    id: number;
    name: string;
    products: Product[] = [];
    
    addProduct(prod: Product):void {
        this.products.push(prod);
    }
}

