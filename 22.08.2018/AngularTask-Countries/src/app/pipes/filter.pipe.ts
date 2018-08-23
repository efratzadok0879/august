import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../imports';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(countries: Country[], term: string): any {
    if (!countries)
      return null;
    if (!term)
      return countries;
    return countries.filter(country => 
      country.name.toLowerCase().includes(term.toLowerCase()) ||
       country.capital.toLowerCase().includes(term.toLowerCase()));
  }

}
