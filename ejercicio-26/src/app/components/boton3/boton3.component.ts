import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/servicios/services.service';

@Component({
  selector: 'app-boton3',
  templateUrl: './boton3.component.html',
  styleUrls: ['./boton3.component.css']
})
export class Boton3Component implements OnInit {

  nombreSecundario:string = "HOLA BOTON 3!";

  constructor(private botonService:ServicesService) { }

  ngOnInit(): void {

  }

  cambiarBoton():void{
    this.botonService.mensaje = this.nombreSecundario;
    console.log(this.botonService.mensaje);
    
  }

}
