import { Component, OnInit } from '@angular/core';
import { GlobalStateService } from 'src/services/global-state.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor(
    private state: GlobalStateService
  ) {}

  ngOnInit(): void {
    this.state.setPage("reports")
  }
}
