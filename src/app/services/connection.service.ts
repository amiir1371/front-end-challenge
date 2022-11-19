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

  Get(
    path: string,
  ): Observable<T> {
    return this.http
      .get<T>(path)
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
