type FormatTimer = { showHours: boolean };

export function formatTime(msTotal: number, { showHours }: FormatTimer = { showHours: false }) {
  const date = new Date(msTotal);
  date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return showHours ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
}

export function formatTimer(timer: { elapsed: number; duration: number }, config: FormatTimer = { showHours: false }) {
  return formatTime(timer.duration - timer.elapsed, config);
}
