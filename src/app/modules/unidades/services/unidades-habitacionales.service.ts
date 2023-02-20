import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnidadesHabitacionalesService {

  constructor(private http:HttpClient) { }


  getEstadosMunicipios(): Observable<any> {
    let url = '../../../../../../assets/estadosMunicipios.json';
    return this.http.get(url).pipe(map(json => {
    const result = json;
    return result as any;
    }));
  }

  
}
