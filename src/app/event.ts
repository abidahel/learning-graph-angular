import { DateTimeTimeZone } from './date-time';
import { Recipient } from './user'
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// <eventClasses>
// For a full list of fields, see
// https://docs.microsoft.com/graph/api/resources/event?view=graph-rest-1.0
export class Event {
  subject: string;
  organizer: Recipient;
  start: DateTimeTimeZone;
  end: DateTimeTimeZone;
}
