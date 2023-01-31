import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/auth/services/login.service';

@Component({
  selector: 'app-tipos-eventos',
  templateUrl: './tipos-eventos.component.html',
  styleUrls: ['./tipos-eventos.component.css']
})
export class TiposEventosComponent implements OnInit{

  constructor(private loginService:LoginService){

  }
  ngOnInit(): void {
    this.loginService.show()
  }

}
