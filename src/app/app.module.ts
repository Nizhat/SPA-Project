import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoriiComponent } from './categorii/categorii.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CartComponent } from './cart/cart.component';
import { ProductService } from './product.service';
import { MainMenuComponent } from './main-menu/main-menu.component';

import { OwlModule } from 'ngx-owl-carousel';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'adminPanel', component: AdminPanelComponent, canActivate: [AuthGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    CategoriiComponent,
    CategoryDetailComponent,
    LoginComponent,
    AdminPanelComponent,
    CartComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuard,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
