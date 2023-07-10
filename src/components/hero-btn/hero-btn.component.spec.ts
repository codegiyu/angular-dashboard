import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBtnComponent } from './hero-btn.component';

describe('HeroBtnComponent', () => {
  let component: HeroBtnComponent;
  let fixture: ComponentFixture<HeroBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroBtnComponent]
    });
    fixture = TestBed.createComponent(HeroBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
