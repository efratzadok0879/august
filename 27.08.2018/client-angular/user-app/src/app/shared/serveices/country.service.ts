import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  basicURL="http://localhost:3500/api";
  constructor(private httpClient: HttpClient) { }

  getAllCountries(): Observable<any> {
    let url: string = this.basicURL+"/getList?fileName=country";
    return this.httpClient.get<string[]>(url);
  }
}
