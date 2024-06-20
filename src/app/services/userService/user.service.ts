import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }
  loginCall(data:any){
    return this.httpService.loginApi(data);
  }

  signupCall(data:any){
    return this.httpService.signupApi(data);
  }
}
