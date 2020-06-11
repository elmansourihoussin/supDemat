import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxEntrantComponent } from './flux-entrant.component';

describe('FluxEntrantComponent', () => {
  let component: FluxEntrantComponent;
  let fixture: ComponentFixture<FluxEntrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluxEntrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxEntrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
