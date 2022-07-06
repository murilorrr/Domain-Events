import EventInterface from '../events/Event.interface';

export default interface EventHandlerInterface<
  T extends EventInterface = EventInterface,
> {
  handle(event: T): void;
}
