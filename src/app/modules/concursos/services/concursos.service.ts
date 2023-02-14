import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ConcursosService {


  constructor(private http: HttpClient) { }

  addConcurso(descripcion:any):Observable<any>{
    let url = environment.apiURL+environment.URL_CONCURSOS;
    return this.http.post<any>(url,descripcion);
  }

  updateConcurso(id:number,descripcion:any):Observable<any> {
    let url = environment.apiURL+environment.URL_CONCURSOS+"/"+id;
     return this.http.put(url, descripcion);
    }

  getConcursos(): Observable<any> {
    let url = environment.apiURL+environment.URL_CONCURSOS;
    return this.http.get(url).pipe(map(json => {
    const result = json;
    return result as any;
    }));
  }

  resetFolio(id:number):Observable<any> {
    let url = environment.apiURL+environment.URL_CONCURSOS+"/"+id+"/resetFolio";
     return this.http.put(url,null);
    }

    activeConcurso(id:number):Observable<any> {
      let url = environment.apiURL+environment.URL_CONCURSOS+"/"+id+"/activate";
       return this.http.put(url,null);
    }

    inactiveConcurso(id:number):Observable<any> {
        let url = environment.apiURL+environment.URL_CONCURSOS+"/"+id+"/deactivate";
         return this.http.put(url,null);
    }

}
