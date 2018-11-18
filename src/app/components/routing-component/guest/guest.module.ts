import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestComponent } from './guest.component';
import { GuestRouting } from 'src/app/components/routing-component/guest/guest-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GuestRouting,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    GuestComponent,
    RegisterComponent
  ]
})
export class GuestModule { }
