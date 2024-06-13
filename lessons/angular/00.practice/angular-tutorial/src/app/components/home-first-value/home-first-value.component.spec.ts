import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFirstValueComponent } from './home-first-value.component';

describe('HomeFirstValueComponent', () => {
  let component: HomeFirstValueComponent;
  let fixture: ComponentFixture<HomeFirstValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeFirstValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFirstValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
