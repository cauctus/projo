const BROADCAST_CHANNEL_NAME = 'projo-bc';

class EventService {
  private channel = new BroadcastChannel(BROADCAST_CHANNEL_NAME);
  private events: { [key: string]: Function[] } = {};

  constructor() {
    this.channel.onmessage = ({ data }) => {
      const { event, args } = data;
      this.trigger(event, args);
    };
  }

  private trigger(event: string, ...args: unknown[]) {
    (this.events[event] ?? []).forEach((cb) => cb(...args));
  }

  on(event: string, cb: Function) {
    (this.events[event] ??= []).push(cb);

    return () => (this.events[event] = (this.events[event] || []).filter((i) => i !== cb));
  }

  emit(event: string, ...args: unknown[]) {
    this.channel.postMessage({ event, args });
  }
}

export const eventService = new EventService();
