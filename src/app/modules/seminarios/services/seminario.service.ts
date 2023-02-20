import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Formulario } from '../models/seminarioDTO';

@Injectable({
  providedIn: 'root'
})
export class SeminarioService {

  constructor(private http:HttpClient) { }


  getSeminarios(): Observable<any> {
    let url = environment.apiURL+environment.URL_SEMINARIO;
    return this.http.get(url).pipe(map(json => {
    const result = json;
    return result as any;
    }));
  }

  getSeminario(id:string): Observable<any> {
    let url = environment.apiURL+environment.URL_SEMINARIO+"/"+id;
    return this.http.get(url).pipe(map(json => {
    const result = json;
    return result as any;
    }));
  }

  getFormulariosByIdSeminario(id:string): Observable<Formulario> {
    let url = environment.apiURL+environment.URL_FORMULARIOS_BY_IDSEMINARIO//environment.URL_SEMINARIO+"/"+id;
    return this.http.get(url).pipe(map(json => {
    const result = json;
    return result as Formulario;
    }));
  }
}
