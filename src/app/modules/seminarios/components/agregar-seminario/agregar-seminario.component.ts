import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Seminario } from '../../models/seminarioDTO';
import { SeminarioService } from '../../services/seminario.service';

@Component({
  selector: 'app-agregar-seminario',
  templateUrl: './agregar-seminario.component.html',
  styleUrls: ['./agregar-seminario.component.css']
})
export class AgregarSeminarioComponent implements OnInit {
  datosSeminario!:Seminario;
  dataSeminario!:any;
  titulo!:string;
  idSeminario!:string;

  constructor(private seminario:SeminarioService, private activeRouter:ActivatedRoute){}

  ngOnInit(): void {
    this.idSeminario=""+this.activeRouter.snapshot.paramMap.get('id');
    console.log("esto "+this.idSeminario)
    if (this.idSeminario!="" && this.idSeminario!=undefined && this.idSeminario!="null") {
      this.titulo="Editar Evento";
      this.seminario.getSeminarioByidSeminario(this.idSeminario).subscribe(result=>{
       
        //result.fechaInicio=new Date(result.fechaInicio);
        //console.log(new Date(parseInt(result.fechaInicio.substr(6))));

        this.datosSeminario=result;
        console.log(this.datosSeminario);
      });
    }else{
      this.titulo="Agregar Evento";
    }
    
  }


  editarSeminario(){
    var today = new Date();
    var now = today.toLocaleString().substring(6,12);
    this.dataSeminario={
      id:this.datosSeminario.id,
        descripcion: this.datosSeminario.descripcion,
        cveSeminario: this.datosSeminario.cveSeminario,
        activo:this.datosSeminario.activo,
        fechaCreacion:"2021-05-03 00:00",
        anio:this.datosSeminario.anio,
        folio:this.datosSeminario.folio,
        version:this.datosSeminario.version,
        fechaInicio:this.datosSeminario.fechaInicio,
        fechaFinal:this.datosSeminario.fechaFinal,
        idTipoEvento:{id:this.datosSeminario.idTipoEvento.id,descripcion:this.datosSeminario.idTipoEvento.descripcion},
        acciones:'',
        accion:''
    }
      delete this.dataSeminario.accion
      delete this.dataSeminario.acciones
      
    console.log(this.dataSeminario)
    this.seminario.updateSeminario(parseInt(this.idSeminario),this.dataSeminario).subscribe(result=>{

    });

  }

  

}
