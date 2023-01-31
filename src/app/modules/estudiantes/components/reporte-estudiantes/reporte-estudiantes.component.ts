import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/auth/services/login.service';

@Component({
  selector: 'app-reporte-estudiantes',
  templateUrl: './reporte-estudiantes.component.html',
  styleUrls: ['./reporte-estudiantes.component.css']
})
export class ReporteEstudiantesComponent implements OnInit {

  constructor(private loginService:LoginService){

  }
  ngOnInit(): void {
    this.loginService.show()
  }


}
