import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';

import { GraphService } from '../graph.service';
import { AlertsService } from '../alerts.service';
import { Drive } from '../drive';
import { DateTimeTimeZone } from '../date-time';

@Component({
  selector: 'app-onedrive',
  templateUrl: './onedrive.component.html',
  styleUrls: ['./onedrive.component.css']
})
export class OnedriveComponent implements OnInit {

  public drives: Drive[];

  constructor(
    private graphService: GraphService,
    private alertsService: AlertsService
    ) { }

  ngOnInit(): void {
    this.graphService.getOneDrives()
      .then((drives) => {
        this.drives = drives;
      });
  }

  viewPage(url: string): void {
    window.open(url, "_blank");
  }

  formatDateTimeTimeZone(dateTime: string): string {
    try {
      return moment.tz(dateTime, 'UTC').format();
    }
    catch(error) {
      this.alertsService.add('DateTimeTimeZone conversion error', JSON.stringify(error));
    }
  }
}
