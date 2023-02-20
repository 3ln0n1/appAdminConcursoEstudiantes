import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { NavbarModule } from './navbar.module';

import * as componentsNavbar from "./components";

export const ROUTES:Routes=[
    {
        path:'home',
        component:componentsNavbar.NavbarComponent,
    }
];

@NgModule({
    imports: [NavbarModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class NavbarRoutingModule {}