import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randum',
  templateUrl: './randum.component.html',
  styleUrls: ['./randum.component.css']
})
export class RandumComponent implements OnInit {
  click : true ;
  number1:any;
  number2: any;
  correctAnswer:any;
  userAnswer = "enter";
  
  constructor() { }
  
  ngOnInit() {
  }
  randumNumber() {
    this.click = true;
    this.number1 = Math.floor((Math.random() * 100) + 1);
    this.number2 = Math.floor((Math.random() * 100) + 1);
    this.correctAnswer = this.number1 + this.number2;
    
  }
  

}
