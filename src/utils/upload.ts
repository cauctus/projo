import { Impro } from '../models/Impro.model';
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

export async function parseImportedImproFile(file: Blob): Promise<Impro[]> {
  const improFileContent = await fileToJson(file);

  if (improFileContent.version === 1) {
    const fixedImpro = (improFileContent.impros as Impro[]).map(({ duration, ...impro }) => ({ duration: ((duration / 60000) % 60) * 60000, ...impro }));

    return fixedImpro;
  } else {
    throw 'Unsupported version';
  }
}
