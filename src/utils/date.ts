export function currentMillisToUTCMillis(millis: number) {
  const date = new Date(millis);

  return date.getTime() + date.getTimezoneOffset() * 60 * 1000;
}

export function utcMillisToCurrentMillis(millis: number) {
  const date = new Date(millis);

  return date.getTime() - date.getTimezoneOffset() * 60 * 1000;
}
