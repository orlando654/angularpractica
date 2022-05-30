import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
tienda: string=""

  constructor() { }

  ngOnInit(): void {
  }
  redireccionar(opcion :string){
  this.tienda = opcion
}
}
