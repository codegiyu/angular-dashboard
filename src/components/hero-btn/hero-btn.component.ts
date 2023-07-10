import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-btn',
  templateUrl: './hero-btn.component.html',
  styleUrls: ['./hero-btn.component.scss']
})

export class HeroBtnComponent {

  constructor() {}

  @Input() btnText: string = ""
  @Input() imgSrc: string = ""
}
