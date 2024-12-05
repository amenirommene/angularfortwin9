import { Product } from './../models/product';
import { Observable } from 'rxjs';
import { Category } from './../models/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl : string = "http://localhost:3000/categories";
  apiUrlProducts : string = "http://localhost:3000/products";
  constructor(private http: HttpClient) { }

  getListCategories() : Category[]{
    return [
      {"id":1,"title":"Grand électroménager", "image":"assets/images/categorie_electromenager.jpg", "description":"desc1", "available":true},
      {"id":2,"title":"Petit électroménager", "image":"assets/images/categorie_petit_electromenager.jpg", "description":"desc2", "available":true},
      {"id":3,"title":"Produits informatiques", "image":"assets/images/categorie_produits_informatiques.jpg", "description":"desc3", "available":true},
      {"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg", "description":"desc4", "available":true},
      {"id":5,"title":"TV, images et son", "image":"assets/images/categorie_tv_image_son.jpg", "description":"desc5", "available":true},
      {"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg", "description":"desc6","available":false},

        ]
  }

  getListCategoriesFromBackend() : Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  addToListCategories(category:Category) : Observable<Category> {
    return this.http.post<Category>(this.apiUrl,category);
  }

  getProductsByIdCategory(id:number) : Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrlProducts + "?categoryId=" + id)

  }

  addProduct(p:Product) : Observable<Product>{
   return this.http.post<Product>(this.apiUrlProducts,p);
  }

}
