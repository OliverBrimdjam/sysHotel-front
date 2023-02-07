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
import { HeaderComponent } from './components/molecules/header/header.component';
import { MenuNavComponent } from './components/molecules/menu-nav/menu-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLogoComponent,
    ButtonIconComponent,
    ButtonFlatComponent,
    HeaderComponent,
    MenuNavComponent
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
