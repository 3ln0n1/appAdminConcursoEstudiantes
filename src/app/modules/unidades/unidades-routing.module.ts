import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { UnidadesModule } from './unidades.module';

import * as componentsUnidades from "./components";

export const ROUTES:Routes=[
    {
        path:'unidades-habitacionales',
        component:componentsUnidades.UnidadesHabitacionalesComponent
    }
];

@NgModule({
    imports: [UnidadesModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class UnidadesRoutingModule {}