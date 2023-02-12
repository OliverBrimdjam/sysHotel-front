import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRoomOverviewComponent } from './table-room-overview.component';

describe('TableRoomOverviewComponent', () => {
  let component: TableRoomOverviewComponent;
  let fixture: ComponentFixture<TableRoomOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRoomOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableRoomOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
