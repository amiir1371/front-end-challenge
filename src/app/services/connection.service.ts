import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService<T> {

  constructor(public http: HttpClient, public messageService: MessageService) { }

  Post(path: string, body: any): Observable<T> {
    return this.http
      .post<T>(path, body)
      .pipe(catchError(this.handleError.bind(this)));
  }

  Get(
    path: string,
    params?: {
      [param: string]:
      | string
      | number
      | boolean
      | ReadonlyArray<string | number | boolean>;
    }
  ): Observable<T> {
    if (params) {
      var newParam = new HttpParams().appendAll(params);
      return this.http
        .get<T>(path, { params: newParam })
        .pipe(catchError(this.handleError.bind(this)));
    } else {
      return this.http
        .get<T>(path)
        .pipe(catchError(this.handleError.bind(this)));
    }
  }

  Put(path: string, body: any, id?: any): Observable<T> {
    return this.http
      .put<T>(`${path}${!!id ? '/' + id : ''}`, body)
      .pipe(catchError(this.handleError.bind(this)));
  }

  Patch(path: string, body: any, id: number): Observable<T> {
    return this.http
      .patch<T>(path + '/' + id, body)
      .pipe(catchError(this.handleError.bind(this)));
  }

  Delete(path: string, id: number): Observable<T> {
    return this.http
      .delete<T>(path + '/' + id)
      .pipe(catchError(this.handleError.bind(this)));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
      return throwError(errorMessage);
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      this.messageService.add({ severity: 'error', summary: 'Connection Error', detail: errorMessage });
      return throwError(errorMessage);
    }
  }
}
