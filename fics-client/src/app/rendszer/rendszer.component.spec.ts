import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendszerComponent } from './rendszer.component';

describe('RendszerComponent', () => {
  let component: RendszerComponent;
  let fixture: ComponentFixture<RendszerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendszerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendszerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
