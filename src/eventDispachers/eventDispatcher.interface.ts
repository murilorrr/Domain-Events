import EventHandlerInterface from '../eventsHandlers/EventHandler.interface';
import EventInterface from '../events/Event.interface';

export default interface EventDispatcherInterface {
  register(eventName: string, eventHandler: EventHandlerInterface): void;

  notify(event: EventInterface): void;
}
