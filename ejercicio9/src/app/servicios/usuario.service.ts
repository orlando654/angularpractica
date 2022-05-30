import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
url = 'https://randomuser.me/api/'

  constructor(public http: HttpClient) { }
  obtenerUsuario(): Observable<any>{
    return this.http.get<any>(this.url);
  }

}
