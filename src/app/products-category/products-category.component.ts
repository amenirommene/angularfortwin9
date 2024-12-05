import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit {

  id : number;
  listProducts : Product[];
  constructor(private ac:ActivatedRoute, private router:Router, private cs:CategoryService){
    console.log("je suis le constructor");
  }
  list : Product[]=[];
  ngOnInit(){
   // this.id=this.ac.snapshot.params['id'];
   // this.ac.paramMap.subscribe(res=>this.id=Number(res.get('id')));
    this.ac.params.subscribe(
      res=>{
        this.id=res['id'];
      this.cs.getProductsByIdCategory(this.id).subscribe(res=>this.list=res);
       }



      );

    console.log("je suis le ngOnInit");
  }

  ngOnDestroy(){
    console.log("je suis le ngOnDestroy");
  }

  goTo(){
   this.router.navigateByUrl("home");
  }


}
