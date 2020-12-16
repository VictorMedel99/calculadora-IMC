import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IMCUIComponent } from './imcui/imcui.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import {UIUsuarioComponent} from './uiusuario/uiusuario.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"landingPage",
    pathMatch: 'full'
  },
  {
    path: "landingPage",
    component: IMCUIComponent
  },
  {
    path: "registrate",
    component: RegistrarseComponent
  },
  {
    path: "iniciarsesion",
    component: IniciarSesionComponent
  },
  {
    path: "usuarios",
    component: UIUsuarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
