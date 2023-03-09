import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Login } from '../interfaces/login';
@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private httpS:HttpClient) { }
  getLoginApi(model:Login){
    return this.httpS.post('https://curd-system.onrender.com/auth/login',model)
  }
}
