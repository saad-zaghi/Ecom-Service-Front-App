import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../models/customer.model";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http:HttpClient,private router:Router) { }

  onGetCustomers(){
   return this.http.get<Array<Customer>>("http://localhost:8888/CUSTOMER-SERVICE/customers");
  }
  onGetAccountDetails(c: any) {
    this.router.navigateByUrl("/customers/"+c.id)
  }
  onGetBills(c: any) {
    this.router.navigateByUrl("/customerBills/"+c.id)
  }
}
