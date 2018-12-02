import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mock-products';
import { CATEGORII } from '../mock-category';
import { Category } from '../category';

@Component({
  selector: 'app-categorii',
  templateUrl: './categorii.component.html',
  styleUrls: ['./categorii.component.css']
})
export class CategoriiComponent implements OnInit {

  categorii = CATEGORII;
  addedCategory: Category = new Category();

  constructor() { }

  ngOnInit() {
    CategoriiComponent.loadCategorii();
  }

  public static loadCategorii() {
    for (let i = 0; i < PRODUCTS.length; i++) {
      let product = PRODUCTS[i];
      let isCategoryExist = false;
      for(let j = 0; j < CATEGORII.length; j++) {
        let category = CATEGORII[j];
        if ( product.category === category.name) {
          isCategoryExist = true;
          if (category.products.indexOf(product) < 0) {
            category.addProduct(product);
          }
        }
      }

      if(!isCategoryExist) {
        let category = new Category();
        category.id = CATEGORII.length + 1;
        category.name = product.category;
        category.addProduct(product);
        CATEGORII.push(category);
      }
    }
  }

  addCategory(): void {
    CATEGORII.push(this.addedCategory);
  }
  

}
