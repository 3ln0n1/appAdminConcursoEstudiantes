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
  pageSize = 1;
  i:number = 1;
  desde:number =0;
  hasta:number =1;

  constructor(private router:Router,private seminarioService:SeminarioService,private loginService:LoginService,public dialog: MatDialog){

  }

  ngOnInit(): void {
    this.loginService.show()
    this.seminarioService.getSeminarios().subscribe(result=>{
      this.ELEMENT_DATA=result.resultados
      console.log(this.ELEMENT_DATA);
    },error=>{
      this.ELEMENT_DATA=[{id:0, cveSeminario:'noData',descripcion: 'noData' ,anio:'noData',folio:'noData',tipoEvento:'noData',fechaInicio:'noData',fechaFinal:'noData',acciones:'noData',activoInactivo:'noData',accion:"noData"}];
    });
  }

  agregarSeminario(){
   this.router.navigate(['concursoestudiantes/seminarios/addSeminario'])
  }

  editarSeminario(id:number,descripcion:string):void{
    this.router.navigate(['concursoestudiantes/seminarios/addSeminario',id])
  }

  agregarFormulario(id:number):void{
    this.router.navigate(['/concursoestudiantes/documentos-formulario-seminario'])
    /*const dialogRef = this.dialog.open(EventoDialogComponent, {
      width: '60%',
      data:{id:id,accion:"evento-3"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });*/
  }

  cambiarpagina(e:PageEvent){
    console.log(e);
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
    console.log(this.desde);
    console.log(this.hasta);
  }
}
  
  
