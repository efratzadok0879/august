import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../imports';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  addUser(user:User):Observable<any>{
    let url:string="";
    return this.httpClient.post<User>(url,user);
  }
}
