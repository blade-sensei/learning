import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hero2Component } from './hero-2.component';

describe('Hero2Component', () => {
  let component: Hero2Component;
  let fixture: ComponentFixture<Hero2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hero2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hero2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
