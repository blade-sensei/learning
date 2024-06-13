import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCardComponent } from './about-card.component';

describe('AboutCardComponent', () => {
  let component: AboutCardComponent;
  let fixture: ComponentFixture<AboutCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
