import {Component, OnInit} from '@angular/core';

import {CustomersService} from "../../services/customers.service";
import {Observable} from "rxjs";
import {Customer} from "../../models/customer.model";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers!: any;
  errorMessage!: String;

  constructor(private customerService: CustomersService) {
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customers = this.customerService.onGetCustomers().subscribe({
      next:(data)=>{
        this.customers=data;
      },
      error:(err)=>{
        this.errorMessage=err;
      }
    });;
  }


   getBills(c: any) {
    this.customerService.onGetBills(c);
  }

  getAccountDetails(c: any) {
    this.customerService.onGetAccountDetails(c);
  }


}




