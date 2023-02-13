import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GuestStateService } from 'src/app/store/guest-state.service';


@Component({
  selector: 'app-dialog-add-guest',
  templateUrl: './dialog-add-guest.component.html',
  styleUrls: ['./dialog-add-guest.component.scss']
})
export class DialogAddGuestComponent implements OnInit {

  addGuestForm!: FormGroup

  constructor(
    public dialogRef: MatDialogRef<DialogAddGuestComponent>,
    private guestStateService: GuestStateService
  ) { }

  ngOnInit(): void {
    this.addGuestForm = new FormGroup({
      nameField: new FormControl('', [Validators.required, Validators.minLength(3)]),
      emailField: new FormControl('', [Validators.required, Validators.minLength(3), Validators.email]),
      tel: new FormControl(''),
      docType: new FormControl(''),
      docCode: new FormControl(''),
    });
  }

  get nameField() {
    return this.addGuestForm.get('nameField')!;
  }

  get emailField() {
    return this.addGuestForm.get('emailField')!;
  }

  get tel() {
    return this.addGuestForm.get('tel')!;
  }

  get docType() {
    return this.addGuestForm.get('docType')!;
  }

  get docCode() {
    return this.addGuestForm.get('docCode')!;
  }

  submit() {
    if (this.addGuestForm.invalid) {
      return;
    }
    console.log('submit', this.addGuestForm.value);
    this.guestStateService.add({
      name: this.addGuestForm.value.nameField,
      email: this.addGuestForm.value.emailField,
      phone: this.addGuestForm.value.tel,
      documentType: this.addGuestForm.value.docType,
      documentCode: this.addGuestForm.value.docCode
    });
    this.dialogRef.close();
  }

  cancelSubmit(e: Event) {
    e.preventDefault();
  }

}
