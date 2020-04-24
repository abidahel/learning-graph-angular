// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// <user>
export class User {
  displayName: string;
  email: string;
  avatar: string;
}
// </user>

// https://docs.microsoft.com/graph/api/resources/recipient?view=graph-rest-1.0
export class Recipient {
  emailAddress: EmailAddress;
}

// https://docs.microsoft.com/graph/api/resources/emailaddress?view=graph-rest-1.0
export class EmailAddress {
  name: string;
  address: string;
}
