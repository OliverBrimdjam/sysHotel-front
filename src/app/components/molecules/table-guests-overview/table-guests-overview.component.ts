import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GuestStateService } from 'src/app/store/guest-state.service';

@Component({
  selector: 'app-table-guests-overview',
  templateUrl: './table-guests-overview.component.html',
  styleUrls: ['./table-guests-overview.component.scss']
})
export class TableGuestsOverviewComponent implements OnInit {
  collection: any[] | undefined = []
  displayedColumns: string[] = ['name', 'email', 'phone', 'documentType', 'documentCode'];
  dataSource!: MatTableDataSource<any>;
  filterFormControl = new FormControl('');


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;


  constructor(private guestStateService: GuestStateService) {}

  ngOnInit(): void {

    this.getGuestList();
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

  getGuestList() {
    this.guestStateService.getGuestState().subscribe(gusts => {
      this.collection = gusts.map((guest) => {
        return { name: guest.name, email: guest.email, phone: guest.phone, documentType: guest.documentType, documentCode: guest.documentCode }
      });
      this.dataSource = new MatTableDataSource(this.collection);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
