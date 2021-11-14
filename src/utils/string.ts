export function formatTime(msTotal: number, { showHours }: { showHours: boolean }) {
  const date = new Date(msTotal);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return showHours ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
}

export function formatTimer(timer: { elapsed: number; duration: number }, { showHours }: { showHours: boolean } = { showHours: false }) {
  return formatTime(timer.duration - timer.elapsed, { showHours });
}
