class EventList {
  constructor(events) {
    this.events = events
  }
  create(event) {
    this.events.push(event);
    return this.events;
  }
  getAll() {
    return this.events;
  }
}

export default EventList
