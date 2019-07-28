import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandumComponent } from './randum.component';

describe('RandumComponent', () => {
  let component: RandumComponent;
  let fixture: ComponentFixture<RandumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
