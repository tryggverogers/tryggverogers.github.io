import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class HttpClient {

  constructor(private http: Http) {}

  get(url) {
    let headers = new Headers();
    return this.http.get(url, {
      headers: headers
    });
  }// end function get

  post(url, data) {
    let headers = new Headers();
    return this.http.post(url, data, {
      headers: headers
    });
  }// end function post

}// end class HttpClient