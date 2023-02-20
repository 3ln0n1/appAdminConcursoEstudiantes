import { Component, OnInit } from '@angular/core';
import { Concursos } from 'src/app/modules/concursos/models/concursosDTO';
import { ConcursosService } from 'src/app/modules/concursos/services/concursos.service';

@Component({
  selector: 'app-agregar-unidad',
  templateUrl: './agregar-unidad.component.html',
  styleUrls: ['./agregar-unidad.component.css']
})
export class AgregarUnidadComponent implements OnInit{
  concursos!:Concursos[];

  constructor(private concursosService:ConcursosService){}
  ngOnInit(): void {
    this.getConcursos();
  }


  getConcursos(){
    this.concursosService.getConcursos().subscribe(result=>{
      this.concursos=result.resultados
      console.log(this.concursos);
    },error=>{
      console.log(error)
    });
  }

}
