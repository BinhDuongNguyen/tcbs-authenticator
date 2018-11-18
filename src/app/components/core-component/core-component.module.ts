import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PinComponent } from './pin/pin.component';

@NgModule({
  declarations: [
    PinComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    PinComponent
  ]
})
export class CoreComponentModule { }
