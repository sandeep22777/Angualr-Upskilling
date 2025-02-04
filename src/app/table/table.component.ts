import { Component, ViewChild } from '@angular/core';
import Dummy_Data from '../../dummy_data';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconAnchor, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-table',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  DUMMY_DATA = Array.from({ length: 35 }, (_, index) => ({
    id: index + 1,
    name: `Name ${index + 1}`,
    age: Math.floor(Math.random() * 60) + 18,
    email: `user${index + 1}@example.com`,
    phone: `123-456-78${index.toString().padStart(2, '0')}`,
    city: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'][
      Math.floor(Math.random() * 5)
    ],
    isActive: Math.random() > 0.5,
  }));

  displayedColumns: string[] = [
    'id',
    'name',
    'age',
    'email',
    'phone',
    'city',
    'isActive',
  ];

  dataSource = new MatTableDataSource(this.DUMMY_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
