import { Component, OnInit } from '@angular/core';

import { IMCHombre } from '../IMCHombre/IMCHombre';
import { EstadoHombre } from '../IMCHombre/IMCHombre';
import { pesoMinHombre } from '../IMCHombre/IMCHombre';
import { pesoMaxHombre } from '../IMCHombre/IMCHombre';

import { IMCMujer } from '../IMCMujer/IMCMujer';
import { EstadoMujer } from '../IMCMujer/IMCMujer';
import { pesoMinMujer } from '../IMCMujer/IMCMujer';
import { pesoMaxMujer } from '../IMCMujer/IMCMujer';

import { ImcApi } from "../models/imcapi";
import {ImcService} from '../servicios/imc.service';
import { StorageService } from '../servicios/storage.service';

@Component({
  selector: 'app-uiusuario',
  templateUrl: './uiusuario.component.html',
  styleUrls: ['./uiusuario.component.css']
})

export class UIUsuarioComponent implements OnInit {

  imc=0;
  result="";
  pesomin="";
  pesomax="";
  operadorGenero = "";
  operadorEdad = 0;
  operadorEstatura = 0;
  operadorPeso = 0;
  Estado="";
  alert="";
/*   historial=[];
 */
  constructor(private imcService: ImcService,private storageService: StorageService) { }
  imcApi$ = new Array<ImcApi>();
  imcF$= new Array<ImcApi>();
  
  ngOnInit(): void {
    this.mostrar()
    this.mostrar2()
  }

  calculaIMC() {
    if (this.operadorGenero == "hombre") {
      this.imc = IMCHombre(this.operadorPeso, this.operadorEstatura);
      this.pesomin= pesoMinHombre(this.operadorEdad,this.operadorEstatura);
      this.pesomax= pesoMaxHombre(this.operadorEdad,this.operadorEstatura);
      this.Estado=EstadoHombre(this.imc);
      this.result = `IMC: ${this.imc}\nEstado (Adultos): ${this.Estado}\n\nPeso Mínimo ideal según tu edad e IMC: ${this.pesomin}\nPeso Máximo ideal según tu edad e IMC: ${this.pesomax}`;

    } else {
      this.imc = IMCMujer(this.operadorPeso, this.operadorEstatura);
      this.pesomin= pesoMinMujer(this.operadorEdad,this.operadorEstatura);
      this.pesomax= pesoMaxMujer(this.operadorEdad,this.operadorEstatura);
      this.Estado=EstadoMujer(this.imc)
      this.result = `IMC: ${this.imc}\nEstado (Adultos): ${this.Estado}\n\nPeso Mínimo ideal según tu edad e IMC: ${this.pesomin}\nPeso Máximo ideal según tu edad e IMC: ${this.pesomax}`;
    }
  }

  guardarIMC(){
    var mydata = new ImcApi;
    mydata.imc=String(this.imc);
    mydata.estado=this.Estado;
    mydata.peso_min=this.pesomin;
    mydata.peso_max=this.pesomax;
    mydata.username=this.storageService.getSession("username");
    return this.imcService.createImc(mydata)
        .subscribe((data: any) => {
          this.alert="imcsave";
          this.mostrar();
          this.mostrar2();
        })
  }

    mostrar(){
      return this.imcService.getPesos()
      .subscribe(
        data => this.imcApi$ = data
        )
     }

     mostrar2(){
      for (var i=0 ; i < this.imcApi$.length; i++) {
        if (this.imcApi$[i].username == this.storageService.getSession("username")) {
          this.imcF$.push(this.imcApi$[i]);
        }
     }
     }
}
