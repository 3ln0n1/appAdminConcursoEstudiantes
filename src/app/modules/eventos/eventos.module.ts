import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import * as componentsEventos from './components';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    providers: [],
    declarations: [...componentsEventos.components],
    exports: [
        ...componentsEventos.components,RouterModule
    ],
})
export class EventosModule {}