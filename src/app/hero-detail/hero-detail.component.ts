import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from './../heroes/hero';
import { HeroService } from './../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // @Input() selectedHeroDetail: Hero;  // property of type Hero with value coming from parent component
  selectedHeroDetail: Hero;

  constructor(
    private route: ActivatedRoute
    , private heroService: HeroService
    , private location: Location
    ) { }

  ngOnInit() {
    this.GetHero();
  }

  GetHero(): void {
    // "+" operator converts string to number
    const id = +this.route.snapshot.paramMap.get('id'); // TODO: how to cast as Number?
    // console.log('From hero detail component, ID: ' + id);

    this.selectedHeroDetail = this.heroService.GetHero(id);
  }

  GoBack(): void {
    this.location.back();
  }

}
