import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/servicios/services.service';

@Component({
  selector: 'app-boton2',
  templateUrl: './boton2.component.html',
  styleUrls: ['./boton2.component.css']
})
export class Boton2Component implements OnInit {

  nombreSecundario:string = "HOLA BOTON 2!";

  constructor(private botonService:ServicesService) { }

  ngOnInit(): void {

  }

  cambiarBoton():void{
    this.botonService.mensaje = this.nombreSecundario;
    console.log(this.botonService.mensaje);
    
  }

}
