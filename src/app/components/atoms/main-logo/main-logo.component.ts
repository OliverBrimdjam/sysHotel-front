import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-logo',
  templateUrl: './main-logo.component.html',
  styleUrls: ['./main-logo.component.scss']
})
export class MainLogoComponent implements OnInit {
  @Input() imgPath: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
