import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  componente1!:string;
  resultado!:any;

  constructor() { }

  ngOnInit(): void {
    this.componente1 = "componente1";
    //guardar datos 
    sessionStorage.setItem('hoja1', this.componente1)
    //recuperar datos 
    this.resultado = sessionStorage.getItem('hoja3')
    console.log(this.resultado);        
  }

}
