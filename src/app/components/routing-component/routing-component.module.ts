import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { GuestModule } from './guest/guest.module';
import { HomeModule } from './home/home.module';

import { CoreComponentModule } from '../core-component/core-component.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CoreComponentModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    GuestModule,
    HomeModule
  ],
  exports: [
    GuestModule,
    HomeModule
  ]
})
export class RoutingComponentModule { }
