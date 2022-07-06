import EventInterface from '../events/Event.interface';
import EventHandlerInterface from './EventHandler.interface';
import TrackerOrderEvent from '../events/TrackerOrderEvent';

export default class SendMessageToKafkaEventHandler
  implements EventHandlerInterface<EventInterface>
{
  handle(event: TrackerOrderEvent): void {
    console.log('dado send Kafka', event);
  }
}
