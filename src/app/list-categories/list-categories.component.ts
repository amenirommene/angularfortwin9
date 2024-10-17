import { Category } from './../models/category';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  titre : string ="";
  name : string = "Ceci est un test";
  f(ch : string){
    console.log("test "+ch);
  }

    getDescription(desc:string){
      alert(desc);
    }



  categories : Category[] = [
{"id":1,"title":"Grand électroménager", "image":"assets/images/categorie_electromenager.jpg", "description":"desc1", "available":true},
{"id":2,"title":"Petit électroménager", "image":"assets/images/categorie_petit_electromenager.jpg", "description":"desc2", "available":true},
{"id":3,"title":"Produits informatiques", "image":"assets/images/categorie_produits_informatiques.jpg", "description":"desc3", "available":true},
{"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg", "description":"desc4", "available":true},
{"id":5,"title":"TV, images et son", "image":"assets/images/categorie_tv_image_son.jpg", "description":"desc5", "available":true},
{"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg", "description":"desc6","available":false},

  ]
}