import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreButtonComponent } from './more-button.component';

describe('MoreButtonComponent', () => {
  let component: MoreButtonComponent;
  let fixture: ComponentFixture<MoreButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoreButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
