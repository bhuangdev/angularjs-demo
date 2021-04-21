import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public hxApi = 'https://localhost:44307/';
  constructor(public http: HttpClient) { }
  get(api: any, obj: any): any { 
    return new Promise((resolve, reject) => {  //使用Promise进行二次封装
      this.http.get(this.hxApi + api, obj).subscribe({
        next(res): any {
          resolve(res);
        },
        error(err): any {
          reject(err);
        }
      });
    });
  }

  post(api: any, obj: any): any {
    const htttpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };  //post请求需要设置此参数
    const body = JSON.stringify(obj);
    return new Promise((resolve, reject) => {
      this.http.post(this.hxApi + api, body, htttpOptions).subscribe({
        next(res): any {
          resolve(res);
        },
        error(err): any {
          reject(err);
        }
      });
    });
  }
}