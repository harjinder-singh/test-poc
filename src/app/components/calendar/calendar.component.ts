import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarTypeView } from 'primeng/calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalenderComponent implements OnInit {
  selectedDate: any;
  selectedButton: string = "day";
  view: CalendarTypeView = "date";
  dateFormat: string = "mm/dd/yy";
  selectionMode: string = "single";

  @ViewChild('myCalendar') calendar: any;

  constructor() { }

  ngOnInit(): void {
  }
  onCalendarChange(type: string){
    this.selectionMode = "single";
    this.selectedDate = null;
    switch(type){
      case "Year":
          this.view = "year";
          this.dateFormat = "yy";
          this.selectedButton = "year";
          break;
      case "Month":
        this.view = "month";
        this.dateFormat = "mm/yy";
        this.selectedButton = "month";
        break;
      case "Day":
        this.view = "date";
        this.dateFormat = "mm/dd/yy";
        this.selectedButton = "day";
        break;
      case "Custom" :
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
}
