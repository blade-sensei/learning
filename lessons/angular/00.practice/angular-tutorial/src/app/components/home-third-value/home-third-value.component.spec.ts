import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeThirdValueComponent } from './home-third-value.component';

describe('HomeThirdValueComponent', () => {
  let component: HomeThirdValueComponent;
  let fixture: ComponentFixture<HomeThirdValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeThirdValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeThirdValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
