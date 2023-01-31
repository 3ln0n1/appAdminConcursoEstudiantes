import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { EstudiantesModule } from './estudiantes.module';

import * as componentsEstudent from "./components";

export const ROUTES:Routes=[
    {
        path:'reporte-estudiantes',
        component:componentsEstudent.ReporteEstudiantesComponent,
    }
];

@NgModule({
    imports: [EstudiantesModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class EstudiantesRoutingModule {}