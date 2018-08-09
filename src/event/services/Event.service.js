class EventService {
  constructor(eventContext) {
    this.eventContext = eventContext
  }

  getOne(eventId) {
    return this.eventContext.getOne(eventId);
 }

  getAll() {
    return this.eventContext.getAll();
 }

  create(event) {
    return this.eventContext.create(event);
  }

  destroy() {
    return this.eventContext.destroy();
  }
}

export default EventService
