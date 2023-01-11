import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ShortProvider {

  // api_main = 'http://localhost:3001';
  api_main = 'http://54.199.175.47:3001';
  
  constructor(public http: HttpClient) {
  }

  Create_short_url(body:any) {
    // var token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('X-Access-Token','My Token');
    return new Promise((resolve, reject) =>{
      this.http.post(this.api_main + '/Create_short_url',body,{headers})
      .subscribe(data =>{
        resolve(data)
      }, err => {
        resolve(err)
      })
    })
  }

  Get_urls(body:any) {
    // var token = localStorage.getItem("token_dna");
    const headers = new HttpHeaders().set('X-Access-Token','My Token');
    return new Promise((resolve, reject) =>{
      this.http.post(this.api_main + '/Get_urls',body,{headers})
      .subscribe(data => {
        resolve(data)
      }, err => {
        reject(err)
      });
    })
  }

}
