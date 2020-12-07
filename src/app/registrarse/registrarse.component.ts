import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  correo: string = '';
  correo_confirm: string = '';
  contra: string = '';
  nombre:  string = '';
  dia: string = '';
  mes: string = '';
  anio: string = '';
  sexo: string = '';
  
  constructor() { }
  ngOnInit(): void {}  
  registrarUsuario($event){
    
    let usuario = {
      correo: this.correo,
      correo2: this.correo_confirm,
      pass: this.contra,
      nombre: this.nombre,
      fnac:{
        dia:this.dia,
        mes:this.mes,
        anio:this.anio
      },
      sexo: this.sexo
    }
    console.log(usuario)
  }

}
