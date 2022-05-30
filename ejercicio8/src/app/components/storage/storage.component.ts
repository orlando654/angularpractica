import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {
  valor:number = 0;
  advertencia:boolean=false;

  constructor() { }
  ngOnInit(): void {
  }
  add(){
    if(this.valor===50){
      this.advertencia=true;

    }else{
      this.valor=this.valor  +1;
      this.advertencia=false;
    }
  }

  substract(){
    if(this.valor ===0){
      this.advertencia=true;
    }else{
      this.valor =this.valor -1;
      this.advertencia=false;
    }
  }

  

}
