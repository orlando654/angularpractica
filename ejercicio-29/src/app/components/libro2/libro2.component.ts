import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro2',
  templateUrl: './libro2.component.html',
  styleUrls: ['./libro2.component.css']
})
export class Libro2Component implements OnInit {

  hoja2!:string
  resultado2:any;
  constructor() { }

  ngOnInit(): void {
    this.hoja2='Resultado de hoja 2 por local storage'
    localStorage.setItem('resp2',this.hoja2)
    this.resultado2 = localStorage.getItem('resp1')
  }
}
