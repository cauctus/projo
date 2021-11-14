export enum TimerSate {
  RUNNING,
  PAUSED,
  STOPPED,
}

export interface Timer {
  elapsed: number;
  duration: number;
  intervalId: number;
  state: TimerSate;
}
