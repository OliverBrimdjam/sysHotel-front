import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLogoComponent } from './components/atoms/main-logo/main-logo.component';
import { ButtonIconComponent } from './components/atoms/button-icon/button-icon.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonFlatComponent } from './components/atoms/button-flat/button-flat.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLogoComponent,
    ButtonIconComponent,
    ButtonFlatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
