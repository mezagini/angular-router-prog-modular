// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { RegisterComponent } from './pages/register/register.component';

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
