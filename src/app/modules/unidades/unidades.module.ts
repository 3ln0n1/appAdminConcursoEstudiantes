import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';


import * as componentsUnits from './components';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        MatPaginatorModule,
        FormsModule
    ],
    providers: [],
    declarations: [...componentsUnits.components,],
    exports: [
        ...componentsUnits.components,RouterModule
    ],
})
export class UnidadesModule {}