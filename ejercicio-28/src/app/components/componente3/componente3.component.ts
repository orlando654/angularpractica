import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  resultado3:any;
  componente3!:string;

  constructor() { }

  ngOnInit(): void {
    this.componente3="componente3"
    //guarda
    sessionStorage.setItem("hoja3",this.componente3)
    //recupera
    this.resultado3 = sessionStorage.getItem('hoja2')
    console.log(this.resultado3);
    
  }

}
