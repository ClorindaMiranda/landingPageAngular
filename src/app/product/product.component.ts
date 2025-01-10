import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';
import { data } from 'jquery';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  productList: IProduct[] =[];

  constructor(private _apiService :ApiService){}

  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data : IProduct[]) =>{
      console.log(data);
      this.productList =data;
    })
  }
}
