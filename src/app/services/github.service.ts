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
    this.httpHeaders.set('Authorization', 'Bearer ee25820b62c1f1827ea6b2462f7915d0e6574097');
  }

  getRepoContents(): Observable<any> {
    console.log(this.httpHeaders);
    return this.http.get('https://api.github.com/repos/nitinkalenk/snippets/contents', {
      headers : this.httpHeaders
    }).pipe(catchError(this.handleError));
  }

  // https://api.github.com/repos/nitinkalenk/snippets/contents/Angular/kudvenkatAngularCrud/angular.json?ref=master
  // tslint:disable-next-line:max-line-length
  // https://github.com/nitinkalenk/snippets/contributors/master/Angular/kudvenkatAngularCrud/src/app/employees/create-employee/create-employee.component.ts
  getFileContent(): Observable<any> {
    console.log(this.httpHeaders);
  // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/repos/nitinkalenk/snippets/contents/Angular/kudvenkatAngularCrud/src/app/app.component.ts?ref=master',
    {
      headers : this.httpHeaders
    }).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
