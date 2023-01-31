import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/auth/services/login.service';

@Component({
  selector: 'app-unidades-habitacionales',
  templateUrl: './unidades-habitacionales.component.html',
  styleUrls: ['./unidades-habitacionales.component.css']
})
export class UnidadesHabitacionalesComponent implements OnInit{
  
  constructor(private loginService:LoginService){

  }
  ngOnInit(): void {
    this.loginService.show()
  }


}
