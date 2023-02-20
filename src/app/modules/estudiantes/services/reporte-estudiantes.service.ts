import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Estudiante } from '../models/estudiantesDTO';


@Injectable({
  providedIn: 'root'
})
export class ReporteEstudiantesService {


  constructor(private http: HttpClient) { }

  getEstudiantesByIdseminario(idConcurso:string,year:string): Observable<Estudiante> {
    let url = environment.apiURL+environment.URL_ESTUDIANTES+"/"+idConcurso+"/"+year;
    return this.http.get(url).pipe(map(json => {
    const result = json;
    return result as Estudiante;
    }));
  }

  
  exportToExcel(idConcurso:number,year:number){
    let url ="https://10.82.0.211:9443/concursoestudiantes/reporte-estudiantes/export/allConcurso?idConcurso="+idConcurso+"&anio="+year;
    //let url =environment.apiURL+'/reporte-estudiantes/export/allConcurso?idConcurso='+idConcurso+'&anio='+year;
    window.open(url)
  }
}
