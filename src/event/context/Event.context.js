import EventList from '../model/EventList.model';
import Event from '../model/Event.model';

class EventContext {
  constructor() {
    this.eventList = new EventList([]);
  }
  create(event) {
    return this.eventList.create(new Event(event));
  }
  getAll() {
    return this.eventList.getAll();
  }
}

export default EventContext
