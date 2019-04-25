import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PandoraBoxComponent } from './pandora-box.component';

describe('PandoraBoxComponent', () => {
  let component: PandoraBoxComponent;
  let fixture: ComponentFixture<PandoraBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PandoraBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PandoraBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
