import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';


import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import * as componentsEstudent from './components';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatSelectModule,
        MatToolbarModule,
        FormsModule, ReactiveFormsModule,
        MatIconModule,
        MatInputModule

    ],
    providers: [],
    declarations: [...componentsEstudent.components],
    exports: [
        ...componentsEstudent.components,RouterModule,MatSelectModule,
        MatToolbarModule,
        FormsModule, ReactiveFormsModule
    ],
})
export class EstudiantesModule {}