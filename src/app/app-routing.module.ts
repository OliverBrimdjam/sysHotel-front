import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ChartComponent } from './pages/chart/chart.component';
import { HistoryComponent } from './pages/history/history.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { GuestsComponent } from './pages/guests/guests.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'guests', component: GuestsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
