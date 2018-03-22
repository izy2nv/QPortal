import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  private result;
  //Products end-points
  private allProdsUrl = 'api/allprods';

  //User end-points
  private signupUrl = 'api/signup';

  constructor(private http: Http) { }

  getAllProducts(): Observable<any> {
    return this.http.get(this.allProdsUrl).map(result => this.result = result.json());
  }

  signUp(user) {
    console.log(user);
    return this.http.post(this.signupUrl, user).map(result => this.result = result.json());
  }
}
