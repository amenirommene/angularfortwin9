import { CardComponent } from './../card/card.component';
import { Category } from './../models/category';
import { Component, QueryList, ViewChildren, OnInit, AfterViewInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit, AfterViewInit {
  @ViewChildren(CardComponent) myChildren : QueryList<CardComponent>;
  titre : string ="";
  color : string;
  name : string = "Ceci est un test";
  categories : Category[] = [];
  constructor(private cs:CategoryService){}
  ngOnInit(){
    //appel synchrone
   // this.categories = this.cs.getListCategories();
   this.cs.getListCategoriesFromBackend().subscribe(res=>this.categories=res);
   }
  f(ch : string){
    console.log("test "+ch);
  }
  ngAfterViewInit(){
    this.myChildren.forEach(
      child => console.log(child) )
  }
  getNotif(obj:any){
    alert ("je suis le parent" + " "  + obj.code + " " +obj.msg );
  }

}
