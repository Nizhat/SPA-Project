import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../mock-products';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import { CATEGORII } from '../mock-category';
import { Category } from '../category';
import { CategoriiComponent } from '../categorii/categorii.component';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  categorii = CATEGORII;
  addedCategory: Category = new Category();

  id: string;

  products = PRODUCTS;
  addedProduct = new Product();

  constructor(private router: Router,
              public authService: AuthService) { }

  ngOnInit() {
    this.id = localStorage.getItem('token');
    CategoriiComponent.loadCategorii();
  }
  logout():void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  addProduct(): void {
    PRODUCTS.push(this.addedProduct);
  }

  addCategory(): void {
    CATEGORII.push(this.addedCategory);
  }
}
