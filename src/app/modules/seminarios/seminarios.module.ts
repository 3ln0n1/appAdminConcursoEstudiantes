import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';


import * as componentsSeminarios from './components';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatTableModule,
        MatPaginatorModule,
        MatCheckboxModule,
        FormsModule
    ],
    providers: [],
    declarations: [...componentsSeminarios.components],
    exports: [
        ...componentsSeminarios.components,RouterModule
    ],
})
export class SeminariosModule {}