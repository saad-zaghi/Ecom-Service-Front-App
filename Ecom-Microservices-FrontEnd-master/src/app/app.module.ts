import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { CustomersComponent } from './components/customers/customers.component';
import {HttpClientModule} from "@angular/common/http";
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { BillsComponent } from './components/bills/bills.component';
import { BillDetailsComponent } from './components/bill-details/bill-details.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {NavbarComponent} from "./components/navbar/navbar.component";

export function kcFactory(kcService:KeycloakService){
  return()=>{
    kcService.init({
      config:{
        realm:"Ecom-realm",
        clientId:"EcommerceApp",
        url:"http://localhost:8080"
      },
      initOptions:{
        onLoad: "check-sso",
        checkLoginIframe:true
      }
    })
  }
}
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersComponent,
    AccountDetailsComponent,
    BillsComponent,
    BillDetailsComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      deps:[KeycloakService],
      useFactory:kcFactory,
      multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
