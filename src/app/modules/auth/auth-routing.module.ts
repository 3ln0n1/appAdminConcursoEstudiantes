import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AuthModule } from './auth.module';

import * as componentsLogin from "./components";

export const ROUTES:Routes=[
    {
        path:'login',
        component:componentsLogin.LoginComponent,
    }
];

@NgModule({
    imports: [AuthModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}