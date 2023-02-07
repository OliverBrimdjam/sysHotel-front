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
import { SideBarComponent } from './components/molecules/side-bar/side-bar.component';
import {MatCardModule} from '@angular/material/card';
import { MainTemplateComponent } from './components/templates/main-template/main-template.component';
import { MainComponent } from './pages/main/main.component';
import { MainScreenComponent } from './components/organisms/screen/main-screen/main-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLogoComponent,
    ButtonIconComponent,
    ButtonFlatComponent,
    HeaderComponent,
    MenuNavComponent,
    SideBarComponent,
    MainTemplateComponent,
    MainComponent,
    MainScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
