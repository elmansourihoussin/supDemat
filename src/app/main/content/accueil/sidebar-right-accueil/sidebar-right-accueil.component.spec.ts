import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarRightAccueilComponent } from './sidebar-right-accueil.component';

describe('SidebarRightAccueilComponent', () => {
  let component: SidebarRightAccueilComponent;
  let fixture: ComponentFixture<SidebarRightAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarRightAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarRightAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
