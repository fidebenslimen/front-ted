import { Component, OnInit } from '@angular/core';
import {ViewChild, TemplateRef } from '@angular/core';
import { startOfDay, endOfDay,isSameDay, isSameMonth, addHours, endOfMonth } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { EventColor } from 'calendar-utils';
import { FormGroup,FormBuilder } from '@angular/forms';
import { EvenementService } from 'src/app/services/evenement.service';
import { evenementModel } from './evenement.model';
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
  selector: 'app-evemenment',
  templateUrl: './evemenment.component.html',
  styleUrls: ['./evemenment.component.css']
})
export class EvemenmentComponent implements OnInit {

  @ViewChild('modalContent', { static: true }) modalContent!: TemplateRef<any>;
  event!:FormGroup;
  currentDate = new Date().toISOString();
  evenements: evenementModel= new  evenementModel();
  eventsData !:any;

  ngOnInit(): void {
    this.event = this.fb.group({
      id: [''],
      title: [''],
      descr: [''],
      start: [''],
      end: [''],
    });
  
    this.getAllActivite();
  
    // Initialize the events array with existing events
    this.events = this.eventsData.map((eventData: any) => ({
      title: eventData.title,
      start: new Date(eventData.start),
      end: new Date(eventData.end),
      color: colors['red'],
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
    }));
  }
  
  
  postCandidatDetails(): void {
    if (this.event.valid) {
      const newEvent: CalendarEvent = {
        title: this.event.value.title,
        start: new Date(this.event.value.start),
        end: new Date(this.event.value.end),
        color: colors['red'],
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      };
  
      // Add the new event to the events array
      this.events = [...this.events, newEvent];
  
      this.evenements.title = this.event.value.title;
      this.evenements.descr = this.event.value.descr;
      this.evenements.start = this.event.value.start.toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
      this.evenements.end = this.event.value.end.toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });

  
      this.eventService.postActivite(this.evenements).subscribe(
        res => {
          console.log(res);
          alert('Event added');
          this.event.reset();
          this.getAllActivite();
        },
        err => {
          alert('Something went wrong!!!');
        }
      );
    } else {
      alert('Please fill in all the required fields.');
    }
  }
  
  getAllActivite() {
    this.eventService.getActivite().subscribe(
      (res: any) => {
        this.eventsData = res;
        // Update the events array when eventsData is retrieved
        this.events = this.eventsData.map((eventData: any) => ({
          title: eventData.title,
          start: new Date(eventData.start),
          end: new Date(eventData.end),
          color: colors['red'],
          draggable: true,
          resizable: {
            beforeStart: true,
            afterEnd: true,
          },
        }));
      },
      (err: any) => {
        alert('Something went wrong!!!');
      }
    );
  }
  deleteevent(row: any){
    this.eventService.deleteActivite(row.id)
      .subscribe(res =>{
        alert("Activité suprimée");
        this.getAllActivite();

    })
  }

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData!: {
    action: string;
    event: CalendarEvent;
  };
  events: CalendarEvent[] = [];
  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh = new Subject<void>();



  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal,private fb: FormBuilder,private eventService: EvenementService) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors['red'],
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
