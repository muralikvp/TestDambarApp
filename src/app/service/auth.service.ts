import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

apiurl = "https://dummyjson.com/auth/login";

  constructor(private http:HttpClient) {
  }

  ProceedLogin(UserCred:any){
    return this.http.post(this.apiurl,UserCred);
  }

  isLoggedIn(){
    return localStorage.getItem('token') != null;
  }

  getToken(){
    return localStorage.getItem('token') || '';
  }

  haveAccess(){
    var role = localStorage.getItem('Role') || '';
    if(role == 'Admin'){
      return true;
    }
    else {
      alert('you not having access');
      return false;
    }
  }

}
