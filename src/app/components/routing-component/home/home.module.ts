import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HomeRouting } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FooterComponent } from './footer/footer.component';
import { BasicOtpComponent } from './basic-otp/basic-otp.component';
import { AdvanceOtpComponent } from './advance-otp/advance-otp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRouting,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    HomeComponent,
    FooterComponent,
    BasicOtpComponent,
    AdvanceOtpComponent
  ]
})
export class HomeModule { }
