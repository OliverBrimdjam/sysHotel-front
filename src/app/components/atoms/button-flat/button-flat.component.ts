import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-flat',
  templateUrl: './button-flat.component.html',
  styleUrls: ['./button-flat.component.scss']
})
export class ButtonFlatComponent implements OnInit {
  @Input() content: string = 'Button';
  @Input() colorSchema: 'primary' | 'secondary' | 'default' | '' = 'primary';
  @Input() url: string | undefined = undefined;
  @Input() action: () => void = () => { };
  @Input() disabled: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectTo(url: string) {
    this.router.navigate([url]);
  }
}
