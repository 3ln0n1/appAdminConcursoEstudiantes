import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
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
  idSeminario!:number;
  
  



constructor(private seminarioService:SeminarioService, private activeRouter:ActivatedRoute,private router:Router){}

ngOnInit(): void {
  this.idSeminario=parseInt(""+this.activeRouter.snapshot.paramMap.get('id'));
  console.log("ID"+this.idSeminario)
  this.seminarioService.getFormulariosByIdSeminario(this.idSeminario).subscribe(result=>{
    this.ELEMENT_DATA=result.resultados
    console.log(result.resultados)
  });
  
}

addFormulario():void{
this.router.navigate(['concursoestudiantes/formuariosSeminario/addFormulario']);
}




cambiarpagina(e:PageEvent){
  console.log(e);
  this.desde = e.pageIndex * e.pageSize;
  this.hasta = this.desde + e.pageSize;
  console.log(this.desde);
  console.log(this.hasta);
}
}
