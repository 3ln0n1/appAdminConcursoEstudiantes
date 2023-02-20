import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/auth/services/login.service';
import { Seminario } from 'src/app/modules/seminarios/models/seminarioDTO';
import { SeminarioService } from 'src/app/modules/seminarios/services/seminario.service';
import { Participante, Resultado } from '../../modules/reporteParticipantesDTO';
import { ReporteParticipantesService } from '../../services/reporte-participantes.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-reporte-participantes',
  templateUrl: './reporte-participantes.component.html',
  styleUrls: ['./reporte-participantes.component.css']
})
export class ReporteParticipantesComponent implements OnInit{
  seminarios!:Seminario[];
  participantesSeminario!:Resultado[];
  concursos:string[]=["opcion 1","opcion 1"];
  encuestaSeleccionada:string=""
  txtBuscar:string="";
  constructor(private resporteParticipantesService:ReporteParticipantesService,private seminarioService:SeminarioService,private loginService:LoginService){
    

  }
  ngOnInit(): void {
    this.loginService.show()
    this.getSeminarios();
  }

  getSeminarios(){
    this.seminarioService.getSeminarios().subscribe(result=>{
      this.seminarios=result.resultados
      
    },error=>{  
      console.log(error);
    });
    
  }

  selection(id:string){
    this.participantesSeminario=[];
    this.resporteParticipantesService.getParticipantesByidSeminario(parseInt(id)).subscribe(result=>{
     
      this.participantesSeminario=result.resultados
      
      console.log(this.participantesSeminario);

    });
  }

  
  exportToExcel(): void {
    let name = 'Reporte Seminario Participantes.xlsx';
    let element = document.getElementById('reporteSeminario');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, name);
  }

  buscar(){
    if (this.participantesSeminario!=undefined) {
      this.participantesSeminario=this.participantesSeminario.filter(resultado=>resultado.folio==this.txtBuscar);
      console.log(this.participantesSeminario)
    }
  }
}
