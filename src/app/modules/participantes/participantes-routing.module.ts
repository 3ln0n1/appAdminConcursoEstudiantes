import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { ParticipantesModule } from './participantes.module';

import * as componentsParticipants from "./components";

export const ROUTES:Routes=[
    {
        path:'reporte-participantes',
        component:componentsParticipants.ReporteParticipantesComponent,
    }
];

@NgModule({
    imports: [ParticipantesModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ParticipantesRoutingModule {}