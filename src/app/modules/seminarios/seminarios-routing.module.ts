import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { SeminariosModule } from './seminarios.module';

import * as componentsSeminarios from "./components";

export const ROUTES:Routes=[
    {
        path:'seminarios',
        component:componentsSeminarios.SeminariosComponent,
    },
    {
        path:'documentos-formulario-seminario/:id',
        component:componentsSeminarios.DocumentosFormularioSeminarioComponent,
    },
    {
        path:'seminarios/addSeminario/:id',
        component:componentsSeminarios.AgregarSeminarioComponent,
    }
    ,
    {
        path:'seminarios/addSeminario',
        component:componentsSeminarios.AgregarSeminarioComponent,
    }
    ,
    {
        path:'formuariosSeminario/addFormulario',
        component:componentsSeminarios.AgregarFormularioComponent,
    }
];

@NgModule({
    imports: [SeminariosModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class SeminariosRoutingModule {}