import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  private authHeader = new HttpHeaders({
    Accept: 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}` || '',
  });


  loginApi(data: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/User/login`, data);
  }

  signupApi(data: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/User/register`, data);
  }

  getBooksApi(){
    console.log(localStorage.getItem('token'));
    return this.httpClient.get(`${this.baseUrl}/Book/getAll`, {headers: this.authHeader});
  }

  addToCartApi(data:any){
    return this.httpClient.post(`${this.baseUrl}/Cart`, data, {headers:this.authHeader});
  }

  getCartApi(){
    return this.httpClient.get(`${this.baseUrl}/Cart`, {headers:this.authHeader});
  }

  unCartApi(data: number){
    let params = new HttpParams();
    params = params.append('cartId', data);
    return this.httpClient.delete(`${this.baseUrl}/Cart`,{ headers: this.authHeader,params:params });
  }
}
