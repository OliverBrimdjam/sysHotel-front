import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input() title: string | undefined = undefined;
  @Input() collection: any[] = [];
  @Input() buttonColor: 'primary' | 'secondary' | 'default' | '' = 'primary';
  @Input() disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
