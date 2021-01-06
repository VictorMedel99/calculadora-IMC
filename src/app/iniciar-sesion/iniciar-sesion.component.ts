import { Component, OnInit } from '@angular/core';
import { UsersService } from '../servicios/users.service';
import { UsersApi } from "../models/usersapi";
import { StorageService } from "../servicios/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  result = "";
  nombreUsuario = "";
  contrasenia = "";

  constructor(
    private usersService: UsersService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  iniciarSesion() {
    var mydata = new UsersApi;

    if (this.nombreUsuario == "" || this.contrasenia == "") {
      this.result="USUARIO Y CONTRASEÑA REQUERIDOS";
      alert('USUARIO Y CONTRASEÑA REQUERIDOS');

    } else {

      mydata.username = this.nombreUsuario;
      mydata.password = this.contrasenia;

      return this.usersService.loginUser(mydata)
        .subscribe((data: any) => {

          this.storageService.setSession("token", data.accessToken);

          this.result = data.accessToken;
          this.router.navigate(['usuarios']);

        })

    }

  }
}