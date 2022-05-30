import { Component, OnInit } from '@angular/core';
import { Ipersona } from 'src/app/interfaces/persona.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }


persona: Ipersona={
  nombre:"",
  direccion:"",
};

  ngOnInit(): void {
  }
  guardar():void{
    console.log("Envio del submit");
    console.log(this.persona.nombre);
    console.log(this.persona.direccion);
    
    
  }

}


