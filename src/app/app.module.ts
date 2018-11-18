import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreComponentModule } from './components/core-component/core-component.module';
import { RoutingComponentModule } from './components/routing-component/routing-component.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreComponentModule,
    RoutingComponentModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
