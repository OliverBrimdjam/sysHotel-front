import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReservesOverviewComponent } from './table-reserves-overview.component';

describe('TableReservesOverviewComponent', () => {
  let component: TableReservesOverviewComponent;
  let fixture: ComponentFixture<TableReservesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableReservesOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableReservesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
