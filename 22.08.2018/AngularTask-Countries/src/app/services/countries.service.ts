import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }
  getAllCountries(): Observable<any> {
    let url: string = `https://restcountries.eu/rest/v2/all?fields=name;nativeName;capital;population;flag`;
    return this.http.get(url);

  }
}
