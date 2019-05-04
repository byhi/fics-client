import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulListComponent } from './modul-list.component';

describe('ModulListComponent', () => {
  let component: ModulListComponent;
  let fixture: ComponentFixture<ModulListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
