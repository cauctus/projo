export enum TimerSate {
  RUNNING,
  PAUSED,
  STOPPED,
  ENDED,
}

export interface Timer {
  elapsed: number;
  duration: number;
  intervalId: number;
  state: TimerSate;

  start(): void;
  stop(): void;
  pause(): void;
  setDuration(duration: number | null): void;
}
