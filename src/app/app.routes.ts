import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { ChildrenComponent } from './components/children/children.component';
import { CartComponent } from './cart/cart.component';
import { AllProductsComponent } from './components/all-products/all-products.component';

export const routes: Routes = [
  {
    path: '',
    component: CartComponent,
  },
  {
    path: 'home',
    component: CartComponent,
  },
  {
    path: 'products',
    component: AllProductsComponent,
  },
  {
    path: 'posts',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
