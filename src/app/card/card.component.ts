import { Category } from './../models/category';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() data : Category;
  @Input() color : string;
  @Output() notified = new EventEmitter<any>();
  sendNotif(){
   this.notified.emit({'code':200,'msg':'success'});
  }
  getDescription(desc:string){
    alert(desc);
  }
  ngOnChanges(changes){
    console.log("je suis ngOnChanges");
    console.log(changes);
  }
}
