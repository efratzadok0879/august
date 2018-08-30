import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PackageService {

  NameSubject = new Subject();
  DateRangeSubject = new Subject();
  serviceSubject=new Subject();
  constructor(private httpClient:HttpClient) { }

  getAllPackages(inputPackageVal:string):Observable<any>{
    let url:string=`https://api.npms.io/v2/search/suggestions?q=${inputPackageVal}&size=40`;
    return this.httpClient.get(url);

  }

  getDownloadAmounts(start:string,end:string,packageVal:string):Observable<any>{
    let url:string=`https://api.npmjs.org/downloads/point/${start}:${end}/${packageVal}`;
    return this.httpClient.get(url);
  }

}
