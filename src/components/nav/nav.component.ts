import { Component } from '@angular/core';
import { GlobalStateService } from '../../services/global-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  page: any = "";

  constructor (
    private state: GlobalStateService,
    private _router: Router
  ) {
    this.page = this.state.getPage()
  }

  handleCloseMenu() {
    this.state.setMenuIsOpen(false)
  }

  setGlobalPage(str: string) {
    this.state.setPage(str)
    this._router.navigateByUrl(str !== "home" ? str : "")
    this.state.setMenuIsOpen(false)
  }

  logoClick() {
    this.state.setMenuIsOpen(false)
    this._router.navigateByUrl("")
  }
}
