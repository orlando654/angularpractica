import { Component, OnInit } from '@angular/core';
import { ISeleccion, ISeleccion_1, ISeleccion_2, ISeleccion_3, ISeleccion_4 } from 'src/app/interface/persona.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})



export class FormularioComponent implements OnInit {
  
  seleccion: ISeleccion ={
    seleccion1: "No mucho", 
  }

  seleccion1:ISeleccion_1= {
    seleccion_1:"A veces"
  }

  seleccion2:ISeleccion_2= {
    seleccion_2:"Azul"
  }

  seleccion3:ISeleccion_3={
    seleccion_3:"1 kilo de plumas"
  }

  seleccion4:ISeleccion_4={
    seleccion_4:"3 dedos"
  }

  control = false

  constructor() { }

  ngOnInit(): void {
  }

  guardar():void {
    console.log("envio del submit");
    this.control=true
    console.log(this.seleccion.seleccion1);
    console.log(this.seleccion1.seleccion_1);
    console.log(this.seleccion2.seleccion_2);
    console.log(this.seleccion3.seleccion_3);
    console.log(this.seleccion4.seleccion_4);
    
    
    
    
    
    

  }

}
