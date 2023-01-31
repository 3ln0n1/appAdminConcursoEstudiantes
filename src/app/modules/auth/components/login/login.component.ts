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

  login(){
    this.loginService.show()
    this.router.navigate(['/concursoestudiantes/reporte-estudiantes'])
    /*
    console.log(" iniciar");
    const user = {usuario:"IN332677" , password:"1234"};
    this.loginService.login(user).subscribe(result=>{
      console.log(" iniciar"+result);
      
    });*/
  }
}
