import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  customerId!: any;
  idNumber!: any;
  bill!:any;

  constructor(private route:ActivatedRoute,private http:HttpClient,private router: Router) {
    this.customerId=this.route.snapshot.params['customerId'];
  }

  ngOnInit(): void {
    this.idNumber=this.customerId;
    this.Bills();
  }
  Bills(){
    this.http.get("http://localhost:8888/BILLING-SERVICE/customerBills/"+this.customerId).subscribe({
      next:(data)=>{this.bill=data},
      error:(err)=>{
        console.log(err);
      }
    })
  }

  previous() {
    this.router.navigateByUrl("/customers")
  }

  getBillDetails(b: any) {
    this.router.navigateByUrl("/bills/"+b.id)
  }
}
