import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-screen',
  templateUrl: './orders-screen.component.html',
  styleUrls: ['./orders-screen.component.scss']
})
export class OrdersScreenComponent implements OnInit {
  ordersStatusList: any[] = [
    { nome: 'Ordered', color: 'primary', disabled: false },
    { nome: 'Delivered', color: 'primary', disabled: false },
    { nome: 'Canceled', color: 'primary', disabled: false },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
