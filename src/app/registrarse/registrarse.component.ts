import { Component, OnInit } from '@angular/core';
import { UsersService } from '../servicios/users.service';
import { UsersRegisterApi } from "../models/usersregisterapi";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  nombre = '';
  nombreUsuario = '';
  correo = '';
  role= ['user'];
  contrasenia = '';
  
  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  registrarUsuario() {
    var mydata = new UsersRegisterApi;

    if (this.nombreUsuario == "" || this.contrasenia == "" || this.correo == "" || this.nombre == "") {

      alert('DATOS REQUERIDOS NO SE ACEPTAN CAMPOS VACIOS');

    } else {

      mydata.name = this.nombre;
      mydata.username = this.nombreUsuario;
      mydata.email=this.correo;
      mydata.role=this.role;
      mydata.password = this.contrasenia;

      this.usersService.registerUser(mydata)
        .subscribe((data: any) => {
        })
        alert('usuario registrado');
        this.router.navigate(['/']);
    }

  }
}
