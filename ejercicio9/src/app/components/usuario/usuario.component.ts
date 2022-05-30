import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  
  
  usuario:any;
  constructor(private servicioUsuario: UsuarioService) { }

  
  ngOnInit(): void {
    this.servicioUsuario.obtenerUsuario().subscribe({
      next: user => {
        //console.log(user);
        this.usuario = user["results"][0];
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        console.log('solicitud completa');
      }
    })
  }


}
