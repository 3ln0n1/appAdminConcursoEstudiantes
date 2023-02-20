import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';


import * as componentsConcursos from './components';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatTableModule,
        MatPaginatorModule,
        MatCheckboxModule,
        FormsModule,
        MatTooltipModule
        
        
    ],
    
    providers: [],
    declarations: [...componentsConcursos.components],
    exports: [
        ...componentsConcursos.components,RouterModule,
    ],
})
export class ConcursosModule {}