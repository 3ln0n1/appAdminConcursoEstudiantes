import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from 'src/app/modules/auth/services/login.service';
import { SeminarioDialogComponent } from '../seminario-dialog/seminario-dialog.component';
import { SeminarioService } from '../../services/seminario.service';
import { Seminario, Seminario2 } from '../../models/seminarioDTO';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-seminarios',
  templateUrl: './seminarios.component.html',
  styleUrls: ['./seminarios.component.css']
})
export class SeminariosComponent implements OnInit {
  ELEMENT_DATA!: Seminario[];
  seminarios!: Seminario2[];
  pageSize = 5;
  i:number = 1;
  desde:number =0;
  hasta:number =5;
  totalSeminarios:number=0;

  constructor(private router:Router,private seminarioService:SeminarioService,private loginService:LoginService,public dialog: MatDialog){

  }

  ngOnInit(): void {
    this.loginService.show()
    this.getSeminarios();
  }
  
getSeminarios():void{
  
  this.seminarioService.getSeminarios().subscribe(result=>{
    this.seminarios=result.resultados
    this.ELEMENT_DATA=result.resultados;
    this.totalSeminarios=this.ELEMENT_DATA.length
    console.log(this.ELEMENT_DATA);
  },error=>{
    this.ELEMENT_DATA=[{id:0,descripcion: 'noData', cveSeminario:'noData',activo:false,fechaCreacion:"",anio:0,folio:0,version:0,fechaInicio:'noData',fechaFinal:'noData',idTipoEvento:{id:0,descripcion:'noData'},acciones:'noData',accion:"noData"}];
  });
}

  agregarSeminario(){
   this.router.navigate(['concursoestudiantes/seminarios/addSeminario'])
  }

  editarSeminario(id:number,descripcion:string):void{
    this.router.navigate(['concursoestudiantes/seminarios/addSeminario',id])
  }

  agregarFormulario(id:number):void{
    this.router.navigate(['/concursoestudiantes/documentos-formulario-seminario',id])
  }

  activeInactive(idEvento:number,checked:boolean){
    const datepipe: DatePipe = new DatePipe('en-US')
    let filtro:any=this.seminarios.filter((result: { id: number; })=>result.id==idEvento);
    delete filtro[0].links
    delete filtro[0].idTipoEvento.links
    let fecha=new Date(filtro[0].fechaCreacion).toISOString().substr(0, 19);
    console.log(fecha)
    filtro[0].fechaCreacion=datepipe.transform(filtro[0].fechaCreacion, 'yyyy-MM-dd hh:mm:ss')?.substring(0,16);
    console.log(filtro[0].fechaCreacion)
   if (!checked) {
      this.seminarioService.updateSeminario(idEvento,filtro[0]).subscribe(result=>{
        this.getSeminarios();
      },error=>{
        console.log(error);
      });
     }else{
       this.seminarioService.updateSeminario(idEvento,filtro[0]).subscribe(result=>{
         this.getSeminarios();
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
  
  
