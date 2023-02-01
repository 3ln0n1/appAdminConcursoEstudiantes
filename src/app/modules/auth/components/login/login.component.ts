import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  message:string="";
  username!: string;
  password!:string
  constructor( private loginService:LoginService,private router:Router){}
  
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
  @Input() error!: string | null;

  @Output() submitEM = new EventEmitter();

  login(username:string,password:string){
    if(username=="IN332677"){
      if (password=="1234") {
        this.loginService.show()
    this.router.navigate(['/concursoestudiantes/reporte-estudiantes'])
      }else{
        this.message="Contraseña incorrecta"
      }
      
    }else{
      this.message="Usuario incorrecto";
    }
    
    /*
    console.log(" iniciar");
    const user = {usuario:"IN332677" , password:"1234"};
    this.loginService.login(user).subscribe(result=>{
      console.log(" iniciar"+result);
      
    });*/
  }
}
