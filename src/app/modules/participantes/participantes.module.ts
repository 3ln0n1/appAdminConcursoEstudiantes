import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import * as componentsEstudent from './components';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    providers: [],
    declarations: [...componentsEstudent.components],
    exports: [
        ...componentsEstudent.components,RouterModule
    ],
})
export class ParticipantesModule {}