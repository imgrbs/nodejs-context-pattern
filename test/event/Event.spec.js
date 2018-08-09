const chai = require('chai');
const should = chai.should();

import Services from '../../src/ServiceProvider';
import EventContext from '../stub/Event.context';

describe('Event Testsuite', () => {
   let eventService
   let newEvent
   let ctx

   beforeEach (() => {
      ctx = new EventContext();
      eventService = new Services.EventService(ctx);
      newEvent  = {
         'id': 1,
         'eventName': 'Hello React'
      };
   })
   afterEach (() => {
      eventService.destroy();
   })

   it('should create and return event correctly', async () => {
      eventService.create(newEvent);
      const [ event ] = await eventService.getOne(1);
      const result = event.getEvent().should.be.an('object');
      result.have.property('id').equal(1)
      result.have.property('eventName').equal('Hello React');
      return ;
   });

});
