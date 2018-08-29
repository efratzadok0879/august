import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../imports';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //basicURL="http://localhost:3500/api";
   basicURL="https://glacial-river-87258.herokuapp.com/api";
  constructor(private httpClient: HttpClient) { }
  userList: User[];
  getAllUsers(setUserList: (res) => void): void {
    let url: string = this.basicURL + "/getList?fileName=user";
    this.httpClient.get<any[]>(url)
      .subscribe(res => {
        this.userList = res;
        setUserList(this.userList);
      });

  }

  addUser(user: User): void {
    let url: string = this.basicURL + "/addUser";
    this.httpClient.post<User>(url, user)
      .subscribe(res => {
        console.log("shalom");
        console.log(res);
        this.userList.push(user);
      },
      err=>{
        console.log("error");
        console.log(err);
      })
  }

}
