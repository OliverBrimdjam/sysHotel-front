import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableChartOverviewComponent } from './table-chart-overview.component';

describe('TableChartOverviewComponent', () => {
  let component: TableChartOverviewComponent;
  let fixture: ComponentFixture<TableChartOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableChartOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableChartOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
