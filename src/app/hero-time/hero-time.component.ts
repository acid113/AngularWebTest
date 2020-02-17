import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-hero-time',
  templateUrl: './hero-time.component.html',
  styleUrls: ['./hero-time.component.css']
})
export class HeroTimeComponent implements OnInit {

  now = moment().format('MM-DD-YYYY HH:mm');
  birthday = '';

  constructor() { }

  ngOnInit() {
  }

  LukeBirthday() {
    this.birthday = (moment().subtract(1, 'days').format('MM-DD-YYYY HH:mm'));
  }

  LeaBirthday() {
    this.birthday = (moment().subtract(1, 'weeks').format('MM-DD-YYYY HH:mm'));
  }

  HanBirthday() {
    this.birthday = (moment().subtract(1, 'months').format('MM-DD-YYYY HH:mm'));
  }

}
