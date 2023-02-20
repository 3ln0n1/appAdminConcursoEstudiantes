import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReporteParticipantesComponent } from './modules/dashboard/components/reporte-participantes/reporte-participantes.component';
import { TiposEventosComponent } from './modules/dashboard/components/tipos-eventos/tipos-eventos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthinterceptorService } from './modules/auth/services/authinterceptor.service';

import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AddConcursoDialogComponent } from './modules/concursos/components/add-concurso-dialog/add-concurso-dialog.component';
import { EventoDialogComponent } from './modules/eventos/components/evento-dialog/evento-dialog.component';
import { SeminarioDialogComponent } from './modules/seminarios/components/seminario-dialog/seminario-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinnerModule } from './modules/loader/spinner.module';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    ReporteParticipantesComponent,
    TiposEventosComponent,
    AddConcursoDialogComponent,
    EventoDialogComponent,
    SeminarioDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSelectModule,
    MatToolbarModule,
    FormsModule, ReactiveFormsModule,
    MatIconModule,
    CarouselModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    SpinnerModule,
    MatTooltipModule,
  ],
  entryComponents:[AddConcursoDialogComponent,EventoDialogComponent,SeminarioDialogComponent],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthinterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
