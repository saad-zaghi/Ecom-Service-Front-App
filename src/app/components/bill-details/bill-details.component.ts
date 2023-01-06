import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {

  billId!: any;
  billdetails!: any

  constructor(private route:ActivatedRoute,private http:HttpClient, private router: Router) {
    this.billId=this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
this.getBillDetails()
  }
  getBillDetails(){
    this.http.get("http://localhost:8888/BILLING-SERVICE/bills/"+this.billId+"/productItems").subscribe({
      next:(data)=>{this.billdetails=data},
      error:(err)=>{
        console.log(err);
      }
    });
  }

  previous() {
    this.router.navigateByUrl("/customers")
  }
}
