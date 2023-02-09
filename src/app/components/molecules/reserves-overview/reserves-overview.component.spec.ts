import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservesOverviewComponent } from './reserves-overview.component';

describe('ReservesOverviewComponent', () => {
  let component: ReservesOverviewComponent;
  let fixture: ComponentFixture<ReservesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservesOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
