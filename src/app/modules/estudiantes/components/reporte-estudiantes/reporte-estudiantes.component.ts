import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/auth/services/login.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ConcursosService } from 'src/app/modules/concursos/services/concursos.service';
import { Concursos } from 'src/app/modules/concursos/models/concursosDTO';
import { ReporteEstudiantesService } from '../../services/reporte-estudiantes.service';
import { Resultado } from '../../models/estudiantesDTO';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-reporte-estudiantes',
  templateUrl: './reporte-estudiantes.component.html',
  styleUrls: ['./reporte-estudiantes.component.css']
})
export class ReporteEstudiantesComponent implements OnInit {
  concursos!:Concursos[];
  estudiantes!:Resultado[];
  years:any[]=[];
  selectedContest:string=""
  selectedYear:string="";
  txtBuscar:string="";
 

  constructor(private reporteEstudiantesService:ReporteEstudiantesService,private concursosService:ConcursosService ,private loginService:LoginService){

  }
  ngOnInit(): void {
    this.loginService.show()
    this.getConcursos();
    this.getYears();
  }

  getConcursos(){
    this.concursosService.getConcursos().subscribe(result=>{
      this.concursos=result.resultados;

    },error=>{
      console.log(error);
    });
  }

  getYears(){
    for (let index = 2020; index <= 2050; index++) {
      this.years.push({year:index})
    }
  }

  exportToExcel(): void {
    let name = 'Reporte Concursos Estudiantes.xlsx';
    let element = document.getElementById('reporteConcursos');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, name);
  }

  showOptions(){

  }
  selectionYear(){
    if (this.selectedContest!="") {
      this.reporteEstudiantesService.getEstudiantesByIdseminario(this.selectedContest,this.selectedYear).subscribe(result=>{
        this.estudiantes=result.resultados
        console.log(this.estudiantes)
      });
    }
    
  }

  selectionConcurso(){
    if (this.selectedYear!="") {
      this.reporteEstudiantesService.getEstudiantesByIdseminario(this.selectedContest,this.selectedYear).subscribe(result=>{
        this.estudiantes=result.resultados
        console.log(this.estudiantes)
      });
    }
    }

    buscar(){
      if (this.estudiantes!=undefined) {
        this.estudiantes=this.estudiantes.filter(resultado=>resultado.folio==this.txtBuscar || resultado.curp==this.txtBuscar);
        console.log(this.estudiantes)
      }
    }
    

}
