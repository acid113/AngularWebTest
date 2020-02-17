import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; /*NgModel lives here*/

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroChartComponent } from './hero-chart/hero-chart.component';
import { HeroTimeComponent } from './hero-time/hero-time.component';
import { HeroDriverComponent } from './hero-driver/hero-driver.component';

/* 3rd Party Libraries */
import { ChartsModule } from 'ng2-charts';

@NgModule({
   declarations: [
      AppComponent,
      HeroesComponent,
      HeroDetailComponent,
      DashboardComponent,
      HeroChartComponent,
      HeroTimeComponent,
      HeroDriverComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ChartsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
