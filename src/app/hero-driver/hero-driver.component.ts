import { Component, OnInit } from '@angular/core';
import * as Driver from 'driver.js';

@Component({
  selector: 'app-hero-driver',
  templateUrl: './hero-driver.component.html',
  styleUrls: ['./hero-driver.component.css']
})
export class HeroDriverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ShowPopover() {
    const driver = new Driver();
    driver.highlight({
      element: '#some-element',
      popover: {
        title: 'Yoda',
        description: 'Learn Angular, you must!',
        position: 'top',
      }
    });
  }

}
