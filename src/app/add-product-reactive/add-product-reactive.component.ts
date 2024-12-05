import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product-reactive',
  templateUrl: './add-product-reactive.component.html',
  styleUrls: ['./add-product-reactive.component.css']
})
export class AddProductReactiveComponent implements OnInit {
myForm: FormGroup;
nametest = new FormControl() ;
constructor(private cs:CategoryService){}
ngOnInit(){  //méthode hook : utile pour l'initialisation
 this.myForm=new FormGroup({
  name : new FormControl("",[Validators.required,Validators.minLength(3)]),
  price: new FormControl(),
  description : new FormControl()
 })

}
get name(){
  return this.myForm.get('name')
}

send(){

 if  (this.myForm.valid){
  console.log(this.myForm.value)
  this.cs.addProduct(this.myForm.value).subscribe(
    ()=>{alert ("add with success"); this.myForm.reset() });
 }
}
}
