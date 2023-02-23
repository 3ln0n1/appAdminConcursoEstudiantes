import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Eventos } from 'src/app/modules/eventos/models/eventosDTO';
import { EventosService } from 'src/app/modules/eventos/services/eventos.service';
import { SpinnerService } from 'src/app/modules/loader/services/spinner.service';
import {Seminario } from '../../models/seminarioDTO';
import { SeminarioService } from '../../services/seminario.service';

const datepipe: DatePipe = new DatePipe('en-US');
@Component({
  selector: 'app-agregar-seminario',
  templateUrl: './agregar-seminario.component.html',
  styleUrls: ['./agregar-seminario.component.css']
})

export class AgregarSeminarioComponent implements OnInit {
  datosSeminario:any=[];
  dataSeminario!:any;
  titulo!:string;
  idSeminario!:string;
  seminarios!:Seminario[];
  eventos!:Eventos[];
  tipoEventoSeleccionado!:number;
  datos:any=[];
  descripcionTipoEvento:any;
  constructor(private spinnerService:SpinnerService ,private eventosService:EventosService,private seminarioService:SeminarioService, private activeRouter:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.idSeminario=""+this.activeRouter.snapshot.paramMap.get('id');
    this.getSeminarioByidSeminario();
    this.getTipoEvento();
  }

  getSeminarioByidSeminario():void{
    if (this.idSeminario!="" && this.idSeminario!=undefined && this.idSeminario!="null") {
      this.titulo="Editar Evento";
      this.seminarioService.getSeminarioByidSeminario(this.idSeminario).subscribe(result=>{
        result.fechaInicio=datepipe.transform(result.fechaInicio, 'yyyy-MM-dd');
        result.fechaFinal=datepipe.transform(result.fechaFinal, 'yyyy-MM-dd');
        this.datosSeminario=result;
        this.descripcionTipoEvento=[this.datosSeminario.idTipoEvento]
        this.tipoEventoSeleccionado=this.datosSeminario.idTipoEvento.id
      });
    }else{
      this.titulo="Agregar Evento";
    }
  }


  getTipoEvento(){
    this.eventosService.getTipoEventos().subscribe(result=>{
      console.log('Se obtione lista de tipo eventos');
      this.eventos=result.resultados
    },error=>{  
      console.log(error);

    });
  }

  selection(id:number){
    this.descripcionTipoEvento=this.eventos.filter(result=>result.id==id)
  }

  editarSeminario(){
    if (this.idSeminario!="" && this.idSeminario!=undefined && this.idSeminario!="null") {
      this.dataSeminario={
        id:this.datosSeminario.id,
          descripcion: this.datosSeminario.descripcion,
          cveSeminario: this.datosSeminario.cveSeminario,
          activo:this.datosSeminario.activo,
          fechaCreacion:datepipe.transform(this.datosSeminario.fechaCreacion,'yyy-MM-dd hh:mm:ss')?.substring(0,16),
          anio:this.datosSeminario.anio,
          folio:this.datosSeminario.folio,
          version:this.datosSeminario.version,
          fechaInicio:parseInt(this.datosSeminario.fechaInicio),
          fechaFinal:parseInt(this.datosSeminario.fechaFinal),
          idTipoEvento:{id:this.descripcionTipoEvento[0].id,descripcion:this.descripcionTipoEvento[0].descripcion},
          acciones:'',
          accion:''
      }
        delete this.dataSeminario.id
        delete this.dataSeminario.accion
        delete this.dataSeminario.acciones
        this.seminarioService.updateSeminario(parseInt(this.idSeminario),this.dataSeminario).subscribe(result=>{
          console.log(this.dataSeminario)
          this.router.navigate(['/concursoestudiantes/seminarios'])
      },error=>{
        console.log(error);
        alert('Error al intentar actualizar');
      });
    }else{

      let fechaCreacion=new Date()
      this.dataSeminario={
        id:this.datos.id,
          descripcion: this.datos.descripcion,
          cveSeminario: this.datos.cveSeminario,
          activo:true,
          fechaCreacion:datepipe.transform(fechaCreacion,'yyyy-MM-dd hh:mm'),
          anio:this.datos.anio,
          folio:0,
          version:0,
          fechaInicio:parseInt(this.datos.fechaInicio),
          fechaFinal:parseInt(this.datos.fechaFinal),
          idTipoEvento:{id:this.tipoEventoSeleccionado,descripcion:this.descripcionTipoEvento[0].descripcion},
          acciones:'',
          accion:''
      }
        delete this.dataSeminario.id
        delete this.dataSeminario.accion
        delete this.dataSeminario.acciones
        
      this.seminarioService.addSeminario(this.dataSeminario).subscribe(result=>{
        console.log("se agrego seminario")
      },error=>{
        console.log(error)
      });
      
    }

    

  }

  

}
