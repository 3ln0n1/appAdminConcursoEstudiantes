import { Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Concursos } from '../../models/concursosDTO';
import { ConcursosService } from '../../services/concursos.service';


@Component({
  selector: 'app-add-concurso-dialog',
  templateUrl: './add-concurso-dialog.component.html',
  styleUrls: ['./add-concurso-dialog.component.css']
})
export class AddConcursoDialogComponent implements OnInit{
  titulo!:string;
  constructor(private concursosService:ConcursosService,public dialogRef: MatDialogRef<AddConcursoDialogComponent>, @Inject (MAT_DIALOG_DATA)public data:Concursos){}
  ngOnInit(): void {
    if (this.data.accion=="folio-2") {
      this.titulo="Reiniciar Folio"
    }else if(this.data.accion=="concurso-2"){
      this.titulo="Editar Concurso"
    }
  }


addConcurso(){
  let datos={
    "descripcion": this.data.descripcion,
    "cveConcurso":this.data.cveConcurso,
    "anio":this.data.anio,
    "folio": 0
    
    }
    console.log(datos)
  this.concursosService.addConcurso(datos).subscribe(result=>{
    this.dialogRef.close(0);
  },error=>{
    console.log(error)
  });
}

  guardarConcurso(){
    let datos={
      "descripcion": this.data.descripcion,
      "cveConcurso": this.data.cveConcurso,
      "anio": this.data.anio,
      "folio": this.data.folio
  }
this.concursosService.updateConcurso(this.data.id,datos).subscribe(result=>{
  this.dialogRef.close(0);
},error=>{
  console.log(error)
});
  }

  resetFolio(){
    this.concursosService.resetFolio(this.data.id).subscribe(result=>{
      this.dialogRef.close(0);
    },error=>{
      console.log(error)
    });
  }


  closeDialog(){
    this.dialogRef.close(1);
  }
}
