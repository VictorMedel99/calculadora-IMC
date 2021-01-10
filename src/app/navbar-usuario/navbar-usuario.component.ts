import { Component, OnInit } from '@angular/core';
import { StorageService } from '../servicios/storage.service';

@Component({
  selector: 'app-navbar-usuario',
  templateUrl: './navbar-usuario.component.html',
  styleUrls: ['./navbar-usuario.component.css']
})
export class NavbarUsuarioComponent implements OnInit {

  constructor() { }
  result="";

  ngOnInit(): void {
  }

  cerrarSesion(){
    let result ="";
    new StorageService().sessionDeleteAll();
    result="Sesión cerrada";
    this.result=result;
    console.log(result);
    }

}
