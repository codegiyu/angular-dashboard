import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBlockComponent } from './info-block.component';

describe('InfoBlockComponent', () => {
  let component: InfoBlockComponent;
  let fixture: ComponentFixture<InfoBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoBlockComponent]
    });
    fixture = TestBed.createComponent(InfoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
