import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-order',
  templateUrl: './dialog-add-order.component.html',
  styleUrls: ['./dialog-add-order.component.scss']
})
export class DialogAddOrderComponent implements OnInit {
  addGuestForm!: FormGroup

  constructor(
    public dialogRef: MatDialogRef<DialogAddOrderComponent>
  ) { }

  ngOnInit(): void {
    this.addGuestForm = new FormGroup({
      guestField: new FormControl('', [Validators.required, Validators.minLength(3)]),
      serviceField: new FormControl('', [Validators.required]),
    });
  }

  get guestField() {
    return this.addGuestForm.get('guestField')!;
  }

  get serviceField() {
    return this.addGuestForm.get('serviceField')!;
  }

  submit() {
    if (this.addGuestForm.invalid) {
      return;
    }
    console.log('submit', this.addGuestForm.value);
    this.dialogRef.close();
  }

  cancelSubmit(e: Event) {
    e.preventDefault();
  }
}
