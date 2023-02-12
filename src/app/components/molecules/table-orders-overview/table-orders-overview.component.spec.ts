import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOrdersOverviewComponent } from './table-orders-overview.component';

describe('TableOrdersOverviewComponent', () => {
  let component: TableOrdersOverviewComponent;
  let fixture: ComponentFixture<TableOrdersOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOrdersOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableOrdersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
