import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


import * as componentsNavbar from './components';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatCardModule,
        MatIconModule
    ],
    providers: [],
    declarations: [...componentsNavbar.components],
    exports: [
        ...componentsNavbar.components,RouterModule,MatCardModule,MatIconModule
    ],
})
export class NavbarModule {}