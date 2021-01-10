import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { IMCUIComponent } from './imcui/imcui.component';
import { NavbarInicialComponent } from '../app/navbar-inicial/navbar-inicial.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { UIUsuarioComponent } from './uiusuario/uiusuario.component';
import { NavbarUsuarioComponent } from './navbar-usuario/navbar-usuario.component';
import { HttpClientModule } from '@angular/common/http';
//services
import {ImcService} from '../app/servicios/imc.service';
import {UsersService} from '../app/servicios/users.service';
import { StorageService } from "../app/servicios/storage.service";
import {VerifyNavGuard} from './servicios/verify-nav.guard';


@NgModule({
  declarations: [
    AppComponent,
    IMCUIComponent,
    NavbarInicialComponent,
    RegistrarseComponent,
    IniciarSesionComponent,
    UIUsuarioComponent,
    NavbarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StorageService,UsersService,VerifyNavGuard,ImcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
