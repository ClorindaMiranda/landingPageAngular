import { Component, numberAttribute, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { __param } from 'tslib';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';
import { data } from 'jquery';
import { error } from 'console';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
 product? :IProduct;
 productList: IProduct[] = [];
 loading: boolean=true;
 color: string= '';

  constructor (private _route:ActivatedRoute ,
    private _apiService : ApiService
  ){}
  
 ngOnInit(): void {
      this._route.params.subscribe({
        next :(params: Params ) => {
      this._apiService.getProduct(Number(params ['productId'])).subscribe({
        next: (data: IProduct) => {
          this.color= this.product?.Price as number > 200 ? 'red'  : ''
          this.product = data
          this.loading=false 
        },
        error: (error: any) => {
          console.log(error);
          this.loading=false;
        }
     
      })
    }
  });
 } 

}
