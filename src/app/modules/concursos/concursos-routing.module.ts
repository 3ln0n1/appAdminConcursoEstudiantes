import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { ConcursosModule } from './concursos.module';

import * as componentsConcursos from "./components";

export const ROUTES:Routes=[
    {
        path:'concursos',
        component:componentsConcursos.ConcursosComponent
    }
];

@NgModule({
    imports: [ConcursosModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ConcursosRoutingModule {}