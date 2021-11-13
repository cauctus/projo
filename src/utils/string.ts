export function formatTime(secondsTotal: number) {
  const minutes = Math.floor(secondsTotal / 60)
    .toString()
    .padStart(2, '0');

  const seconds = (secondsTotal % 60).toString().padStart(2, '0');

  return `${minutes}:${seconds}`;
}
