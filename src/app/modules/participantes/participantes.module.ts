import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import * as componentsEstudent from './components';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    declarations: [...componentsEstudent.components],
    exports: [
        ...componentsEstudent.components,RouterModule
    ],
})
export class ParticipantesModule {}