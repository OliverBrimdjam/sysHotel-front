import { Component, OnInit } from '@angular/core';
import { ChartScreenComponent } from 'src/app/components/organisms/screen/chart-screen/chart-screen.component';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  chartComponent: any = ChartScreenComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
