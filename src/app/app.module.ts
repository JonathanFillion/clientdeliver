import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMainComponent } from './header/header-main/header-main.component';
import { IndexMainComponent } from './index/index-main/index-main.component';
import { ProductsMainComponent } from './products/products-main/products-main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDisplayerComponent } from './global/product-displayer/product-displayer.component';
import { ProductsNavigationComponent } from './products/products-navigation/products-navigation.component';
import { ProductModalComponent } from './global/product-modal/product-modal.component';
import { ProductDisplayerLineComponent } from './global/product-displayer-line/product-displayer-line.component';
import { SearchMainComponent } from './search/search-main/search-main.component';
import { CartMainComponent } from './cart/cart-main/cart-main.component';
import { CartDisplayerLineComponent } from './cart/cart-displayer-line/cart-displayer-line.component';
import { CartTotalComponent } from './cart/cart-total/cart-total.component';
import { CategorySelectorComponent } from './products/category-selector/category-selector.component';
import { MessagesDisplayerComponent } from './global/message-displayer/messages-displayer.component';
import { ContactMainComponent } from './contact/contact-main/contact-main.component';
import { LoginMainComponent } from './login/login-main/login-main.component';
import { RegisterMainComponent } from './register/register-main/register-main.component';
import { LogoutMainComponent } from './login/logout-main/logout-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMainComponent,
    IndexMainComponent,
    ProductsMainComponent,
    NotFoundComponent,
    ProductDisplayerComponent,
    ProductsNavigationComponent,
    ProductModalComponent,
    ProductDisplayerLineComponent,
    SearchMainComponent,
    CartMainComponent,
    CartDisplayerLineComponent,
    CartTotalComponent,
    CategorySelectorComponent,
    MessagesDisplayerComponent,
    ContactMainComponent,
    LoginMainComponent,
    RegisterMainComponent,
    LogoutMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
