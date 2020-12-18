
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { ResponseApi } from '../models/responseapi';
import { UsersApi } from '../models/usersapi';
import { UsersRegisterApi } from "../models/usersregisterapi";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

 apiURL = 'https://jwt-api-imc.herokuapp.com/';


  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  // HttpClient API post() method => Create employee
  loginUser(userApi): Observable<UsersApi> {
    console.log(JSON.stringify(userApi));
    return this.http.post<UsersApi>(this.apiURL + 'api/auth/signin', JSON.stringify(userApi), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.MessageError)
    )
  }

  registerUser(userRegisterApi): Observable<UsersRegisterApi> {
    console.log(JSON.stringify(userRegisterApi));
    return this.http.post<UsersRegisterApi>(this.apiURL + 'api/auth/signup', JSON.stringify(userRegisterApi), this.httpOptions)
    .pipe(
      retry(1),
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
      //errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      alert('Datos INCORRECTOS');
    }
    //window.alert(errorMessage);
    return throwError(errorMessage);
 }
 

}