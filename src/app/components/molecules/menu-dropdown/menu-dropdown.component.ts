import { ComponentType } from '@angular/cdk/portal';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-dropdown',
  templateUrl: './menu-dropdown.component.html',
  styleUrls: ['./menu-dropdown.component.scss']
})
export class MenuDropdownComponent implements OnInit {
  @Input() collection: any[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
