import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/concursoestudiantes/login',
},
  {
    path: 'concursoestudiantes',
    loadChildren: () =>
        import('./modules/auth/auth-routing.module').then(m => m.AuthRoutingModule),
},

  {
    path: 'concursoestudiantes',
    loadChildren: () =>
        import('./modules/dashboard/navbar-routing.module').then(m => m.NavbarRoutingModule),
},
{
  path: 'concursoestudiantes',
  loadChildren: () =>
      import('./modules/estudiantes/estudiantes-routing.module').then(m => m.EstudiantesRoutingModule),
},
{
  path: 'concursoestudiantes',
  loadChildren: () =>
      import('./modules/participantes/participantes-routing.module').then(m => m.ParticipantesRoutingModule),
},
{
  path: 'concursoestudiantes',
  loadChildren: () =>
      import('./modules/unidades/unidades-routing.module').then(m => m.UnidadesRoutingModule),
},
{
  path: 'concursoestudiantes',
  loadChildren: () =>
      import('./modules/concursos/concursos-routing.module').then(m => m.ConcursosRoutingModule),
},
{
  path: 'concursoestudiantes',
  loadChildren: () =>
      import('./modules/seminarios/seminarios-routing.module').then(m => m.SeminariosRoutingModule),
},
{
  path: 'concursoestudiantes',
  loadChildren: () =>
      import('./modules/eventos/eventos-routing.module').then(m => m.EventosRoutingModule),
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
