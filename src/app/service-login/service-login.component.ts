import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../login.service';
import {Hero} from '../hero';


@Component({
  selector: 'app-service-login',
  templateUrl: './service-login.component.html',
  styleUrls: ['./service-login.component.css']
})
export class ServiceLoginComponent implements OnInit {
   heroes : Hero[];

  constructor( private lservice : LoginService ) {
  }
    getHeroes( ) : void {
      this.heroes = this.lservice.getHeroes() ;
    }
    
   

  ngOnInit() {
    this.getHeroes();
  }
  hide = true ;
  onSubmit(form : NgForm){
    for(var hero of this.heroes){
      if(hero.id == form.controls.email.value && hero.password == form.controls.password.value){
        console.log("hello ",hero.name);
        return;
        
      }
    }
    console.log("username or password not matched");
  }
}

