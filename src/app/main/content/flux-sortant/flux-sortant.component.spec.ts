import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxSortantComponent } from './flux-sortant.component';

describe('FluxSortantComponent', () => {
  let component: FluxSortantComponent;
  let fixture: ComponentFixture<FluxSortantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluxSortantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxSortantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
