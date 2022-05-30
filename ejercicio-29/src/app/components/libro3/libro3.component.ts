import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro3',
  templateUrl: './libro3.component.html',
  styleUrls: ['./libro3.component.css']
})
export class Libro3Component implements OnInit {

  resultado3:any;
  hoja3!:string;
  constructor() { }

  ngOnInit(): void {
    this.hoja3='Resultado de hoja 3 por local storage'
    localStorage.setItem('resp3',this.hoja3)
    this.resultado3= localStorage.getItem('resp2')
  }
}
