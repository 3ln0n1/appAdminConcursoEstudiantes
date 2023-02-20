import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Participante } from '../modules/reporteParticipantesDTO';
import { ParticipantesModule } from '../participantes.module';



@Injectable({
  providedIn: 'root'
})
export class ReporteParticipantesService {


  constructor(private http: HttpClient) { }


  getParticipantesByidSeminario(idSeminario:number): Observable<Participante> {
    let url = environment.apiURL+environment.URL_PARTICIPANTES_SEMINARIOS+"/"+idSeminario;
    return this.http.get(url).pipe(map(json => {
    const result = json;
    return result as Participante;
    }));
  }

}
