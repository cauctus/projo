export function getJSONDataUrl(obj: unknown) {
  return `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(obj))}`;
}

export function downloadObjectAsJson(exportObj: unknown, fileName = 'file.json') {
  const dataStr = getJSONDataUrl(exportObj);
  const downloadAnchorNode = document.createElement('a');

  downloadAnchorNode.setAttribute('href', dataStr);
  downloadAnchorNode.setAttribute('download', fileName);
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}
