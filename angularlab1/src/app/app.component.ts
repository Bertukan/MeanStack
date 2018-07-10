import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message=5;
  title = 'app';
  updatedValue:number

  counter : number

  recieveMessage(receivedValue){
   this.updatedValue=receivedValue;
  }
}


