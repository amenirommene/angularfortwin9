import { Product } from './../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-products-qpcategory',
  templateUrl: './products-qpcategory.component.html',
  styleUrls: ['./products-qpcategory.component.css']
})
export class ProductsQPCategoryComponent {
  id : number;
  list : Product[];
  constructor(private ac:ActivatedRoute, private router:Router, private cs:CategoryService){
    console.log("je suis le constructor");
  }
  goTo(){
    this.router.navigateByUrl("home");
   }
  ngOnInit(){
   // this.id=this.ac.snapshot.queryParams['id'];
    this.ac.queryParamMap.subscribe(res=>{
    this.id=Number(res.get('id'));
    this.cs.getProductsByIdCategory(this.id).subscribe(res=>this.list=res);});
   // this.ac.queryParams.subscribe(res=>this.id=res['id']);
    console.log("je suis le ngOnInit");
  }

}
