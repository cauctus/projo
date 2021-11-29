import { Impro } from './../types/Impro.model';
export function readFile(file: Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = resolve;
    reader.onerror = reject;
    reader.readAsText(file);
  }).then((event) => (event as ProgressEvent<FileReader>).target?.result?.toString() ?? '');
}

export async function fileToJson(file: Blob) {
  return JSON.parse(await readFile(file));
}

export async function parseImportedImproFile(file: Blob) {
  const improFileContent = await fileToJson(file);

  if (improFileContent.version === 1) {
    return improFileContent.impros as Impro[];
  } else {
    throw 'Unsupported version';
  }
}
