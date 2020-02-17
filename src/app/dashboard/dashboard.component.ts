import { Component, OnInit } from '@angular/core';
import { Hero } from './../heroes/hero';
import { HeroService } from './../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Properties
  heroList: Hero[] = [];  // set to empty array list

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.GetHeroList();
  }

  // Functions
  GetHeroList(): void {
    // get top 3 in the list
    this.heroList = this.heroService.GetHeroList().slice(0, 3);
  }
}
