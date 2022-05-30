import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asincrono',
  templateUrl: './asincrono.component.html',
  styleUrls: ['./asincrono.component.css']
})
export class AsincronoComponent implements OnInit {

  loading = false;
  alerta = 'fa-spin fa-refresh'
  constructor() { }

  ngOnInit(): void {
  }

  ejecutar():void{
    this.loading = true;

    setTimeout(() =>{
      this.loading = false;
    },3000)
    
  }

}
