import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import {
  AppComponent,
  HomeComponent,
  HeaderComponent,
  NavComponent,
  CountryListComponent,
  CountryItemComponent,
  SearchComponent,
  CountriesService,
  FilterPipe,
  HighlightDirective
} from './imports';

export const route: Routes = [
  {
    path: 'appHome', component: HomeComponent
  },
  {
    path: 'appCountryList', component: CountryListComponent
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    CountryListComponent,
    CountryItemComponent,
    SearchComponent,
    FilterPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    HttpClientModule,
    FormsModule
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }


