import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-service-login',
  templateUrl: './service-login.component.html',
  styleUrls: ['./service-login.component.css']
})
export class ServiceLoginComponent implements OnInit {
   
  constructor() { }

  ngOnInit() {
    
  }
  hide = true ;
  onSubmit(form : NgForm){
  console.log(form);
}
}

