import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from 'src/app/modules/auth/services/login.service';
import { SeminarioDialogComponent } from '../seminario-dialog/seminario-dialog.component';
import { SeminarioService } from '../../services/seminario.service';
import { Seminario } from '../../models/seminarioDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seminarios',
  templateUrl: './seminarios.component.html',
  styleUrls: ['./seminarios.component.css']
})
export class SeminariosComponent implements OnInit {
  ELEMENT_DATA!: Seminario[];
  pageSize = 5;
  i:number = 1;
  desde:number =0;
  hasta:number =5;

  constructor(private router:Router,private seminarioService:SeminarioService,private loginService:LoginService,public dialog: MatDialog){

  }

  ngOnInit(): void {
    this.loginService.show()
    this.getSeminarios();
  }
  
getSeminarios():void{
  this.seminarioService.getSeminarios().subscribe(result=>{
    this.ELEMENT_DATA=result.resultados;
    console.log(this.ELEMENT_DATA);
  },error=>{
    this.ELEMENT_DATA=[{id:0,descripcion: 'noData', cveSeminario:'noData',activo:false,fechaCreacion:"",anio:0,folio:0,version:0,fechaInicio:'noData',fechaFinal:'noData',idTipoEvento:{id:0,descripcion:'noData'},acciones:'noData',accion:"noData"}];
  });
}

  agregarSeminario(){
   this.router.navigate(['concursoestudiantes/seminarios/addSeminario'])
  }

  editarSeminario(id:number,descripcion:string):void{
    this.router.navigate(['concursoestudiantes/seminarios/addSeminario',id])
  }

  agregarFormulario(id:number):void{
    this.router.navigate(['/concursoestudiantes/documentos-formulario-seminario',id])
  }

  activeInactive(idEvento:number,checked:boolean){
      
    let filtro:any=this.ELEMENT_DATA.filter((result: { id: number; })=>result.id==idEvento);

    
    let dataSeminario={
      id:filtro[0].id,
        descripcion: filtro[0].descripcion,
        cveSeminario: filtro[0].cveSeminario,
        activo:filtro[0].activo,
        fechaCreacion:filtro[0].fechaCreacion,
        anio:filtro[0].anio,
        folio:filtro[0].folio,
        version:filtro[0].version,
        fechaInicio:filtro[0].fechaInicio,
        fechaFinal:filtro[0].fechaFinal,
        idTipoEvento:{id:filtro[0].idTipoEvento.id,descripcion:filtro[0].idTipoEvento.descripcion},
    }
    delete filtro[0].links
    delete filtro[0].idTipoEvento.links
    filtro[0].fechaCreacion="2021-05-03 00:00";
    console.log(filtro)
    
   if (!checked) {
      
      this.seminarioService.updateSeminario(idEvento,filtro[0]).subscribe(result=>{
        this.getSeminarios();
      },error=>{
        console.log(error);
      });
     }else{
       this.seminarioService.updateSeminario(idEvento,filtro[0]).subscribe(result=>{
         this.getSeminarios();
      },error=>{
        console.log(error);
      });
     }
   }


  cambiarpagina(e:PageEvent){
    console.log(e);
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
    console.log(this.desde);
    console.log(this.hasta);
  }
}
  
  
