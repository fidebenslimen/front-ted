import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,OnInit
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  endOfMonth,
  subDays,
  addDays,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { setHours, setMinutes } from 'date-fns';
import { EventColor } from 'calendar-utils';

const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-calenderetudiant',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calenderetudiant.component.html',
  styleUrls: ['./calenderetudiant.component.css']
})
export class CalenderetudiantComponent implements OnInit {
  view: CalendarView = CalendarView.Day;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      title: 'No event end date',
      start: setHours(setMinutes(new Date(), 0), 8),
      color: colors['blue'],
    },
    {
      title: 'No event end date',
      start: setHours(setMinutes(new Date(), 0), 11),
      color: colors['yellow'],
    },
  ];


  ngOnInit(): void {
      
  }
}
