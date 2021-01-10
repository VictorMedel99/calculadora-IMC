import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class  StorageService {

    constructor(){}
  
    getApiUrl(){
      return   'https://jwt-api-imc.herokuapp.com/';
      //return   'http://201.147.64.84:8083' 
      
    }

    setSession(key: string, obj: any) {
      sessionStorage.setItem(key, JSON.stringify(obj))
      return "key guardado";
    }
  
    getSession(key: string) {
      const obj = sessionStorage.getItem(key);
      return obj ? JSON.parse(obj) : null;
    }
  
    sessionDeleteAll() {
      sessionStorage.clear();
      return "sesionStorage clear";
    }
  
/*     sessionDeleteByKey(key: string) {
      sessionStorage.removeItem(key);
      return "key eliminado"
    } */
  
/*     setLocal(key: string, obj: any) {
      localStorage.setItem(key, JSON.stringify(obj));
    }
  
    getLocal(key: string) {
      const obj = localStorage.getItem(key);
      return obj ? JSON.parse(obj) : null;
    }
  
    localDeleteAll() {
      localStorage.clear();
    }
  
    localDeleteByKey(key: string) {
      localStorage.removeItem(key);
    } */

    islogged(){
      return !!sessionStorage.getItem("token");
    }

    cerrarSesion(){
    sessionStorage.removeItem("token");
    //this.router.navigate(['/tasks']);
    }
  }