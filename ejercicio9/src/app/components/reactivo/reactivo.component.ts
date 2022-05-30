import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})


export class ReactivoComponent implements OnInit {
  get nombreNoValido(){
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched;
  }
  get apellidoNoValido(){
    return this.forma.get('apellido')?.invalid && this.forma.get('apellido')?.touched;
  }

  get correoNoValido(){
    return this.forma.get('correo')?.invalid && this.forma.get('correo')?.touched;
  }
  get distritoNoValido(){
    return this.forma.get('direccion.distrito')?.invalid && this.forma.get('direccion.distrito')?.touched;
  }
  get ciudadNoValido(){
    return this.forma.controls['direccion'].get('ciudad')?.invalid && this.forma.controls['direccion'].get('ciudad')?.touched;
  }

  get pasatiempos2() {
    return this.forma.get('pasatiempos') as FormArray;
  }



  forma!: FormGroup;
  constructor( private fb: FormBuilder) {
    this.crearFormulario();
    //this.cargarDataAlFomulario();
    this.cargarDataAlFomulario2();
   }

   




  ngOnInit(): void {
  }


  crearFormulario(): void{
    this.forma =this.fb.group({
    //Valores del array:
      //1er valor: El valor por defecto que tendra
      //2do valor: Son los validadores sincronos
      //3er valor: Son los validadores asincronos
      nombre: ['',[Validators.required,Validators.minLength(4)]],
      apellido: ['', [Validators.required,Validators.minLength(4)]],
      correo: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/)]],
      direccion: this.fb.group({
      distrito: ['', Validators.required],
      ciudad: ['', Validators.required]
      }),
      pasatiempos: this.fb.array([
        [],[]
      ])
    })
}

  cargarDataAlFomulario(): void{
    this.forma.setValue({
      nombre: 'Juan',
      apellido: 'Perez',
      correo: 'juan@gmail.com',
      direccion: {
        distrito: 'Central',
        ciudad: 'Oruro'
      }
    });
  }

  //Modificar formulario
  cargarDataAlFomulario2(): void{
    this.forma.patchValue({
      apellido: 'Perez'
    });
  }



    guardar(): void{
      console.log(this.forma);
      //Reset del formulario
      this.LimpiarFomulario();
    }

    LimpiarFomulario(){
    //this.forma.reset();
    this.forma.reset({
      nombre: 'Pedro'
    });

  }
}
