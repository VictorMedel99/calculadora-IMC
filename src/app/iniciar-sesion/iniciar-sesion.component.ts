import { Component, OnInit } from '@angular/core';
import { UsersService } from '../servicios/users.service';
import { UsersApi } from "../models/usersapi";
import { StorageService } from "../servicios/storage.service";

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  result = '';
  nombreUsuario = '';
  contrasenia = '';

  constructor(
    private usersService: UsersService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
  }

  iniciarSesion() {
    var mydata = new UsersApi;

    if (this.nombreUsuario == "" || this.contrasenia == "") {

      alert('USUARIO Y CONTRASEÑA REQUERIDOS');

    } else {

      mydata.nombreUsuario = this.nombreUsuario;
      mydata.contrasenia = this.contrasenia;

      return this.usersService.loginUser(mydata)
        .subscribe((data: any) => {

          this.storageService.setSession("token", data.accessToken);

          this.result = data.accessToken;
          alert(data.accessToken);
          // this.router.navigate(['/']);

        })

    }

  }
}