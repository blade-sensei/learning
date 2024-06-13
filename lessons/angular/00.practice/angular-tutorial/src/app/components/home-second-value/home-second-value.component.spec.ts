import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSecondValueComponent } from './home-second-value.component';

describe('HomeSecondValueComponent', () => {
  let component: HomeSecondValueComponent;
  let fixture: ComponentFixture<HomeSecondValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSecondValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSecondValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
