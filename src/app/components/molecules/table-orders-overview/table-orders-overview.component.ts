import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OrderStateService } from 'src/app/store/order-state.service';

@Component({
  selector: 'app-table-orders-overview',
  templateUrl: './table-orders-overview.component.html',
  styleUrls: ['./table-orders-overview.component.scss']
})
export class TableOrdersOverviewComponent implements OnInit {
  collection: any[] | undefined = []
  displayedColumns: string[] = ['reservation', 'roomService', 'roomServiceStatus', 'createdAt', 'updatedAt'];
  dataSource!: MatTableDataSource<any>;
  filterFormControl = new FormControl('');


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;


  constructor(private orderStateService: OrderStateService) {}

  ngOnInit(): void {

    this.getOrderList();
  }

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getOrderList() {
    this.orderStateService.getOrderState().subscribe(orders => {
      this.collection = orders.map((order) => {
        return { reservation: order.reservationId, roomServiceId: order.roomServiceId, roomServiceStatusId: order.roomServiceStatusId, createdAt: order.createdAt, updatedAt: order.updatedAt }
      });
      this.dataSource = new MatTableDataSource(this.collection);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log('alsdfçajfdçj', orders)
    });
  }

}
