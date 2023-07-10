import { Component, OnInit } from '@angular/core';
import { GlobalStateService } from 'src/services/global-state.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private state: GlobalStateService
  ) {}

  ngOnInit(): void {
    this.state.setPage("profile")
  }
}
