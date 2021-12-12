import { Impro } from './Impro.model';

export interface FileExport {
  name: 'projo export';
  version: 1;
  projoVersion: string;
  description: string;
  impros: Impro[];
}
