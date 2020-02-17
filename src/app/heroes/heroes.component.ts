import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';

// import { HEROES } from '../mock-heroes';
//import { HeroService } from './../hero.service';

/* Class name: Hero
 * Location and Filename: ./hero
 */

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  // hero: Hero = {
  //   id: 100
  //   , name: 'Lord Darth Vader'
  // };

  // Properties with type declarations
  // heroes = HEROES;  //previous
  heroes: Hero[];
  // selectedHero: Hero;

  /* Functions to be called from HTML */

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero; // detail to be given to child component
  // }

  constructor(private heroService: HeroService) { }
    

  ngOnInit() {
    // call the function to immediately display the list
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.GetHeroList();
  }

}
