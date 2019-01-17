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
    this.httpHeaders = new HttpHeaders();
  }

  getRepoContents(gitHubApiURL: string): Observable<any> {
    console.log(this.httpHeaders);
    return this.http.get(gitHubApiURL, {
      headers : this.httpHeaders
    }).pipe(catchError(this.handleError));
  }

  getFileContent(gitHubApiURL: string): Observable<any> {
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
