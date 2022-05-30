import { Component, OnInit } from '@angular/core';
import { ICorrreo } from '../interface/interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  email : ICorrreo={
    correo:"",
  } 
  forma!: FormGroup;  


  ngOnInit(): void {
  }

  guardar(): void{
    console.log(this.forma);
  }  
}

