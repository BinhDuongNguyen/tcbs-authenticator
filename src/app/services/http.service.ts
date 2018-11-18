import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export abstract class HttpService {
  protected urlApi = environment.urlApi;
  protected headers;

  constructor(protected http: HttpClient) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }

  protected GET(api): Observable<any> {
    return this.http
      .get(this.urlApi + api, { headers: this.headers });

  }

  protected POST(api, data): Observable<any> {
    return this.http
      .post(this.urlApi + api, data, { headers: this.headers });
  }

  protected PUT(api, data): Observable<any> {
    return this.http
      .put(this.urlApi + api, data, { headers: this.headers });
  }

  protected DELETE(api, data): Observable<any> {
    return this.http.request('delete', this.urlApi + api, { body: data, headers: this.headers });
  }

}
