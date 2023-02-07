import { Component, OnInit } from '@angular/core';
import { MainScreenComponent } from 'src/app/components/organisms/screen/main-screen/main-screen.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  mainComponent: any = MainScreenComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
