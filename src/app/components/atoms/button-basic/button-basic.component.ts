import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-basic',
  templateUrl: './button-basic.component.html',
  styleUrls: ['./button-basic.component.scss']
})
export class ButtonBasicComponent implements OnInit {
  @Input() content: string = '';
  @Input() colorSchema: 'primary' | 'secondary' | 'default' | '' = 'primary';
  @Input() url: string | undefined = undefined;
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
