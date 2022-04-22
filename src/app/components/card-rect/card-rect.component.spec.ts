import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRectComponent } from './card-rect.component';

describe('CardRectComponent', () => {
  let component: CardRectComponent;
  let fixture: ComponentFixture<CardRectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
