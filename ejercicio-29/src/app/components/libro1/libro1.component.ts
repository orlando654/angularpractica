import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro1',
  templateUrl: './libro1.component.html',
  styleUrls: ['./libro1.component.css']
})
export class Libro1Component implements OnInit {

  hoja1!:string;
  resultado1:any;
  
  constructor() { }

  ngOnInit(): void {
    this.hoja1='Resultado de hoja 1 por local storage'

    localStorage.setItem('resp1',this.hoja1)
    this.resultado1 = localStorage.getItem('resp3')  
  }

}
