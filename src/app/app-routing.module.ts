import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ProductsComponent } from './products/products.component';
import { CategoriiComponent } from './categorii/categorii.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CartComponent } from './cart/cart.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

const routes: Routes = [
  {path: '', redirectTo: 'main-menu', pathMatch: 'full'},
  {path: 'categorii', component: CategoriiComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'categorii/:id', component: CategoryDetailComponent},
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent},
  {path: 'adminPanel', component: AdminPanelComponent, canActivate: [AuthGuard ]},
  { path: 'cart', component: CartComponent },
  { path: 'main-menu', component: MainMenuComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
