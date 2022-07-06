import EventHandler from '../eventsHandlers/EventHandler.interface';
import EventInterface from '../events/Event.interface';
import EventDispatcherInterface from './eventDispatcher.interface';
import EventHandlerInterface from '../eventsHandlers/EventHandler.interface';

export default class EventDispatcher implements EventDispatcherInterface {
  private eventHandlers: { [eventName: string]: EventHandlerInterface[] } = {};

  get getEventHandlers(): { [eventName: string]: EventHandlerInterface[] } {
    return this.eventHandlers;
  }

  notify(event: EventInterface): void {
    const eventName: string = event.constructor.name;
    if (this.eventHandlers[eventName]) {
      this.eventHandlers[eventName].forEach(handler => handler.handle(event));
    }
  }

  register(
    eventName: string,
    eventHandler: EventHandler<EventInterface>,
  ): void {
    if (!this.eventHandlers[eventName]) {
      this.eventHandlers[eventName] = [];
    }
    this.eventHandlers[eventName].push(eventHandler);
  }
}
