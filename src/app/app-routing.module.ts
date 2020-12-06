import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IMCUIComponent } from './imcui/imcui.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"landingPage",
    pathMatch: 'full'
  },
  {
    path: "landingPage",
    component: IMCUIComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
