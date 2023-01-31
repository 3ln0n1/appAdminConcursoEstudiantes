import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/auth/services/login.service';

@Component({
  selector: 'app-reporte-participantes',
  templateUrl: './reporte-participantes.component.html',
  styleUrls: ['./reporte-participantes.component.css']
})
export class ReporteParticipantesComponent implements OnInit  {
  constructor(private loginService:LoginService){

  }
  ngOnInit(): void {
    this.loginService.show()
  }

  
}
