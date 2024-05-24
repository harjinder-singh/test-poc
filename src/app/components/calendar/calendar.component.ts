import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarTypeView } from 'primeng/calendar';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource } from '@angular/material/table';

import { Application } from '../../model/application';
import { MatSort, Sort } from '@angular/material/sort';

import { ApplicationData } from '../../model/application';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalenderComponent implements OnInit {
  selectedDate: any;
  calendarOptions = [
      {name: 'Year', value: 'year'},
      {name: 'Month', value: 'month'},
      {name: 'Day', value: 'day'},
      {name: 'Custom', value: 'custom'},
  ];
  selectedButton: string = "day";
  view: CalendarTypeView = "date";
  dateFormat: string = "mm/dd/yy";
  selectionMode: string = "single";
  sortedData: Application[] = [];
  data: Application[] = ApplicationData;
  displayedColumns: string[] = [
    'Company', 
    'Jurisdiction',
    'Date Submitted',
    'Assessor',
    'Status',
    'Audit Type',
    'Audit Date',
    'Application No'
  ];
  dataSource = new MatTableDataSource<Application>(this.data);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('myCalendar') calendar: any;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { 
    this.sortedData = this.data.slice();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onCalendarChange(){
    this.selectionMode = "single";
    this.selectedDate = null;
    switch(this.selectedButton){
      case "year":
          this.view = "year";
          this.dateFormat = "yy";
          this.selectedButton = "year";
          break;
      case "month":
        this.view = "month";
        this.dateFormat = "mm/yy";
        this.selectedButton = "month";
        break;
      case "day":
        this.view = "date";
        this.dateFormat = "mm/dd/yy";
        this.selectedButton = "day";
        break;
      case "custom" :
        this.view = "date";
        this.dateFormat = "mm/dd/yy";
        this.selectionMode = "range";
        this.selectedButton = "custom";
        break;
      default: 
        this.view = "date";
        this.dateFormat = "mm/dd/yy";
        this.selectedButton = "day";
    }
  }

  sortData(sort: Sort){
    const data = this.data.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Company':
          return this.compare(a.company, b.company, isAsc);
        default:
          return 0;
      }
    });

    this.dataSource.data = this.sortedData;
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  filterData(){
    let result;
    switch(this.selectedButton){
      case "year":
        result = this.sortedData.filter((row) => {
          return row.dateSubmitted.getFullYear() === this.selectedDate.getFullYear();
        });
        break;
      case "month":
        result = this.sortedData.filter((row) => {
          return (row.dateSubmitted.getFullYear() === this.selectedDate.getFullYear() 
                && row.dateSubmitted.getMonth() === this.selectedDate.getMonth());
        });
        break;
      case "day":
        result = this.sortedData.filter((row) => {
          return (row.dateSubmitted.toDateString() === this.selectedDate.toDateString());
        });
        break;
      case "custom":
        result = this.sortedData.filter((row) => {
          return (row.dateSubmitted.getTime() >= this.selectedDate[0].getTime() && row.dateSubmitted.getTime() <= this.selectedDate[1].getTime()) 
        });
        break;
      default:
        result = this.sortedData.filter((row) => {
          return (row.dateSubmitted.toDateString() === this.selectedDate.toDateString());
        });
    }
    this.dataSource.data = result;
  }
}
