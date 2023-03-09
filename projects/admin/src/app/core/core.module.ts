import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import{InterceptorsInterceptor} from './interceptors/interceptors.interceptor'


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorsInterceptor,
    multi:true
  }]
})
export class CoreModule { }
