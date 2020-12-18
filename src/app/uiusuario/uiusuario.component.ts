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

  imc=0;
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
  imcApi$: ImcApi[];
  ngOnInit(): void {
    this.mostrar()
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
    mydata.username="victor";
<<<<<<< HEAD
    mydata.id= 5;
    this.mostrar()
=======
    mydata.id=1;

>>>>>>> 17b7868d73f2d80c2cc809bae7452e535c6099db
    return this.imcService.createImc(mydata)
        .subscribe((data: any) => {
          alert(JSON.stringify(data));
        })
  }

<<<<<<< HEAD
    mostrar(){
      return this.imcService.getPesos()
      .subscribe(data => this.imcApi$ = data)
     }
=======
  getHistorial(){
    this.imcService.getImcs()
      .subscribe(
        res => {
          this.historial = res;
          console.log(this.historial);
        },
        err => console.log(err)
      )

  }
>>>>>>> 17b7868d73f2d80c2cc809bae7452e535c6099db

}
