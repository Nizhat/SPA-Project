import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];

  constructor() {
    this.products = [
      {id: 1, name: 'Ржаной', price: 50, category: 'Хлебобулочные изделия'},
      {id: 2, name: 'Багет Пшеничный', price: 30, category:'Хлебобулочные изделия'},
      {id: 3, name: 'Хлеб "Казахстан"', price: 60, category:'Хлебобулочные изделия'},
      {id: 4, name: 'Хлеб "Гречишный"', price: 25, category:'Хлебобулочные изделия'},
      {id: 5, name: 'Ржаной с изюмом', price: 65, category:'Булочки'},
      {id: 6, name: 'Хлеб "Солодовый"', price: 55, category:'Хлебобулочные изделия'},
      {id: 7, name: 'Хлеб "Овсяный"', price: 55, category:'Булочки'},
      {id: 8, name: 'Краюшки', price: 55, category:'Булочки'}
    ]
   }

   findAll(): Product[] {
     return this.products;
   }

   find(id: number ) : Product { 
     return this.products[this.getSelectedIndex(id)];
   }

   private getSelectedIndex(id: number) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].id == id) {
            return i;
        }
    }
    return -1;
}
}
