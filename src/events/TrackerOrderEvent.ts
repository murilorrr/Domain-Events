import EventInterface from './Event.interface';

export default class TrackerOrderEvent implements EventInterface {
  date: Date;
  eventData: any;

  constructor(eventData: any) {
    this.date = new Date();
    this.eventData = eventData;
  }
}
