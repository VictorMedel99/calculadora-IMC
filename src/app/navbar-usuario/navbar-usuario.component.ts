import { Component, OnInit } from '@angular/core';
import { StorageService } from '../servicios/storage.service';

@Component({
  selector: 'app-navbar-usuario',
  templateUrl: './navbar-usuario.component.html',
  styleUrls: ['./navbar-usuario.component.css']
})
export class NavbarUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    new StorageService().sessionDeleteAll();
    console.log("Sesión cerrada");
    }

}
