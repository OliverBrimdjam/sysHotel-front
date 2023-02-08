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
import { MatCardModule } from '@angular/material/card';
import { MainTemplateComponent } from './components/templates/main-template/main-template.component';
import { MainComponent } from './pages/main/main.component';
import { MainScreenComponent } from './components/organisms/screen/main-screen/main-screen.component';
import { MatDividerModule } from '@angular/material/divider';
import { RoomOverviewComponent } from './components/molecules/room-overview/room-overview.component';
import { TableComponent } from './components/atoms/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { ChartComponent } from './pages/chart/chart.component';
import { ChartScreenComponent } from './components/organisms/screen/chart-screen/chart-screen.component';

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
    MainScreenComponent,
    RoomOverviewComponent,
    TableComponent,
    ChartComponent,
    ChartScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
