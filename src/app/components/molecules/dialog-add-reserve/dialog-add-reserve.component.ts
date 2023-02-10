import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-reserve',
  templateUrl: './dialog-add-reserve.component.html',
  styleUrls: ['./dialog-add-reserve.component.scss']
})
export class DialogAddReserveComponent implements OnInit {

  addRoomForm!: FormGroup

  constructor(
    public dialogRef: MatDialogRef<DialogAddReserveComponent>
  ) { }

  ngOnInit(): void {
    this.addRoomForm = new FormGroup({
      roomField: new FormControl('', [Validators.required, Validators.minLength(3)]),
      guestField: new FormControl('', [Validators.required]),
      companionField: new FormControl('', [Validators.required]),
      dateField: new FormControl('', [Validators.required]),
      daysField: new FormControl('', [Validators.required]),
      statusField: new FormControl('', [Validators.required]),
    });
  }

  get roomField() {
    return this.addRoomForm.get('roomField')!;
  }

  get guestField() {
    return this.addRoomForm.get('guestField')!;
  }

  get companionField() {
    return this.addRoomForm.get('companionField')!;
  }

  get dateField() {
    return this.addRoomForm.get('dateField')!;
  }

  get daysField() {
    return this.addRoomForm.get('daysField')!;
  }

  get statusField() {
    return this.addRoomForm.get('statusField')!;
  }

  submit() {
    if (this.addRoomForm.invalid) {
      return;
    }
    console.log('submit', this.addRoomForm.value);
    this.dialogRef.close();
  }

  cancelSubmit(e: Event) {
    e.preventDefault();
  }

}
