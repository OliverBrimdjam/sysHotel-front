import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsOverviewComponent } from './guests-overview.component';

describe('GuestsOverviewComponent', () => {
  let component: GuestsOverviewComponent;
  let fixture: ComponentFixture<GuestsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestsOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
