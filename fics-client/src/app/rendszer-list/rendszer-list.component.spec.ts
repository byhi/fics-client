import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendszerListComponent } from './rendszer-list.component';

describe('RendszerListComponent', () => {
  let component: RendszerListComponent;
  let fixture: ComponentFixture<RendszerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendszerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendszerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
