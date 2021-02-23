import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemDetailComponent } from './card-item-detail.component';

describe('CardItemDetailComponent', () => {
  let component: CardItemDetailComponent;
  let fixture: ComponentFixture<CardItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardItemDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
