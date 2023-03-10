import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RoomStateService } from 'src/app/store/room-state.service';

@Component({
  selector: 'app-dialog-add-room',
  templateUrl: './dialog-add-room.component.html',
  styleUrls: ['./dialog-add-room.component.scss']
})
export class DialogAddRoomComponent implements OnInit {

  addRoomForm!: FormGroup

  constructor(
    public dialogRef: MatDialogRef<DialogAddRoomComponent>,
    private roomStateService: RoomStateService
  ) { }

  ngOnInit(): void {
    this.addRoomForm = new FormGroup({
      nameField: new FormControl('', [Validators.required, Validators.minLength(3)]),
      // priceField: new FormControl('', [Validators.required]),
      statusField: new FormControl('', [Validators.required]),
      typeField: new FormControl('', [Validators.required]),
    });
  }

  get nameField() {
    return this.addRoomForm.get('nameField')!;
  }

  // get priceField() {
  //   return this.addRoomForm.get('priceField')!;
  // }

  get statusField() {
    return this.addRoomForm.get('statusField')!;
  }

  get typeField() {
    return this.addRoomForm.get('typeField')!;
  }

  submit() {
    if (this.addRoomForm.invalid) {
      return;
    }
    console.log('submit', this.addRoomForm.value);
    this.roomStateService.add(
      {
        name: this.addRoomForm.value.nameField,
        roomStatusId: this.addRoomForm.value.statusField,
        roomTypeId: this.addRoomForm.value.typeField,
      }
    );

    this.dialogRef.close();

  }

  cancelSubmit(e: Event) {
    e.preventDefault();
  }

}
