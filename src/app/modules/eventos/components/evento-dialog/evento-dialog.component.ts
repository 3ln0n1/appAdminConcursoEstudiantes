import { HttpParams } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Eventos } from '../../models/eventosDTO';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-evento-dialog',
  templateUrl: './evento-dialog.component.html',
  styleUrls: ['./evento-dialog.component.css']
})
export class EventoDialogComponent implements OnInit{
  descripcion!:any;
constructor(private eventosService:EventosService,public dialogRef: MatDialogRef<EventoDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:Eventos,){

}
  ngOnInit(): void {
    console.log(this.data.id)
  }

  closeDialog(): void {
    this.dialogRef.close(1);// 1 => Valor que indica que se cancelo la operacion
    console.log("operacion cancelada");
  }

  AgregarTipoEvento():void{
    let descrip={
      "descripcion":this.descripcion
      }
    this.eventosService.addTipoEvento(descrip).subscribe(result=>{
      console.log("Se guardo correctamente");
      this.dialogRef.close(0);
    },error=>{
      console.log(error);
    });
  }

  guardarEvento():void{
    let datos={
      "descripcion":this.data.descripcion
    };
    this.eventosService.updateTipoEvento(this.data.id, datos).subscribe(result=>{
      console.log("se modifico correctamente")
      this.dialogRef.close(0);
    },error=>{
      console.log(error);
      alert("Error al intentar guardar los cambios");
    });
  }

  eliminarTipoEvento():void{
    this.eventosService.deleteTipoEvento(this.data.id).subscribe(result=>{
      console.log("se elimino correctamente")
      this.dialogRef.close(0);
    },error=>{
      console.log(error);
      alert("Error al intentar eliminar");
    });
  }

}
