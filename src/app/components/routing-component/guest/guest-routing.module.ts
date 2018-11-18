import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestComponent } from './guest.component';
import { RegisterComponent } from './register/register.component';

const guestRoutes: Routes = [
  {
    path: 'guest',
    component: GuestComponent,
    children: [
      {
        path: 'register',
        component: RegisterComponent
      },
      // {
      //   path: 'sign-up',
      //   component: SignUpComponent
      // },

      // {
      //   path: 'forgot-password',
      //   component: ForgotPasswordComponent
      // },
      // {
      //   path: 'signUp',
      //   component: AboutUserComponent,
      //   resolve: {
      //     user: AboutUserResolve
      //   }
      // }
    ]
  }
];

export const GuestRouting: ModuleWithProviders = RouterModule.forChild(guestRoutes);
