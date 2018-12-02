import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../mock-products';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  products: Product[] = PRODUCTS;
  selectedProduct: Product;

  constructor(private route: ActivatedRoute, 
              private location: Location) {
}

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    for(var i = 0; i < this.products.length; i++) {
      var product = this.products[i];
      if(product.id == id) {
        this.selectedProduct = product;
      }
    }
  }

  onDelete() {
    const index = PRODUCTS.indexOf(this.selectedProduct);
    if(index > -1) {
      PRODUCTS.splice(index, 1);
    }
  }
}
