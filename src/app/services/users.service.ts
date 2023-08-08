import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  url="  http://localhost:3000/users"
  getusers(){
    return this.http.get<any>(this.url)
  }

  isuserloggedin(){
    return localStorage.getItem('user')
  }
  urls="http://localhost:3000/clients"

  get_clients(){
    return this.http.get(this.urls);
  }
}
