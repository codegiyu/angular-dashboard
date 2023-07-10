import { Component, OnInit } from '@angular/core';
import { GlobalStateService } from 'src/services/global-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private state: GlobalStateService
  ) {}

  ngOnInit(): void {
    this.state.setPage("home")
  }
}
