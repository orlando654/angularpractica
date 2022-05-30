import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {
  valor =5;
  valor2 =10;


  constructor() { } //los metodos van debajo del constructor
 
  ngOnInit(): void {
  }
 resultado():number{
   return this.valor+this.valor2;

 }
}
