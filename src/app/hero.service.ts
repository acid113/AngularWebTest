import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HEROES } from './mock-heroes';
// import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // tslint:disable-next-line: no-trailing-whitespace
  
  GetHeroList(): Hero[] {
    return HEROES;
  }

  GetHero(id: number): Hero {
    // console.log('GetHero() called from service');
    const selectedHero = HEROES.find(x => x.id === id);
    // console.log(selectedHero);
    // tslint:disable-next-line: no-trailing-whitespace
    
    return selectedHero;
  }

constructor() { }

}
