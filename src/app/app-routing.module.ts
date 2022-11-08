import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { HomeComponent } from './components/home/home.component';
import { CountryMapComponent } from './components/country-map/country-map.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'countries', component : CountryListComponent},
  {path : 'countries/:flag', component : CountryDetailsComponent},
  {path : 'about', component : AboutComponent},
  {path : 'map', component : CountryMapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
