import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { ProductComponent } from './pages/product/product.component';
import { ShopComponent } from './pages/shop/shop.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'menu', component: MenuComponent},
  {path:'product/:Id', component: ProductComponent},
  {path:'shop/:Id', component: ShopComponent},
  // canActivate: [AuthGuardService]
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
