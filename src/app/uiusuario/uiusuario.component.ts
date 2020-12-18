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

@Component({
  selector: 'app-uiusuario',
  templateUrl: './uiusuario.component.html',
  styleUrls: ['./uiusuario.component.css']
})
export class UIUsuarioComponent implements OnInit {

  result;
  pesomin="";
  pesomax="";
  operadorGenero = "";
  operadorEdad = 0;
  operadorEstatura = 0;
  operadorPeso = 0;
  Estado="";
  historial=[];

  constructor(private imcService: ImcService) { }

  ngOnInit(): void {
  }

  calculaIMC() {
    let myresult = 0;
    if (this.operadorGenero == "hombre") {
      myresult = IMCHombre(this.operadorPeso, this.operadorEstatura);
      this.pesomin= pesoMinHombre(this.operadorEdad,this.operadorEstatura);
      this.pesomax= pesoMaxHombre(this.operadorEdad,this.operadorEstatura);
      this.Estado=EstadoHombre(myresult);
      this.result = `IMC: ${myresult}\nEstado (Adultos): ${this.Estado}\n\nPeso Mínimo ideal según tu edad e IMC: ${this.pesomin}\nPeso Máximo ideal según tu edad e IMC: ${this.pesomax}`;

    } else {
      myresult = IMCMujer(this.operadorPeso, this.operadorEstatura);
      this.pesomin= pesoMinMujer(this.operadorEdad,this.operadorEstatura);
      this.pesomax= pesoMaxMujer(this.operadorEdad,this.operadorEstatura);
      this.Estado=EstadoMujer(myresult)
      this.result = `IMC: ${myresult}\nEstado (Adultos): ${this.Estado}\n\nPeso Mínimo ideal según tu edad e IMC: ${this.pesomin}\nPeso Máximo ideal según tu edad e IMC: ${this.pesomax}`;
    }
  }

  guardarIMC(){
    var mydata = new ImcApi;
    mydata.imc=this.result;
    mydata.estado=this.Estado;
    mydata.peso_min=this.pesomin;
    mydata.peso_max=this.pesomax;
    mydata.username="victor";

    this.imcService.createImc(mydata)
        .subscribe((data: any) => {
        })
        console.log('Datos guardados');
  }

}
