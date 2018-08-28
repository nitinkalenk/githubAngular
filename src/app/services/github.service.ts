import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GithubService {

  httpHeaders: HttpHeaders;

  constructor(private http: HttpClient) {
    console.log('gitub service constructor');
    this.httpHeaders = new HttpHeaders();
    this.httpHeaders = this.httpHeaders.set('Authorization', 'Bearer 5c0c7d9f2bb17bc64283ada0dc5879a1e1b1528a');
  }

  getRepoContents(gitHubApiURL: string): Observable<any> {
    console.log(this.httpHeaders);
    return this.http.get(gitHubApiURL, {
      headers : this.httpHeaders
    }).pipe(catchError(this.handleError));
  }

  // https://api.github.com/repos/nitinkalenk/snippets/contents/Angular/kudvenkatAngularCrud/angular.json?ref=master
  // tslint:disable-next-line:max-line-length
  // https://github.com/nitinkalenk/snippets/contributors/master/Angular/kudvenkatAngularCrud/src/app/employees/create-employee/create-employee.component.ts
  getFileContent(gitHubApiURL: string): Observable<any> {
    console.log(this.httpHeaders);
  // tslint:disable-next-line:max-line-length
    return this.http.get(gitHubApiURL,
    {
      headers : this.httpHeaders
    }).pipe(catchError(this.handleError));
  }

  getDirContents(dirSelfURL: string): Observable<any> {
    return this.http.get(dirSelfURL,
      {
        headers : this.httpHeaders
      }).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
