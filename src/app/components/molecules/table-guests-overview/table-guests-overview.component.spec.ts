import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGuestsOverviewComponent } from './table-guests-overview.component';

describe('TableGuestsOverviewComponent', () => {
  let component: TableGuestsOverviewComponent;
  let fixture: ComponentFixture<TableGuestsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableGuestsOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableGuestsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
