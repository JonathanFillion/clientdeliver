import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { IndexMainComponent } from './index/index-main/index-main.component';
import { ProductsMainComponent } from './products/products-main/products-main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchMainComponent } from './search/search-main/search-main.component';
import { CartMainComponent } from './cart/cart-main/cart-main.component';
import { ContactMainComponent } from './contact/contact-main/contact-main.component';
import { LoginMainComponent } from './login/login-main/login-main.component';
import { RegisterMainComponent } from './register/register-main/register-main.component';
import { LogoutMainComponent } from './login/logout-main/logout-main.component';
import { AuthGaurdService } from './services/authguard-service/auth-guard.service';


const routes: Routes = [
	{path:'', component:IndexMainComponent},
	{path:'products', component: ProductsMainComponent},
  {path:'cart', component: CartMainComponent },//,canActivate:[AuthGaurdService]},
	{path:'search/:query', component: SearchMainComponent},
  {path:'contact', component: ContactMainComponent},
  {path:'login', component: LoginMainComponent},
  {path:'register', component: RegisterMainComponent},
  {path: 'logout' ,component: LogoutMainComponent},
	{path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

	constructor(private router: Router) {
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
    };
}
}
