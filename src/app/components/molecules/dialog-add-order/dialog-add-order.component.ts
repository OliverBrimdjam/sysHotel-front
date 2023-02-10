import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-order',
  templateUrl: './dialog-add-order.component.html',
  styleUrls: ['./dialog-add-order.component.scss']
})
export class DialogAddOrderComponent implements OnInit {
  addOrderForm!: FormGroup

  constructor(
    public dialogRef: MatDialogRef<DialogAddOrderComponent>
  ) { }

  ngOnInit(): void {
    this.addOrderForm = new FormGroup({
      guestField: new FormControl('', [Validators.required, Validators.minLength(3)]),
      serviceField: new FormControl('', [Validators.required]),
    });
  }

  get guestField() {
    return this.addOrderForm.get('guestField')!;
  }

  get serviceField() {
    return this.addOrderForm.get('serviceField')!;
  }

  submit() {
    if (this.addOrderForm.invalid) {
      return;
    }
    console.log('submit', this.addOrderForm.value);
    this.dialogRef.close();
  }

  cancelSubmit(e: Event) {
    e.preventDefault();
  }
}
