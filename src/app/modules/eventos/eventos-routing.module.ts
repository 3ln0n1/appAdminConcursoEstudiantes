import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { EventosModule } from './eventos.module';

import * as componentsEventos from "./components";

export const ROUTES:Routes=[
    {
        path:'tipoEventos',
        component:componentsEventos.EventosComponent,
    }
];

@NgModule({
    imports: [EventosModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class EventosRoutingModule {}