import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.scss']
})
export class MainTemplateComponent implements OnInit {
  @Input() mainComponent: any;

  buttonsArray: any[] = [
    { nome: 'Available', color: 'primary', disabled: false },
    { nome: 'Occupied', color: 'primary', disabled: false },
    { nome: 'Reserved', color: 'primary', disabled: false },
    { nome: 'Out of Order', color: 'primary', disabled: false },
    { nome: 'Maintenance', color: 'primary', disabled: false },
    { nome: 'cleaning', color: 'primary', disabled: false },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
