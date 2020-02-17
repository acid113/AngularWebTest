import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroChartComponent } from './hero-chart/hero-chart.component';
import { HeroTimeComponent } from './hero-time/hero-time.component';
import { HeroDriverComponent } from './hero-driver/hero-driver.component';

// check "routerLink" attribute in \angular-tour-of-heroes\src\app\app.component.html to see how the "path" was linked
const routes: Routes = [
  {
    path: 'heroes' // matches a string in the URL (ie. http://localhost:4200/heroes)
    , component: HeroesComponent // component the router sould create/use when navigating to this route
  }
  , { path: 'detail/:id', component: HeroDetailComponent }
  , { path: 'dashboard', component: DashboardComponent }

  , { path: 'herochart', component: HeroChartComponent } // path to ChartJS demo page
  , { path: 'herotime', component: HeroTimeComponent } // path to moment time demo page
  , { path: 'herodriver', component: HeroDriverComponent } // path to Driver.JS demo page

  // defaults to Dashboard page
  , { path: '', redirectTo: '/dashboard', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
