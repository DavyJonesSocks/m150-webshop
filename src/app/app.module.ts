import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ContentComponent } from './content/content.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartListComponent } from './cart-list/cart-list.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ContentComponent,
    NavigationComponent,
    SidebarComponent,
    HeaderComponent,
    ProductItemComponent,
    ProductListComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
