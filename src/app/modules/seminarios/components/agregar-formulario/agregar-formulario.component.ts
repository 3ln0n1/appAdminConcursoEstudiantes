import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seminario } from '../../models/seminarioDTO';
import { SeminarioService } from '../../services/seminario.service';

@Component({
  selector: 'app-agregar-formulario',
  templateUrl: './agregar-formulario.component.html',
  styleUrls: ['./agregar-formulario.component.css']
})
export class AgregarFormularioComponent implements OnInit {
  datosSeminario!:Seminario;
  titulo!:string;

  constructor(private seminario:SeminarioService, private activeRouter:ActivatedRoute){}

  ngOnInit(): void {
    
    
  }


  

}
