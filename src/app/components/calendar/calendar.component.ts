import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarTypeView } from 'primeng/calendar';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

import { Application, ApplicationData } from '../../model/Application';
import { 
  ButtonNameType,
  ButtonValueType,
  FilterType,
  ViewType,
  SelectionModeType,
  DateFormatType
} from './calendar.types';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalenderComponent implements OnInit {
  selectedDate: any;
  calendarOptions = [
      {name: ButtonNameType.YEAR, value: ButtonValueType.YEAR},
      {name: ButtonNameType.MONTH, value: ButtonValueType.MONTH},
      {name: ButtonNameType.DAY, value: ButtonValueType.DAY},
      {name: ButtonNameType.CUSTOM, value: ButtonValueType.CUSTOM},
  ];
  selectedButton: string = ButtonValueType.DAY;
  view: CalendarTypeView = ViewType.DATE;
  dateFormat: string = DateFormatType.DAY;
  selectionMode: string = SelectionModeType.SINGLE;
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
    this.selectionMode = SelectionModeType.SINGLE;
    this.selectedDate = null;
    switch(this.selectedButton){
      case ButtonValueType.YEAR:
          this.view = ViewType.YEAR;
          this.dateFormat = DateFormatType.YEAR;
          this.selectedButton = ButtonValueType.YEAR;
          break;
      case ButtonValueType.MONTH:
        this.view = ViewType.MONTH;
        this.dateFormat = DateFormatType.MONTH;
        this.selectedButton = ButtonValueType.MONTH;
        break;
      case ButtonValueType.DAY:
        this.view = ViewType.DATE;
        this.dateFormat = DateFormatType.DAY;
        this.selectedButton = ButtonValueType.DAY;
        break;
      case ButtonValueType.CUSTOM:
        this.view = ViewType.DATE;
        this.dateFormat = DateFormatType.DAY;
        this.selectionMode = SelectionModeType.RANGE;
        this.selectedButton = ButtonValueType.CUSTOM;
        break;
      default: 
        this.view = ViewType.DATE;
        this.dateFormat = DateFormatType.DAY;
        this.selectedButton = ButtonValueType.DAY;
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
        case FilterType.COMPANY:
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
      case ButtonValueType.YEAR:
        result = this.sortedData.filter((row) => {
          return row.dateSubmitted.getFullYear() === this.selectedDate.getFullYear();
        });
        break;
      case ButtonValueType.MONTH:
        result = this.sortedData.filter((row) => {
          return (row.dateSubmitted.getFullYear() === this.selectedDate.getFullYear() 
                && row.dateSubmitted.getMonth() === this.selectedDate.getMonth());
        });
        break;
      case ButtonValueType.DAY:
        result = this.sortedData.filter((row) => {
          return (row.dateSubmitted.toDateString() === this.selectedDate.toDateString());
        });
        break;
      case ButtonValueType.CUSTOM:
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
