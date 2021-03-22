import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestCardComponent } from './interest-card.component';

describe('InterestCardComponent', () => {
  let component: InterestCardComponent;
  let fixture: ComponentFixture<InterestCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
