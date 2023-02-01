import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReporteParticipantesComponent } from './modules/dashboard/components/reporte-participantes/reporte-participantes.component';
import { TiposEventosComponent } from './modules/dashboard/components/tipos-eventos/tipos-eventos.component';
import { NavbarComponent } from './modules/dashboard/components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthinterceptorService } from './modules/auth/services/authinterceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    ReporteParticipantesComponent,
    TiposEventosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthinterceptorService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
