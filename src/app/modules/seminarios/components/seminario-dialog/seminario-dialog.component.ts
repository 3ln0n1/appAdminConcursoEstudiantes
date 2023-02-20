import { HttpParams } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Seminario } from '../../models/seminarioDTO';

@Component({
  selector: 'app-seminario-dialog',
  templateUrl: './seminario-dialog.component.html',
  styleUrls: ['./seminario-dialog.component.css']
})
export class SeminarioDialogComponent implements OnInit{
  descripcion!:any;
constructor(//private eventosService:EventosService,
  public dialogRef: MatDialogRef<SeminarioDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:Seminario,){

}
  ngOnInit(): void {
    console.log(this.data.id)
  }


  cancel(): void {
    console.log("operacion cancelada");
    this.dialogRef.close(1);// 1 => Valor que indica que se cancelo la operacion
  }

  agregarSeminario():void{
   /* let descrip={
      "descripcion":this.descripcion
      }
    console.log(descrip);
    this.eventosService.addTipoEvento(descrip).subscribe(result=>{
        console.log(result);
    });*/
  }

  guardarSeminario():void{/*
    
    let datos={
      "descripcion":this.data.descripcion
    }
    console.log(datos);
    
    this.eventosService.updateTipoEvento(this.data.id,datos).subscribe(result=>{
console.log(result);
    });*/
  }

  eliminarSeminario():void{
    /*
    this.eventosService.deleteTipoEvento(this.data.id).subscribe(result=>{
      console.log(result);
    });*/
  }

}
