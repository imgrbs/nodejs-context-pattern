import EventList from '../../src/event/model/EventList.model';
import Event from '../../src/event/model/Event.model';

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
  getOne(eventId) {
    const { events } = this.eventList;
    return events.filter((e) => e.getEvent().id === eventId);
  }
  destroy() {
    this.eventList = new EventList([]);
    return ;
  }
}

export default EventContext
