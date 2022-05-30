
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class PaisService {

  private url = 'https://restcountries.com/v3.1/lang/spa';

  constructor( private http:HttpClient) { }
  
  obtenerPaises(): Observable<any>{
    return this.http.get<any>(this.url)
            .pipe(
              map(
                resp => { 
                  return resp.map( (pais: any) => ({nombre: pais['name'].common, codigo: pais.cioc}) );
                 }
              )
            );

  
                }
              }

