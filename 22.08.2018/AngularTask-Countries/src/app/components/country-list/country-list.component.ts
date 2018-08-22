import { Component, OnInit } from '@angular/core';
import { CountriesService, Country } from '../../imports';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries: Country[];
  term:string="";
  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.getAllCountries()
      .subscribe(
        (countries: Country[]) => { 
          this.countries = countries;
          console.log(countries);
         },
        err => { alert(err.error.message); }
      );;

  }
  termChanged(value){
    this.term=value;
  }

}
