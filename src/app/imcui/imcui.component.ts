import { Component, OnInit } from '@angular/core';

import { IMCHombre } from '../IMCHombre/IMCHombre';
import { EstadoHombre } from '../IMCHombre/IMCHombre';
import { pesoMinHombre } from '../IMCHombre/IMCHombre';
import { pesoMaxHombre } from '../IMCHombre/IMCHombre';

import { IMCMujer } from '../IMCMujer/IMCMujer';
import { EstadoMujer } from '../IMCMujer/IMCMujer';
import { pesoMinMujer } from '../IMCMujer/IMCMujer';
import { pesoMaxMujer } from '../IMCMujer/IMCMujer';

@Component({
  selector: 'app-imcui',
  templateUrl: './imcui.component.html',
  styleUrls: ['./imcui.component.css']
})
export class IMCUIComponent implements OnInit {
  result;
  pesomin="";
  pesomax="";
  operadorGenero = "";
  operadorEdad = 0;
  operadorEstatura = 0;
  operadorPeso = 0;

  constructor() { }

  ngOnInit(): void {
  }

  

  calculaIMC() {
    let myresult = 0;
    if (this.operadorGenero == "hombre") {
      myresult = IMCHombre(this.operadorPeso, this.operadorEstatura);
      this.pesomin= pesoMinHombre(this.operadorEdad,this.operadorEstatura);
      this.pesomax= pesoMaxHombre(this.operadorEdad,this.operadorEstatura);
      this.result = `IMC: ${myresult}\nEstado (Adultos): ${EstadoHombre(myresult)}\n\nPeso Mínimo ideal según tu edad e IMC: ${this.pesomin}\nPeso Máximo ideal según tu edad e IMC: ${this.pesomax}`;

    } else {
      myresult = IMCMujer(this.operadorPeso, this.operadorEstatura);
      this.pesomin= pesoMinMujer(this.operadorEdad,this.operadorEstatura);
      this.pesomax= pesoMaxMujer(this.operadorEdad,this.operadorEstatura);
      this.result = `IMC: ${myresult}\nEstado (Adultos): ${EstadoMujer(myresult)}\n\nPeso Mínimo ideal según tu edad e IMC: ${this.pesomin}\nPeso Máximo ideal según tu edad e IMC: ${this.pesomax}`;
    }
  }

}