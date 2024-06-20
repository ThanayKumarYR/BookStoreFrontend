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

  loginApi(data: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/User/login`, data);
  }

  signupApi(data: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/User/register`, data);
  }
}