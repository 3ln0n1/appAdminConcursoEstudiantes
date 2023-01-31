import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/modules/auth/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  logueado=this.loginService.logeado;

  constructor(private loginService:LoginService,private router:Router){

  }

  logout(){
    //this.router.navigate(['/concursoestudiantes/login']);
  }

}
