import { Component, OnInit } from '@angular/core';
import { GlobalStateService } from '../../services/global-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  menuIsOpen!: any;

  constructor(
    private state: GlobalStateService,
    private _router: Router
  ) {
    this.menuIsOpen = this.state.getMenuIsOpen()
  }

  ngOnInit(): void {
    console.log(this.menuIsOpen)
  }

  handleOpenMenu() {
    this.state.setMenuIsOpen(true)
  }

  handleClickOutsideMenu(e: MouseEvent) {
    const menu = document.getElementById("mobile-nav-wrap")
    const target = e.target as Node
    if (menu) {
      if (!menu.contains(target)) {
        this.state.setMenuIsOpen(false)
      }
    }
  }

  logoClick() {
    this.state.setMenuIsOpen(false)
    this._router.navigateByUrl("")
  }
}
