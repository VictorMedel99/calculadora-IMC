import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ImcApi } from '../models/imcapi';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { StorageService } from "../servicios/storage.service";

@Injectable({
  providedIn: 'root'
})

export class ImcService {

 apiURL = 'https://jwt-api-imc.herokuapp.com/';


  constructor(private http: HttpClient,
              private storageService: StorageService) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.storageService.getSession("token")

    })
  }  

  createImc(imcApi): Observable<ImcApi> {
    console.log(JSON.stringify(imcApi));
    console.log(JSON.stringify(this.httpOptions));

    return this.http.post<ImcApi>(this.apiURL + 'pesos', JSON.stringify(imcApi), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.MessageError)
    )
  }

  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

  MessageError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      alert(errorMessage);
    }
    //window.alert(errorMessage);
    return throwError(errorMessage);
 }

}