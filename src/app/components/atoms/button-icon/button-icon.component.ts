import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss']
})
export class ButtonIconComponent implements OnInit {
  @Input() iconType: string = '';
  @Input() colorSchema: 'primary' | 'secondary' | 'default' | '' = 'primary';
  @Input() url: string | undefined = undefined;
  @Input() action: () => void = () => {}

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectTo(url: string) {
    this.router.navigate([url]);
  }



}
