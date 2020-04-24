import { IdentitySet } from './identity-set';
import { Url } from 'url';
import { FileSystemInfo } from './file-system-info';

export class ParentReference {
  driveId: string;
  driveType: string;
  id: string;
  path: string;
}

export class Drive {
  name: string;
  webUrl: Url;
  createdBy: IdentitySet;
  lastmodiefiedBy: IdentitySet;
  parentReference: ParentReference;
  fileSystemInfo: FileSystemInfo;
}
