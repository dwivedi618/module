import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './tempData';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor()  { }

  getHeroes() : Hero[]{
    return HEROES;
  }
}
