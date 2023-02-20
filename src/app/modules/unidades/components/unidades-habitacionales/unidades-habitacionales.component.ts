import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/modules/auth/services/login.service';
import { Concursos } from 'src/app/modules/concursos/models/concursosDTO';
import { ConcursosService } from 'src/app/modules/concursos/services/concursos.service';
import { UnidadesHabitacionalesService } from '../../services/unidades-habitacionales.service';

@Component({
  selector: 'app-unidades-habitacionales',
  templateUrl: './unidades-habitacionales.component.html',
  styleUrls: ['./unidades-habitacionales.component.css']
})
export class UnidadesHabitacionalesComponent implements OnInit{
  concursos!:Concursos[];
  ELEMENT_DATA!: any[];
  pageSize = 1;
  i:number = 1;
  desde:number =0;
  hasta:number =1;
  length:number=0;
  constructor(private unidadesHabitacionalesService:UnidadesHabitacionalesService,private concursosService:ConcursosService,private loginService:LoginService,private router:Router){

  }
  ngOnInit(): void {
    this.loginService.show()
    this.getConcursos();
    this.getEstadosMunicipios();
  }
  getConcursos(){
    this.concursosService.getConcursos().subscribe(result=>{
      this.concursos=result.resultados
    },error=>{
      console.log(error)
    });
  }
  getEstadosMunicipios(){
    this.unidadesHabitacionalesService.getEstadosMunicipios().subscribe(result=>{
      console.log(result);
    });
  }

addUnit():void{
  this.router.navigate(['/concursoestudiantes/unidadeshabitacionales/agregarUnidad'])
}


cambiarpagina(e:PageEvent){
  console.log(e);
  this.desde = e.pageIndex * e.pageSize;
  this.hasta = this.desde + e.pageSize;
  console.log(this.desde);
  console.log(this.hasta);
}
}
