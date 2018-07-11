import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-string-array',
  templateUrl: './string-array.component.html',
  styleUrls: ['./string-array.component.css']
})
export class StringArrayComponent implements OnInit {

  data;

  constructor() { 
  this.data =["Berry", "aman", "behailu"];
  }
  ngOnInit() {
  }

  insertData(value){
    this.data.push(value)

  }

}
