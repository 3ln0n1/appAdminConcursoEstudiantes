import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Formulario, Resultado } from '../../models/seminarioDTO';
import { SeminarioService } from '../../services/seminario.service';

@Component({
  selector: 'app-documentos-formulario-seminario',
  templateUrl: './documentos-formulario-seminario.component.html',
  styleUrls: ['./documentos-formulario-seminario.component.css']
})
export class DocumentosFormularioSeminarioComponent implements OnInit {
  ELEMENT_DATA!: Resultado[];
  pageSize = 1;
  i:number = 1;
  desde:number =0;
  hasta:number =1;
  
  



constructor(private seminarioService:SeminarioService){}

ngOnInit(): void {
  this.seminarioService.getFormulariosByIdSeminario("1").subscribe(result=>{
    this.ELEMENT_DATA=result.resultados
console.log(this.ELEMENT_DATA)
  });
}





cambiarpagina(e:PageEvent){
  console.log(e);
  this.desde = e.pageIndex * e.pageSize;
  this.hasta = this.desde + e.pageSize;
  console.log(this.desde);
  console.log(this.hasta);
}
}
