import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
// Routing
import { WebsiteRoutingModule } from './website-routing.module';
// Pages
import { HomeComponent } from '././pages/home/home.component';
import { LoginComponent } from '././pages/login/login.component';
import { MycartComponent } from '././pages/mycart/mycart.component';
import { ProductDetailComponent } from '././pages/product-detail/product-detail.component';
import { ProfileComponent } from '././pages/profile/profile.component';
import { RecoveryComponent } from '././pages/recovery/recovery.component';
import { RegisterComponent } from '././pages/register/register.component';
// Components
import { YayoutComponent } from './components/yayout/yayout.component';
import { NavComponent } from './components/nav/nav.component';

// Directives

// Pipes

// Modules
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    MycartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ProductDetailComponent,
    YayoutComponent,

  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SwiperModule,

    SharedModule
  ]
})
export class WebsiteModule { }
