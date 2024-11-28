import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { HefooterComponent } from './hefooter/hefooter.component';
import { HehomeComponent } from './hehome/hehome.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainsPipe } from './contains.pipe';
import { HighlightDirective } from './highlight.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsQPCategoryComponent } from './products-qpcategory/products-qpcategory.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProductReactiveComponent } from './add-product-reactive/add-product-reactive.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    //liste des composants attachés à ce module
    //des pipes et des directives que nous avons créés
    AppComponent,
    TestComponent,
    HeaderComponent,
    HefooterComponent,
    HehomeComponent,
    ListCategoriesComponent,
    ContainsPipe,
    HighlightDirective,
    NotFoundComponent,
    ProductsCategoryComponent,
    ProductsQPCategoryComponent,
    CategoryDetailsComponent,
    AddProductComponent,
    AddProductReactiveComponent,
    CardComponent
  ],
  imports: [ //la liste des modules à utiliser
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [], //services à utiliser
  bootstrap: [AppComponent] //les composants à appeler dans le fichier index.html
})
export class AppModule { }
