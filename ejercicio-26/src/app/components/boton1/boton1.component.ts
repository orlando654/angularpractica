import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/servicios/services.service';

@Component({
  selector: 'app-boton1',
  templateUrl: './boton1.component.html',
  styleUrls: ['./boton1.component.css']
})
export class Boton1Component implements OnInit {

  nombreSecundario:string = "HOLA BOTON 1!";

  constructor(private botonService:ServicesService) { }

  ngOnInit(): void {
  }

  cambiarBoton():void{
    this.botonService.mensaje = this.nombreSecundario;
    console.log(this.botonService.mensaje);    
  }

}
