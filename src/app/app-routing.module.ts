// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CategoryComponent } from './website/pages/category/category.component';
import { HomeComponent } from './website/./pages/home/home.component';
import { LoginComponent } from './website/./pages/login/login.component';
import { MycartComponent } from './website/./pages/mycart/mycart.component';
import { NotFoundComponent } from './website/./pages/not-found/not-found.component';
import { ProductDetailComponent } from './website/./pages/product-detail/product-detail.component';
import { ProfileComponent } from './website/./pages/profile/profile.component';
import { RecoveryComponent } from './website/./pages/recovery/recovery.component';
import { RegisterComponent } from './website/./pages/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'my-cart', component: MycartComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'recovery', component: RecoveryComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
