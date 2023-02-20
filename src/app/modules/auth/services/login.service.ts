import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  logeado=new Subject<boolean>();

  constructor(private http:HttpClient) { }
  show():void{
    this.logeado.next(true);
  }
  hide():void{
    this.logeado.next(false);
  }

  login(usuario:string,password:string):Observable<any>{
    return this.http.post("https://10.85.6.28:9443/AutenticaQa-web/api/autenticaService/login?usuario="+usuario+"&password="+password,null);
  }


}
