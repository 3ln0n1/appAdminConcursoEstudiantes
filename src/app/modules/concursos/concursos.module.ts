import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import * as componentsConcursos from './components';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    providers: [],
    declarations: [...componentsConcursos.components],
    exports: [
        ...componentsConcursos.components,RouterModule
    ],
})
export class ConcursosModule {}