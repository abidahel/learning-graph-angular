import { Component, OnInit } from '@angular/core';

import { GraphService } from '../graph.service';
import { AlertsService } from '../alerts.service';
import { Drive } from '../drive';

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

}
