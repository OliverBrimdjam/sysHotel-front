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
import { ReservesOverviewComponent } from './components/molecules/reserves-overview/reserves-overview.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { GuestsComponent } from './pages/guests/guests.component';
import { HistoryComponent } from './pages/history/history.component';
import { ButtonBasicComponent } from './components/atoms/button-basic/button-basic.component';
import { MenuDropdownComponent } from './components/molecules/menu-dropdown/menu-dropdown.component';
import { GuestScreenComponent } from './components/organisms/screen/guest-screen/guest-screen.component';
import { GuestsOverviewComponent } from './components/molecules/guests-overview/guests-overview.component';
import { ChartOverviewComponent } from './components/molecules/chart-overview/chart-overview.component';
import { OrdersOverviewComponent } from './components/molecules/orders-overview/orders-overview.component';
import { OrdersScreenComponent } from './components/organisms/screen/orders-screen/orders-screen.component';
import { NgChartsModule } from 'ng2-charts';

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
    ChartScreenComponent,
    ReservesOverviewComponent,
    OrdersComponent,
    GuestsComponent,
    HistoryComponent,
    ButtonBasicComponent,
    MenuDropdownComponent,
    GuestScreenComponent,
    GuestsOverviewComponent,
    ChartOverviewComponent,
    OrdersOverviewComponent,
    OrdersScreenComponent
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
    MatInputModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
