import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { SeminariosModule } from './seminarios.module';

import * as componentsSeminarios from "./components";

export const ROUTES:Routes=[
    {
        path:'seminarios',
        component:componentsSeminarios.SeminariosComponent,
    }
];

@NgModule({
    imports: [SeminariosModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class SeminariosRoutingModule {}