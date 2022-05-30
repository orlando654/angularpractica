import { Component, OnInit } from '@angular/core';
import { Ipersona } from 'src/app/interfaces/persona.interface';
import { PaisService } from 'src/app/servicios/país.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  persona: Ipersona ={
    nombre:"",
    apellido: "",
    correo:"",
    pais: "",
    genero:"M",
  };

  paises: any[]=[]
  constructor(private paisService: PaisService) {}

  ngOnInit(): void {
    this.paisService.obtenerPaises().subscribe(paises =>{
      console.log(paises);
      this.paises=paises;
      //inserta elementos al inicio del array
      this.paises.unshift({
        nombre: 'seleccione...',
        codigo:''
      });
      
    });
  }

  guardar():void {
    console.log('envio del submit');
    console.log(this.persona.nombre);
    console.log(this.persona.apellido);
    console.log(this.persona.correo);
    console.log(this.persona.pais);
    console.log(this.persona.genero);
    
    
  }


}
