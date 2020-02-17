import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-chart',
  templateUrl: './hero-chart.component.html',
  styleUrls: ['./hero-chart.component.css']
})
export class HeroChartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  public barChartLabels = ['Luke', 'Lea', 'Han', 'Chewie', 'Ewoks', 'Dummy'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [80, 70, 40, 50, 10, 0], label: 'Power'}
  ];

  public pieChartLabels = ['Luke', 'Lea', 'Han', 'Chewie', 'Ewoks', 'Dummy'];
  public pieChartData = [80, 70, 40, 50, 10, 5];
  public pieChartType = 'pie';

  constructor() { }

  ngOnInit() {
  }



}
