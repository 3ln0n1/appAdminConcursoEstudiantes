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

  login(user:any):Observable<any>{
    return this.http.post("https://10.85.3.10:9443/AutenticaDev-web/api/autenticaService/login",user);
  }


}
