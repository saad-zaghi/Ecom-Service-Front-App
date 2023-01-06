import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../models/product.model";
import {ProductsService} from "../../services/products.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products!: any
  errorMessage!: String;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.listProducts();

  }
  listProducts(){
    this.productService.getProducts().subscribe({
      next: (data)=> {
        this.products=data;
      },
      error:(err)=>
      {
        console.log(err);
      }
    });
    console.log(this.products)
  }

}
