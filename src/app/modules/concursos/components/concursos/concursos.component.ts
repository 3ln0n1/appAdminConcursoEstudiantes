import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from 'src/app/modules/auth/services/login.service';
import { Concursos } from '../../models/concursosDTO';
import { ConcursosService } from '../../services/concursos.service';
import { AddConcursoDialogComponent } from '../add-concurso-dialog/add-concurso-dialog.component';


@Component({
  selector: 'app-concursos',
  templateUrl: './concursos.component.html',
  styleUrls: ['./concursos.component.css']
})
export class ConcursosComponent implements OnInit{
  ELEMENT_DATA!: Concursos[];
  pageSize = 3;
  i:number = 1;
  desde:number =0;
  hasta:number =3;
  length:number=0;

  constructor(private concursosService:ConcursosService,private loginService:LoginService,public dialog: MatDialog){

  }
  ngOnInit(): void {
    this.loginService.show()
    this.getConcursos();
  }
 
  getConcursos(){
    this.concursosService.getConcursos().subscribe(result=>{
      this.ELEMENT_DATA=result.resultados
      console.log(this.ELEMENT_DATA);
      this.length=this.ELEMENT_DATA.length
    },error=>{
      this.ELEMENT_DATA=[{id:0,descripcion:"noData",cveConcurso:"noData",activo:false,fechaCreacion:"noData",anio:0,folio:0,version:0,accion:"noData"}];
      console.log(error)
    });
  }

  addConcurso():void{
    const dialogRef = this.dialog.open(AddConcursoDialogComponent, {
      width: '60%',
      data:{accion:"concurso-1"}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getConcursos();
      console.log('The dialog was closed');
      
    });
  
  }

  editarConcurso(id:number,cveConcurso:string,descripcion:string,anio:number,folio:number):void{
    const dialogRef = this.dialog.open(AddConcursoDialogComponent, {
      width: '60%',
      data:{id:id,cveConcurso:cveConcurso,descripcion:descripcion,anio:anio,folio:folio,accion:"concurso-2"}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getConcursos();
      console.log('The dialog was closed');
      
    });
    
  }

  resetFolio(id:number,cveConcurso:string,descripcion:string,anio:number,folio:number):void{
    const dialogRef = this.dialog.open(AddConcursoDialogComponent, {
      width: '60%',
      data:{id:id,cveConcurso:cveConcurso,descripcion:descripcion,anio:anio,folio:folio,accion:"folio-2"}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getConcursos();
      console.log('The dialog was closed');
      
    });
  }
  activeInactive(id:number,checked:boolean){
   if (!checked) {
    this.concursosService.inactiveConcurso(id).subscribe(result=>{
      this.getConcursos();
    },error=>{
      console.log(error);
    });
   }else{
    this.concursosService.activeConcurso(id).subscribe(result=>{
      this.getConcursos();
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
  
  