import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';


import * as componentsLogin from './components';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        //BrowserModule,
        //BrowserAnimationsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule
        
    ],
    providers: [],
    declarations: [...componentsLogin.components],
    exports: [
        ...componentsLogin.components,RouterModule
    ],
})
export class AuthModule {}