import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidenavListComponent } from './slidenav-list.component';

describe('SlidenavListComponent', () => {
  let component: SlidenavListComponent;
  let fixture: ComponentFixture<SlidenavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidenavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidenavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
