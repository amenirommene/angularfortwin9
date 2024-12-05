import { Product } from './../models/product';
import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private cs:CategoryService){}
  p : Product = new Product();
  add(){

    this.cs.addProduct(this.p).subscribe(
      ()=>{alert ("add with success");this.p=new Product() });
    console.log(this.p);
  }
}
