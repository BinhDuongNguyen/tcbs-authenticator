import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { BasicOtpComponent } from './basic-otp/basic-otp.component';
import { AdvanceOtpComponent } from './advance-otp/advance-otp.component';

const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'basic-otp',
        component: BasicOtpComponent
      },
      {
        path: 'advance-otp',
        component: AdvanceOtpComponent
      }
    ]
  }
];

export const HomeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);
