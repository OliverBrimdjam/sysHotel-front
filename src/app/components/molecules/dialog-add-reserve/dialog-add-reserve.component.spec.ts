import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddReserveComponent } from './dialog-add-reserve.component';

describe('DialogAddReserveComponent', () => {
  let component: DialogAddReserveComponent;
  let fixture: ComponentFixture<DialogAddReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddReserveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
