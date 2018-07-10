import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  inputs:["counter"]

})
export class CounterComponent implements OnInit {
  @Input() counter :number
 //counteValue:number =0;
  constructor() { }

  ngOnInit() {
  }

  increment(){
 // ++this.counteValue;
 ++this.counter
  this.emitMessage();
  }

  decrement(){
    //--this.counteValue;
    --this.counter
    this.emitMessage();
    }

    
    @Output() messageEmmiter= new EventEmitter()

    emitMessage(){
      this.messageEmmiter.emit(this.counter)
    }

}
