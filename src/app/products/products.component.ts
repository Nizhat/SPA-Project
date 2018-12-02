import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../mock-products';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  id: string;

  products = PRODUCTS;
  addedProduct = new Product();

  constructor(private router: Router,
              public authService: AuthService,
              private productService: ProductService) { }

  ngOnInit() {
    this.id = localStorage.getItem('token');
    this.products = this.productService.findAll();
  }

  logout():void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  addProduct(): void {
    PRODUCTS.push(this.addedProduct);
  }
}
