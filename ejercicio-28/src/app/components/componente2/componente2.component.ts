import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  resultado2!:any;
  componente2! : string;


  constructor() { }


  ngOnInit(): void {
    this.componente2 = "Componente2"
    //GUARDAR DATOS 
    sessionStorage.setItem('hoja2', this.componente2)
    //RECUPERAR DATOS
   this.resultado2 = sessionStorage.getItem('hoja1')
    console.log(this.resultado2);
    
  }

}
