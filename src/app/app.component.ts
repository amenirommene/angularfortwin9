import { HeaderComponent } from './header/header.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTwin9';

  @ViewChild(HeaderComponent) myChild: HeaderComponent;

  constructor(){
    console.log("je suis le constructor");
  }

  ngOnInit(){
    console.log("je suis ngOnInit");
}
ngAfterViewInit(){
  console.log("je suis ngAfterViewInit");
  console.log(this.myChild.isAdmin);
}



}
