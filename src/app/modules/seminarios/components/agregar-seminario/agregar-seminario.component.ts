import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seminario } from '../../models/seminarioDTO';
import { SeminarioService } from '../../services/seminario.service';

@Component({
  selector: 'app-agregar-seminario',
  templateUrl: './agregar-seminario.component.html',
  styleUrls: ['./agregar-seminario.component.css']
})
export class AgregarSeminarioComponent implements OnInit {
  datosSeminario!:Seminario;
  titulo!:string;

  constructor(private seminario:SeminarioService, private activeRouter:ActivatedRoute){}

  ngOnInit(): void {
    let id=""+this.activeRouter.snapshot.paramMap.get('id');
    console.log("esto "+id)
    if (id!="" && id!=undefined && id!="null") {
      this.titulo="Editar Evento";
      this.seminario.getSeminario(id).subscribe(result=>{
        this.datosSeminario=result;
        console.log(this.datosSeminario);
      });
    }else{
      this.titulo="Agregar Evento";
    }
    
  }


  

}
