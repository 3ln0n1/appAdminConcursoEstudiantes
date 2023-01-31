import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import * as componentsSeminarios from './components';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    providers: [],
    declarations: [...componentsSeminarios.components],
    exports: [
        ...componentsSeminarios.components,RouterModule
    ],
})
export class SeminariosModule {}