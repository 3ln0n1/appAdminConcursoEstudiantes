import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/modules/auth/services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddConcursoDialogComponent } from 'src/app/modules/concursos/components/add-concurso-dialog/add-concurso-dialog.component';
import { EventoDialogComponent } from '../evento-dialog/evento-dialog.component';
import { Eventos } from '../../models/eventosDTO';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  ELEMENT_DATA!: Eventos[];
  pageSize = 3;
  i:number = 1;
  desde:number =0;
  hasta:number =3;
  length:number=0;
  constructor(private eventosService:EventosService, private loginService:LoginService,public dialog: MatDialog){

  }
  ngOnInit(): void {
    this.loginService.show()
    this.getTipoEvento();
  }

  getTipoEvento(){
    this.eventosService.getTipoEventos().subscribe(result=>{
      this.ELEMENT_DATA=result.resultados
      console.log(this.ELEMENT_DATA);
      this.length=this.ELEMENT_DATA.length
    },error=>{
      this.ELEMENT_DATA=[{id:0,descripcion:"noData",acciones:"noData",accion:"noAction"}];
    });
  }

  cambiarpagina(e:PageEvent){
    console.log(e);
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
    console.log(this.desde);
    console.log(this.hasta);
  }

  agregarTipoEvento(){    
    const dialogRef = this.dialog.open(EventoDialogComponent, {
      width: '60%',
      data:{id:0,descripcion:"",acciones:"",accion:"evento-1"}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getTipoEvento();
      console.log('The dialog was closed');
      
    });
  }
  editarEvento(id:number,descripcion:string):void{
    const dialogRef = this.dialog.open(EventoDialogComponent, {
      width: '60%',
      data:{id:id,descripcion:descripcion,accion:"evento-2"}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getTipoEvento();
      console.log('The dialog was closed');
      
    });
    
  }

  eliminarEvento(id:number):void{
    const dialogRef = this.dialog.open(EventoDialogComponent, {
      width: '60%',
      data:{id:id,accion:"evento-3"}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getTipoEvento();
      console.log('The dialog was closed');
      
    });
  }

}
