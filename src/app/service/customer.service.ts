import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  apiurl = 'https://dummyjson.com/users';
  NewUserMessage :string ='';

  constructor(private http: HttpClient) {}
  //Observables provide support for data sharing between publishers and subscribers
  // in an angular application.
  // It is referred to as a better technique for event handling, asynchronous programming, and handling multiple values as compared to techniques like promises.
  LoadCustomer(): Observable<any> {
    let data = this.http.get(this.apiurl);
    return data;
  }

  saveCustomer(customerdata: any) {
    let data = this.http.post(this.apiurl + '/add', customerdata);
    return data;
  }

  LoadCustomerByCode(id:any){
    //https://dummyjson.com/users/12
    return this.http.get(this.apiurl+"/"+id);
  }
  RemoveCustomer(id:any){
    return this.http.delete(this.apiurl+'/'+id);
  }
}
