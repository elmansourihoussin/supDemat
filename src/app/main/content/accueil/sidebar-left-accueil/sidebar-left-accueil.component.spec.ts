import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLeftAccueilComponent } from './sidebar-left-accueil.component';

describe('SidebarLeftAccueilComponent', () => {
  let component: SidebarLeftAccueilComponent;
  let fixture: ComponentFixture<SidebarLeftAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarLeftAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarLeftAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
