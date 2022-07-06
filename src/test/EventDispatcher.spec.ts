import EventDispatcher from '../eventDispachers/EventDispatcher';
import SendMessageToKafkaEventHandler from '../eventsHandlers/SendMessageToKafkaEventHandler';
import TrackerOrderEvent from '../events/TrackerOrderEvent';

describe('Tests for EventDispatcher', () => {
  it('should register a event', () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendMessageToKafkaEventHandler();

    eventDispatcher.register('TrackOrderEvent', eventHandler);

    expect(eventDispatcher.getEventHandlers['TrackOrderEvent']).toBeDefined();
    expect(eventDispatcher.getEventHandlers['TrackOrderEvent']).toHaveLength(1);
  });

  it('should be notify when event dispatch', () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendMessageToKafkaEventHandler();
    const event = new TrackerOrderEvent({
      volumes_ids: [1, 2, 3, 4],
      seller_id: 1,
      price: 32,
      address: 'string test',
    });

    const spyEventHandler = jest.spyOn(eventHandler, 'handle');

    eventDispatcher.register('TrackerOrderEvent', eventHandler);

    eventDispatcher.notify(event);

    expect(spyEventHandler).toHaveBeenCalled();
  });
});
