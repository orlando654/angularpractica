import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condicional',
  templateUrl: './condicional.component.html',
  styleUrls: ['./condicional.component.css']
})
export class CondicionalComponent implements OnInit {
  frase = {
    mensaje: "la sabiduria viene de la experiencia ",
    autor: "Orlando Flores "
  };

  constructor() { }

  ngOnInit(): void {
  }
mostrar =true;
}
