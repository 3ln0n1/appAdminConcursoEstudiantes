import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';


const headers=new HttpHeaders().append('Content-Type', 'application/json')
  .append('Access-Control-Allow-Headers', 'Content-Type')
  .append('Access-Control-Allow-Methods', 'PUT')
  .append('Access-Control-Allow-Origin', '*');
@Injectable({
  providedIn: 'root'
})
export class EventosService {


  constructor(private http: HttpClient) { }

  addTipoEvento(descripcion:any):Observable<any>{
    let url = environment.apiURL+environment.URL_TIPOEVENTO;
    return this.http.post<any>(url,descripcion);
  }

  getTipoEventos(): Observable<any> {
    let url = environment.apiURL+environment.URL_TIPOEVENTO;
    return this.http.get(url).pipe(map(json => {
    const result = json;
    return result as any;
    }));
  }

  updateTipoEvento(id:number,descripcion:any):Observable<any> {
  let url = environment.apiURL+environment.URL_TIPOEVENTO+"/"+id;
   return this.http.put(url, descripcion);
  }

  deleteTipoEvento(id:number):Observable<any> {
    let url = environment.apiURL+environment.URL_TIPOEVENTO+"/"+id;
    return this.http.delete<any>(url);  
  }
}
