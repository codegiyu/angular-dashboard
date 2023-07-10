import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {

  constructor() {}

  @Input() title: string = ""
  @Input() intro: string = ""

  searchForm = new FormGroup({
    search: new FormControl("", [Validators.required])
  })

  searchApp() {
    this.searchForm.reset();
  }
}
