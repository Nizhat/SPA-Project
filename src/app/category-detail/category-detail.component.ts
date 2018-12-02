import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category';
import { CATEGORII } from '../mock-category';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  categorii: Category[] = CATEGORII;
  selectedCategory: Category;
  selectedCategoryOldName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    for(let i = 0; i < this.categorii.length; i++) {
      const category = this.categorii[i];
      if(category.id = id) {
        this.selectedCategory = category;
        this.selectedCategoryOldName = category.name;
      }
    }
  }

  onDelete() {
    const index = CATEGORII.indexOf(this.selectedCategory);
    let categoryName = CATEGORII[index].name;
    if(index > -1) {
      CATEGORII.splice(index, 1);
      for( let i = 0; i < PRODUCTS.length; i++) {
        let product = PRODUCTS[i];
        if(product.category === categoryName) {
          PRODUCTS.splice(i, 1);
          --i;
        }
      }
    }
  }

  onNameChange(name: string ) {
    for(let i = 0; i < PRODUCTS.length; i++) {
      if(PRODUCTS[i].category === this.selectedCategoryOldName) {
        PRODUCTS[i].category = name;
      }
    }
    this.selectedCategoryOldName = name;
  }

}
