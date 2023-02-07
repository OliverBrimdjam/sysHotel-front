import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.scss']
})
export class MainTemplateComponent implements OnInit {
  @Input() mainComponent: any;
  buttonsArray: any[] = [
    { nome: 'Home', color: 'primary', disabled: false },
    { nome: 'Home', color: 'primary', disabled: false },
    { nome: 'Home', color: 'primary', disabled: false },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
