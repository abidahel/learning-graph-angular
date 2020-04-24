import { Identity } from './identity';

// https://docs.microsoft.com/en-us/graph/api/resources/identitySet?view=graph-rest-1.0
export class IdentitySet {
  application: IdentitySet;
  user: Identity;
}
