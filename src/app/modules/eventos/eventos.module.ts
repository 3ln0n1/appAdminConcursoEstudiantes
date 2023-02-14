import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

import * as componentsEventos from './components';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatTableModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatIconModule
    ],
    providers: [],
    declarations: [...componentsEventos.components],
    exports: [
        ...componentsEventos.components,RouterModule
    ],
})
export class EventosModule {}