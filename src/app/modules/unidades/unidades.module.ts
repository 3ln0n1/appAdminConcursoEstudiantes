import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import * as componentsUnits from './components';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    providers: [],
    declarations: [...componentsUnits.components],
    exports: [
        ...componentsUnits.components,RouterModule
    ],
})
export class UnidadesModule {}