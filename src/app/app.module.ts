import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { IMCUIComponent } from './imcui/imcui.component';
import { NavbarInicialComponent } from '../app/navbar-inicial/navbar-inicial.component';

@NgModule({
  declarations: [
    AppComponent,
    IMCUIComponent,
    NavbarInicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
