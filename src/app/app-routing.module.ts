import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./components/products/products.component";
import {CustomersComponent} from "./components/customers/customers.component";
import {AccountDetailsComponent} from "./components/account-details/account-details.component";
import {BillsComponent} from "./components/bills/bills.component";
import {BillDetailsComponent} from "./components/bill-details/bill-details.component";
import {AuthGuard} from "./guards/security.guard";


const routes: Routes = [
  {path: "products", component: ProductsComponent},
  {path: "customers", component:CustomersComponent},
  {path: "customers/:customerId", component:AccountDetailsComponent,
    canActivate:[AuthGuard],data:{roles:['ADMIN']}},
  {path: "customerBills/:customerId", component:BillsComponent,
    canActivate:[AuthGuard],data:{roles:['ADMIN']}},
  {path: "bills/:id", component:BillDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
